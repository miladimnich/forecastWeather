"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = getWeather;
const axios_1 = __importDefault(require("axios"));
const API_KEY = "9fae8367a3b4e922d0a181d57a9de6a4";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
async function getWeather(city) {
    const response = await axios_1.default.get(BASE_URL, {
        params: {
            q: city,
            appid: API_KEY,
            units: "metric",
            lang: "en",
        },
    });
    const data = response.data;
    return {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
    };
}
