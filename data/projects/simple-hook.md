---
title: "Simple Hook"
author: "Sarthak Gandhi"
pubDatetime: 2020-07-24T00:00:00Z
postSlug: "simple-hook"
featured: false
draft: false
tags:
  - "React"
  - "Hooks"
  - "Custom Hooks"
  - "API Integration"
  - "State Management"
  - "Component Composition"
description: "A simple hook implementation in React, showcasing the power and reusability of custom hooks."
---

# React Custom Hooks Demo

A demonstration project showcasing the implementation and usage of custom React hooks, built with React 16.13.1. This project serves as an educational example of how to create and utilize custom hooks in React applications.

## Project Overview

This project demonstrates the power and reusability of custom React hooks through a simple but practical example. It features:

- A custom `useResources` hook that fetches data from an API
- Reusable components that leverage the custom hook
- Clean separation of concerns between data fetching and UI components
- Real-world API integration using JSONPlaceholder

## Features

- **Custom Hook Implementation**: The `useResources` hook encapsulates data fetching logic, making it reusable across components
- **Dynamic Resource Loading**: Users can switch between different types of resources (posts and todos)
- **Clean Component Architecture**: Separation of concerns between data fetching and presentation
- **API Integration**: Real-world data fetching from JSONPlaceholder API

## Technical Implementation

The project demonstrates several key React concepts:

1. **Custom Hooks**: The `useResources` hook combines `useState` and `useEffect` to manage API data fetching
2. **State Management**: Uses React's built-in state management with the `useState` hook
3. **API Integration**: Implements data fetching using Axios
4. **Component Composition**: Shows how to build reusable components that share common functionality

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

- `src/components/useResources.js`: Custom hook implementation
- `src/components/App.js`: Main application component
- `src/components/ResourceList.js`: Component for displaying resources
- `src/components/UserList.js`: Component for displaying users

## Technologies Used

- React 16.13.1
- Axios for HTTP requests
- React Hooks (useState, useEffect)
- JSONPlaceholder API

## Learning Outcomes

This project serves as an excellent example for understanding:

- How to create and use custom hooks
- Best practices for data fetching in React
- Component composition and reusability
- State management with React hooks
