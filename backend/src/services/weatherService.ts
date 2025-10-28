import axios from "axios";
import { WeatherData } from "../types/weather";
import cache from "../utils/cache";
import { config } from "../config/env";

const API_KEY = config.API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  // Retrieve from cache
  const cached = cache.get(city) as WeatherData | undefined;
  if (cached) {
    console.log(`✅ Cache hit for ${city}`);
    return cached;
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "en",
      },
    });

    const data: WeatherData = {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    };

    cache.set(city, data); // store in cache
    return data;
  } catch (error) {
    console.error("Failed to fetch weather", error);
    throw new Error("Failed to fetch weather");
  }
};
