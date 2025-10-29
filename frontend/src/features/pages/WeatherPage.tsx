import { WeatherForm } from "../components/WeatherForm";
import { WeatherCard } from "../components/WeatherCard";
import "../../styles/WeatherPage.css";
import { useWeatherStore } from "../../stores/weatherStore";
import { useWeatherStyle } from "../../shared/hook/useWeatherStyle";

export const WeatherPage = () => {
  const { weather } = useWeatherStore();
  const bgClass = useWeatherStyle(weather);

  return (
    <div className={`weather-page ${bgClass}`}>
      <h1 className="title">Weather App</h1>
      <WeatherForm />
      <WeatherCard weather={weather} />
    </div>
  );
};