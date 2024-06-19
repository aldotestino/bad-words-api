import { Cpu, Sparkles, Timer, Workflow } from 'lucide-react';

export const avatarImages = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=500&h=500',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=500&h=500',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=500&h=500',
  'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?fit=crop&w=500&h=500',
  'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?fit=crop&w=500&h=500'
];

export const whyChoose = [{
  title: 'State-of-the-Art Technology',
  description: 'Powered by BERT, a leading model in natural language processing, our API understands context and nuances, offering superior detection capabilities.',
  icon: <Cpu />
}, {
  title: 'Real-Time Analysis',
  description: 'Instantly analyze sentences for bad words, ensuring immediate feedback and action.',
  icon: <Timer />
}, {
  title: 'High Accuracy',
  description: 'Benefit from advanced machine learning algorithms that reduce false positives and negatives.',
  icon: <Sparkles />
}, {
  title: 'Easy Integration',
  description: 'Seamlessly integrate our API with your applications, websites, or platforms using our comprehensive documentation and support.',
  icon: <Workflow />
}];