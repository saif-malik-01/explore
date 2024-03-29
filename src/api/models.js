let models = [
  {
    id: 1,
    name: "BERT",
    description: "Bidirectional Encoder Representations from Transformers",
    visitors: 0,
    category: "NLP",
    useCases: [
      "Text classification",
      "Question answering",
      "Named entity recognition",
    ],
    framework: "TensorFlow",
    license: "Apache License 2.0",
    latestUpdate: "2021-08-01",
    popularity: "High",
    provider: "Google",
    snippet: `
from transformers import BertTokenizer, BertModel
import torch

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)
`,
  },
  {
    id: 2,
    name: "GPT-3",
    description: "Generative Pre-trained Transformer 3",
    visitors: 0,
    category: "NLP",
    useCases: [
      "Text generation",
      "Language translation",
      "Conversational agents",
    ],
    framework: "OpenAI API",
    license: "Proprietary",
    latestUpdate: "2020-06-04",
    popularity: "Very high",
    provider: "OpenAI",
    snippet: `
import openai

openai.api_key = 'your-api-key'
response = openai.Completion.create(
  engine="text-davinci-003",
  prompt="Translate the following English text to French: 'Hello, how are you?'",
  max_tokens=60
)
print(response.choices[0].text.strip())
`,
  },
  // Add more models here
];

export const getModels = () => {
  return Promise.resolve(models);
};

// get models by and increase visitors count
export const getModelById = (id) => {
  const index = models.findIndex((model) => model.id === parseInt(id));
  if (index !== -1) {
    models[index].visitors++;
    return Promise.resolve(models[index]);
  }
  return Promise.reject(new Error("Model not found"));
};
