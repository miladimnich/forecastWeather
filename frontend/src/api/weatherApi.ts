import axios from "axios";
import type { WeatherData } from "../shared/types/weather";
import { BASE_URL } from "../config";

export const getWeatherFromBackend = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, { params: { city } });
    console.log("Axios data:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Axios error:", error.message);
    throw error;
  }
};
