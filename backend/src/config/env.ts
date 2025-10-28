import dotenv from "dotenv";


dotenv.config();

export const config = {
  API_KEY: process.env.API_KEY || "",
};

if (!config.API_KEY) {
  throw new Error("Missing API_KEY in .env file");
}