import axios from "axios";
import Constants from "expo-constants";

const API_TOKEN = Constants.expoConfig?.extra?.STRAPI_API_KEY;

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

export default {
  GetUserByEmail,
  CreateNewUser
};
