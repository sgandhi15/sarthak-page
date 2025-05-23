---
title: "Weather App"
author: "Sarthak Gandhi"
pubDatetime: 2020-05-25T00:00:00Z
postSlug: "weather-app"
featured: false
draft: false
tags:
  - "Node.js"
  - "Express"
  - "OpenWeatherMap API"
  - "Handlebars"
  - "Semantic UI"
  - "Weather API"

description: "A modern, real-time weather application that provides detailed weather information for any location worldwide."
---

# Weather App

A modern, real-time weather application that provides detailed weather information for any location worldwide. This web application is built with Node.js and Express, offering a clean and intuitive interface for users to check current weather conditions.

## 🌟 Features

- **Real-time Weather Data**: Get instant access to current weather conditions using the OpenWeatherMap API
- **Location-based Weather**: Search for weather information by city name
- **Comprehensive Weather Details**:
  - Current temperature (in Celsius)
  - Weather conditions (sunny, cloudy, etc.)
  - Wind speed and direction
  - Atmospheric pressure
  - Geographic coordinates
  - Country information

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Handlebars (HBS) templating engine
- **API**: OpenWeatherMap API
- **Other Tools**:
  - `nodemon` for development
  - `request` for API calls
  - Express static file serving

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone [your-repo-link]
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

For development (with auto-reload):

```bash
npm run dev
```

For production:

```bash
npm start
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## 🔑 API Key Configuration

The application uses the OpenWeatherMap API. The API key is currently included in the code for demonstration purposes, but in a production environment, it should be moved to environment variables for security.

## 🌐 API Endpoints

- `GET /weather?location=[city-name]`: Fetches weather data for the specified location
- Returns JSON with weather details including:
  - Temperature
  - Weather condition
  - Wind information
  - Location coordinates
  - Pressure
  - Country code

## 💻 Project Structure

```
weather-app/
├── public/          # Static files
├── utils/           # Utility functions
│   └── forecast.js  # Weather API integration
├── views/           # HBS templates
│   └── index.hbs   # Main application view
├── index.js        # Application entry point
└── package.json    # Project dependencies
```

## 📝 License

This project is licensed under the ISC License.
