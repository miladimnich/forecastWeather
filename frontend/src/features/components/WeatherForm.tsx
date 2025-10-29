import { useState } from "react";
import { useWeatherStore } from "../../stores/weatherStore";
import "../../styles/WeatherForm.css";

export const WeatherForm = () => {
  const [city, setCity] = useState("");
  const getWeather = useWeatherStore((state) => state.getWeather);

  const handleSubmit = () => {
    if (city) getWeather(city);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Enter city..."
      />
      <button onClick={handleSubmit}>Get Weather</button>
    </div>
  );
};
