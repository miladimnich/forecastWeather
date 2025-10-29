import "../../styles/WeatherCard.css";
import type { WeatherData } from "../../shared/types/weather";


export const WeatherCard = ({ weather }: { weather: WeatherData | null }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h3>{weather.city}, {weather.country}</h3>
      <p>🌡️ Temperature: {weather.temperature}°C</p>
      <p>☁️ Condition: {weather.description}</p>
      <p>💧 Humidity: {weather.humidity}%</p>
      <p>💨 Wind: {weather.windSpeed} m/s</p>
    </div>
  );
};

