---
title: "COVID-19 Tracker"
author: "Sarthak Gandhi"
pubDatetime: 2021-06-23T00:00:00Z
postSlug: "covid-tracker"
featured: false
draft: false
tags:
  - "React"
  - "JavaScript"
  - "Material UI"
  - "Chart.js"
  - "Axios"
  - "React CountUp"
  - "CSS Modules"
  - "API Integration"
  - "Responsive Design"
description: "A responsive, real-time COVID-19 data visualization dashboard built with React that provides up-to-date statistics on the global pandemic."
---

# COVID-19 Tracker

A responsive, real-time COVID-19 data visualization dashboard built with React that provides up-to-date statistics on the global pandemic. This application tracks and displays key metrics including infection rates, recovery numbers, and deaths across different countries worldwide.

## Key Features

- **Global and Country-Specific Data**: Users can view worldwide statistics or select specific countries to see localized COVID-19 information.
- **Interactive Charts**: Utilizes Chart.js to display COVID-19 data through intuitive line and bar charts, showing both historical trends and current statistics.
- **Real-Time Updates**: Integrates with the COVID-19 Mathdro API to fetch the latest pandemic data.
- **Responsive Design**: Built with Material UI to ensure a seamless experience across all devices.
- **Visual Data Representation**: Implements CountUp for animated number transitions to enhance data visualization.

## Technical Stack

- **Frontend Framework**: React.js
- **UI Components**: Material UI
- **Data Visualization**: Chart.js with react-chartjs-2
- **API Integration**: Axios for data fetching
- **Animation Effects**: React CountUp for numerical animations
- **Styling**: CSS Modules for component-scoped styling

## Architecture

The application follows a modular component-based architecture:

- **Cards Component**: Displays key metrics (infected, recovered, deaths) with visual indicators
- **CountryPicker Component**: Dropdown interface allowing users to select specific countries
- **Chart Component**: Renders different chart types based on selected data view (global vs. country-specific)

API used: https://covid19.mathdro.id/api

## ⌨️ Development

Setup:

- run `npm i`
- run `npm start`
