import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-VYvBj7YWdigTXcX2C1i4No4D",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();