import { create } from "zustand";
import type { WeatherData } from "../shared/types/weather";
import { getWeatherFromBackend } from "../api/weatherApi";


interface WeatherState {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  getWeather: (city: string) => Promise<void>;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  loading: false,
  error: null,
  getWeather: async (city: string) => {
    set({ loading: true, error: null, weather: null });
    try {
      const data = await getWeatherFromBackend(city);
      set({ weather: data });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch weather" });
    } finally {
      set({ loading: false });
    }
  },
}));
