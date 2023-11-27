const { OpenAI } = require("openai");
require("dotenv").config();

let openai;

const connectWithOpenAIApi = () => {
  openai = new OpenAI({
    organization: "org-IIKWKjLDnA0mGcsUPP9JNwMp",
    apiKey: "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",
  });

};

const getOpenai = () => {
  return openai;
};

module.exports = {
  connectWithOpenAIApi,
  getOpenai,
};