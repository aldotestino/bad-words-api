import os
from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from model import BERTBadWordClassifier

PORT = os.getenv("PORT", 8000)

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

model = BERTBadWordClassifier()

class DataModel(BaseModel):
    text: str

class ResponseModel(BaseModel):
    prediction: int
    description: str
    score: float

@app.post("/api/v1/predict", status_code=status.HTTP_200_OK, response_model=ResponseModel)
def predict(data: DataModel):
    pred, score = model.predict_bad_word(data.text)
    return {
        "prediction": pred, 
        "description": "Bad word" if pred == 1 else "Not a bad word",
        "score": score
    }


if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=PORT)