from transformers import BertModel
from transformers import BertTokenizer
from torch import nn
import torch

class BERTBadWordClassifier(nn.Module):
  def __init__(self):
    super(BERTBadWordClassifier, self).__init__()
    self.bert_model_name = "bert-base-cased"
    self.num_classes = 2
    self.bert = BertModel.from_pretrained(self.bert_model_name)
    self.tokenizer = BertTokenizer.from_pretrained(self.bert_model_name)
    self.device = torch.device("mps" if torch.backends.mps.is_built() else "cuda" if torch.cuda.is_available() else "cpu")
    self.dropout = nn.Dropout(0.1)
    self.fc = nn.Linear(self.bert.config.hidden_size, self.num_classes)
    self.load_state_dict(torch.load('classifier.pth', map_location=self.device))
    self.to(self.device)

  def forward(self, input_ids, attention_mask):
    outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
    pooled_output = outputs.pooler_output
    x = self.dropout(pooled_output)
    logits = self.fc(x)
    return logits
  
  def predict_bad_word(self, text, max_length=128):
    self.eval()
    encoding = self.tokenizer(text, return_tensors='pt', max_length=max_length, padding='max_length', truncation=True).to(self.device)

    with torch.no_grad():
        outputs = self.forward(input_ids=encoding['input_ids'], attention_mask=encoding['attention_mask'])
        probs = torch.nn.functional.softmax(outputs, dim=1)
        pred = torch.argmax(probs, dim=1).item()

    return pred, probs[0][pred].item()

