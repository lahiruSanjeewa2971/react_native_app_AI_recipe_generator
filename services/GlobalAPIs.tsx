import axios from "axios";
import Constants from "expo-constants";
import OpenAI from "openai";

const API_TOKEN = Constants.expoConfig?.extra?.STRAPI_API_KEY;
const OPENROUTER_API_KEY =
  Constants.expoConfig?.extra?.OPENROUTER_API_KEY ?? // for dev
  Constants.manifest?.extra?.OPENROUTER_API_KEY ?? // for prod
  null;

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENROUTER_API_KEY,
});

const axiosClient = axios.create({
  baseURL: "http://192.168.43.87:1337/api",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const GetUserByEmail = (email: string) =>
  axiosClient.get(`/user-lists?filters[email][$eq]=${email}`);

const CreateNewUser = (data: any) =>
  axiosClient.post("/user-lists", { data: data });

const GetCategoryList = () => axiosClient.get("/categories?populate=*");

const AIModel = async (prompt: string) =>
  await openai.chat.completions.create({
    model: "google/gemini-2.0-flash-exp:free",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" },
  });

export default {
  GetUserByEmail,
  CreateNewUser,
  GetCategoryList,
  AIModel,
};
