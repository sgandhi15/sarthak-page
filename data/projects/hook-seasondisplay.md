---
title: "Hook Season Display"
author: "Sarthak Gandhi"
pubDatetime: 2020-07-24T00:00:00Z
postSlug: "hook-season-display"
featured: false
draft: false
tags:
  - "React"
  - "Hooks"
  - "Geolocation"
  - "Semantic UI"
  - "State Management"
  - "Axios"
description: "A modern, responsive React application that determines and displays the current season based on the user's geolocation."
---

# Season Display App 🌞❄️

A modern, responsive React application that determines and displays the current season based on the user's geolocation. This project demonstrates the practical implementation of React hooks, geolocation API integration, and dynamic UI rendering.

## 🌟 Features

- **Geolocation Integration**: Automatically detects user's latitude using the browser's Geolocation API
- **Dynamic Season Detection**: Determines the current season based on latitude and month
- **Responsive Design**: Beautiful, season-themed UI that adapts to different screen sizes
- **Custom React Hooks**: Implements custom hooks for location management
- **Error Handling**: Graceful handling of geolocation permission denials and errors

## 🛠️ Technologies Used

- React 16.13.1
- Modern JavaScript (ES6+)
- CSS3 for styling
- Browser Geolocation API
- Custom React Hooks

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Navigate to the project directory:

```bash
cd seasons
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## 🎯 How It Works

1. When the app loads, it requests permission to access your location
2. Based on your latitude and the current month, it determines whether it's winter or summer
3. The UI updates with a theme matching the season:
   - Summer: Displays sun icons and a beach-themed message
   - Winter: Shows snowflake icons and a cold weather message

## 🎨 Project Structure

```
src/
├── SeasonDisplay.js     # Main component for displaying season
├── SeasonDisplay.css    # Styling for the season display
├── useLocation.js      # Custom hook for handling geolocation
├── loader.js           # Loading spinner component
└── index.js            # Application entry point
```

## 💡 Technical Implementation

- Uses React's `useState` and `useEffect` hooks for state management and side effects
- Implements a custom `useLocation` hook for geolocation logic
- Employs conditional rendering based on the user's location data
- Features semantic UI icons for visual enhancement
- Implements error boundaries for robust error handling
