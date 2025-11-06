const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateResonse(chatHistory) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash", //1 Million token limit for this gemin 2.0 model
    contents: chatHistory,
  });
  return response.text;
}

module.exports = generateResonse;
