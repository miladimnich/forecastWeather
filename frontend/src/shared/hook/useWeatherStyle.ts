import type { WeatherData } from "../types/weather";

export const useWeatherStyle = (weather: WeatherData | null): string => {
  if (!weather) return "";

  const desc = weather.description.toLowerCase();

  if (desc.includes("rain")) return "rainy";
  if (desc.includes("snow")) return "snowy";
  if (desc.includes("cloud")) return "cloudy";

  return "sunny";
};
