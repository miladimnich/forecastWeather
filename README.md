# Weather App

A simple **Weather Forecast Web Application** built with **Node.js + Express (backend)** and **React + Vite (frontend)**.  
Users can enter a city name and get current weather information including temperature, condition, humidity, wind speed, and the country.

---

## Features

- Search weather by city
- Displays:
  - 🌡️ Temperature (°C)
  - ☁️ Weather condition (description)
  - 💧 Humidity (%)
  - 💨 Wind speed (m/s)
  - 🏳️ Country code
- Error handling for invalid city names
- Loading indicator while fetching data
- Press Enter or click button to fetch weather
- Simple caching on backend to reduce API requests (10 minutes)
- Responsive UI with clean CSS design
- Dynamic background based on weather condition (sunny, rainy, snowy, cloudy)

---

## Tech Stack

- **Backend:** Node.js, Express, TypeScript, Axios, OpenWeatherMap API
- **Frontend:** React, Vite, TypeScript, Zustand (state management)
- **Other:** JSON parsing, simple caching with `node-cache`


## Setup & Usage

1. **Clone the repository**
  git clone <your-repo-url>
  cd <your-repo-folder>


 2. **Install dependencies**

 - **Backend**
cd backend
npm install

- **Frontend**
cd ../frontend
npm install

   
 3. **Configure environment variables**

 - **Backend**
Create a .env file in backend folder:
API_KEY=your_openweathermap_api_key
PORT=8080
Replace your_openweathermap_api_key with your OpenWeatherMap API key.
PORT is optional (default 8080)

- **Frontend**
Create a .env file in frontend folder:
VITE_API_BASE_URL=http://localhost:8080/api
This points the frontend to the backend API.

 4. **Run the application**
    **1**. Ensure you have a root package.json in the parent folder of backend and frontend:
 {
  "name": "my-project",
  "private": true,
  "scripts": {
    "dev": "concurrently -n BACKEND,FRONTEND -c red,blue \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\""
  },
  "devDependencies": {
    "concurrently": "^9.2.1"
  }
}
    **2**. Install concurrently:
    npm install --save-dev concurrently
    **3**. Run both servers:
    npm run dev

5. **Usage**
    1. Go to: http://localhost:5173
    2. Enter a city name in the input field (e.g., Hannover).
    3. Press **Enter** or click **Get Weather**.
    4. See the current weather and country displayed:
        - 🌡️ Temperature (°C)
        - ☁️ Weather condition
        - 💧 Humidity (%)
        - 💨 Wind speed (m/s)
        - 🏳️ Country code

6. **Notes**
    - If multiple cities share the same name, OpenWeatherMap returns the **most populous city**.
    - Caching reduces repeated API calls for the same city within **10 minutes**.
    - You can style backgrounds based on weather conditions in CSS if desired.