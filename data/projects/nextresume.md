---
title: "NextResume"
author: "Sarthak Gandhi"
pubDatetime: 2025-05-02T00:00:00Z
postSlug: "nextresume"
featured: false
draft: false
tags:
  - "React"
  - "TypeScript"
  - "Tailwind CSS"
  - "Shadcn UI"
  - "Hono.js"
  - "AWS Lambda"
  - "PostgreSQL"
  - "SST"
  - "Puppeteer"
  - "Chromium"
  - "Bun"
  - "AI"
  - "PDF Generation"
  - "Serverless"
  - "AWS"
  - "PostgreSQL"
  - "Drizzle ORM"
  - "Zod"
  - "Google OAuth"
  - "JWT"
  - "LLM"
description: "A modern, AI-powered resume builder application that helps users create, customize, and tailor professional resumes for specific job applications."
---

# NextResume

NextResume is a modern, AI-powered resume builder application that helps users create, customize, and tailor professional resumes for specific job applications.

## About The Project

NextResume empowers job seekers to create polished, professional resumes with ease. Using advanced AI technology, the application can structure raw resume content, tailor resumes for specific job descriptions, and generate high-quality PDF documents ready for submission.

### Key Features

- **User Authentication**: Secure Google OAuth integration with PKCE for user management
- **Structured Resume Creation**: Convert unstructured resume text into a properly formatted resume
- **AI-Powered Tailoring**: Customize your resume for specific job descriptions using advanced AI
- **PDF Export**: Generate professional-looking PDF resumes with proper formatting
- **Resume Management**: Save and organize multiple versions of your resume
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS

### Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS, and Shadcn UI components
- **Backend**: Serverless functions with Hono.js and AWS Lambda
- **Authentication**: Google OAuth implementation with JWT tokens
- **Database**: PostgreSQL with Drizzle ORM
- **Infrastructure**: SST (Serverless Stack) for AWS deployment
- **PDF Generation**: Puppeteer and Chromium
- **Development**: Bun for package management and TypeScript for type safety

## Architecture

NextResume follows a modern serverless architecture:

- **Monorepo Structure**: Organized into packages for core, functions, and frontend
- **API-First Design**: RESTful API endpoints with proper validation using Zod
- **Database Abstraction**: Type-safe database queries with Drizzle ORM
- **Serverless Deployment**: Deployed to AWS using SST for infrastructure as code
- **Secret Management**: Environment variables and SST secrets for sensitive data

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google OAuth credentials
- AI API key (for resume tailoring)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/nextresume.git
cd nextresume
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables (see Environment Variables section)

4. Start the development server

```bash
npm run dev
```

### Environment Variables

Create `.env` files in respective package directories:

**Frontend (packages/www)**

```
VITE_API_URL=your-api-url
VITE_AUTH_URL=your-auth-url
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

**Backend (packages/functions)**

```
AUTH_URL=your-auth-url
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
DB_HOST=your-db-host
DB_PORT=5432
DB_NAME=your-db-name
DB_USER=your-db-user
DB_PASSWORD=your-db-password
AI_KEY=your-ai-key
```

## Development

Development workflow uses Bun and SST:

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Deploy to AWS
npm run deploy
```
