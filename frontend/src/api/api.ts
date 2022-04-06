import axios from "axios";

const backendInstance = axios.create({
  baseURL: "https://website-backend-kristoffer.herokuapp.com/",
});

export interface SubmitContactRequest {
  name: string;
  email: string;
  message: string;
}

export const submitContatRequestApi = async (body: SubmitContactRequest) => {
  return await backendInstance.post("/contact-request", body);
};
