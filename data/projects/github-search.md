---
title: "GitHub Search"
author: "Sarthak Gandhi"
pubDatetime: 2020-06-23T00:00:00Z
postSlug: "github-search"
featured: false
draft: false
tags:
  - "React"
  - "Firebase"
  - "GitHub API"
  - "Authentication"
  - "State Management"
  - "Axios"
  - "React Router"
  - "React Toastify"
  - "React Bootstrap"
  - "Bootstrap 4"
  - "Semantic UI"
description: "A modern, responsive React application that allows users to search and explore GitHub profiles, repositories, and manage their favorite repositories."
---

# GitHub User Search Application

A modern React-based web application that allows users to search and explore GitHub profiles, repositories, and manage their favorite repositories. Built with Firebase authentication and GitHub API integration.

## 🚀 Features

### 🔐 Authentication

- Secure user authentication with Firebase
- Email-based signup and login
- Password recovery functionality
- Session management and logout

### 👤 GitHub Profile Search

- Real-time GitHub user search using GitHub API
- Detailed profile information display:
  - User avatar
  - Full name
  - GitHub username
  - Bio
  - Website/blog URL
  - Location

### 📚 Repository Management

- Comprehensive repository information:
  - Repository name with direct GitHub links
  - Detailed descriptions
  - Programming language indicators
  - Star and watch counts
  - Favorite repository management
- User statistics:
  - Total repositories count
  - Gists count
  - Followers count

## 🛠️ Technical Stack

- **Frontend Framework**: React 16.13.1
- **Routing**: React Router DOM 5.2.0
- **UI Components**: React Bootstrap 1.6.0
- **Styling**: Bootstrap 4.6.0
- **HTTP Client**: Axios 0.21.1
- **Notifications**: React Toastify 7.0.4
- **Backend Services**: Firebase
  - Authentication
  - Cloud Firestore

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:

```bash
npm install
```

3. Set up Firebase:
   - Create a new Firebase project
   - Enable Email Authentication
   - Set up Cloud Firestore
   - Create a `.env.local` file with the following Firebase configuration:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Running the Application

- Development mode:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

- Production build:

```bash
npm run build
```

- Testing:

```bash
npm test
```
