// src/controllers/weatherController.ts
import { Request, Response, NextFunction } from "express";
import { getWeatherData } from "../services/weatherService";

export const getWeather = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const city = req.query.city as string;
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const weatherData = await getWeatherData(city);
    res.json(weatherData);
  } catch (error) {
    next(error);
  }
};
