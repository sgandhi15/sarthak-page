---
title: "Indecision App"
author: "Sarthak Gandhi"
pubDatetime: 2021-06-23T00:00:00Z
postSlug: "indecision-app"
featured: false
draft: false
tags:
  - "React"
  - "JavaScript"
  - "Webpack"
  - "Babel"
  - "Yarn"
  - "Express.js"
  - "SCSS"
description: "A simple, responsive, and intuitive decision-making app built with React, JavaScript, and SCSS."
---

# Indecision App

## Project Overview

Indecision App is a modern React application designed to help users make decisions when they're stuck between multiple options. Simply add your options, click the "What should I do?" button, and let the app randomly decide for you!

### Key Features

- **Decision Making Helper**: Add multiple options and let the app randomly select one for you
- **Persistent Storage**: Uses browser's localStorage to save your options between sessions
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Intuitive UI**: Clean, modern interface with easy-to-use controls
- **Modal Feedback**: Displays your randomly selected option in a modal for clear visibility

## Technology Stack

- **Frontend**: React.js with class components and state management
- **Styling**: SCSS for advanced styling capabilities
- **Build Tools**: Webpack for bundling, Babel for transpiling
- **Package Manager**: Yarn
- **Storage**: Browser localStorage API
- **Server**: Express.js for production deployment
- **Deployment**: Configured for Heroku deployment

## Getting Started

### Prerequisites

- Node.js (v10 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/sgandhi15/indecision-app.git
cd indecision-app

# Install dependencies
yarn install

# Start development server
yarn run dev-server

# For production build
yarn run build:prod
yarn start
```

## Development Mode

```bash
# Run webpack dev server
yarn run dev-server
```

## Production Deployment

```bash
# Build for production
yarn run build:prod

# Start the server
yarn start
```
