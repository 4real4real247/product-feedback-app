# 📝 Product Feedback App

## 📌 Description

### This is a web app where people can share product feedback, suggest new features, and report bugs. You can also filter feedback by category so it’s easier to find what you’re looking for.

### I built this project to practice building a full-stack app — connecting a React frontend with an Express + PostgreSQL backend.

⸻

## 🚀 Live Site

(Check out the live site here)
[https://product-feedback-chill.netlify.app/]

⸻

## 🖼️ Screenshots

### MAIN PAGE
<img width="1229" height="658" alt="Screenshot 2025-08-19 at 2 03 42 PM" src="https://github.com/user-attachments/assets/7a1398cd-0465-4ee6-beb8-a29bfc323b70" />


### FORM
<img width="1229" height="683" alt="Screenshot 2025-08-19 at 2 04 10 PM" src="https://github.com/user-attachments/assets/090d50d8-20c1-4dfd-a547-a3fee466a6da" />

### NO FEEDBACK
<img width="1229" height="658" alt="Screenshot 2025-08-19 at 2 03 52 PM" src="https://github.com/user-attachments/assets/0baf5a64-4843-4ec9-a8f9-ef10fc0db48a" />

⸻

## ✨ Features

### • Home page: Shows a list of all feedback suggestions

### • Filter by category: Pick from tags like UI, UX, Feature, Bug, or Enhancement

### • Add suggestion form: Submit new feedback (with validation so forms can’t be empty)

### • Suggestion details: Click to view a full suggestion page

### • Responsive design: Works on desktop and mobile

⸻

## 🛠️ Tech Stack

## Frontend

### • React (built with Vite)

### • HTML, CSS, JavaScript

### • Deployed on Netlify

## Backend

### • Node.js with Express

### • Deployed on Render

### • Endpoints:

### Database

### • PostgreSQL (hosted on Neon)

## API'S

### • GET /get-all-suggestions → get all feedback

### Response

```
[
  {
    "id": 1,
    "title": "Add dark mode",
    "category": "Feature",
    "description": "It would be great to have a dark theme for the app."
  },
  {
    "id": 2,
    "title": "Fix login bug",
    "category": "Bug",
    "description": "Login button doesn’t work on mobile."
  }
]
```

### • POST /add-one-suggestion → add new feedback

```
{
  "id": 3,
  "title": "Improve dashboard layout",
  "category": "UI",
  "description": "The dashboard could be more user-friendly with a cleaner layout."
}
```

## 💭 Reflections

### • What I learned: How to set up a frontend and backend to work together, and how to connect to a database.

### • What I’m proud of: Getting the form, filters, and database working smoothly.

### • Challenges: Fixing backend errors and matching my database queries to the schema.

### • Future ideas: Add upvotes, sort by most popular suggestions, and maybe even add user accounts.

## 🙌 Credits

### These resources really helped me while building this project:

### • React Docs – for learning how to structure and manage components

### • Express Docs – for setting up backend routes and middleware

### • PostgreSQL Docs – for writing queries and managing my database

### • Neon – for hosting my PostgreSQL database in the cloud

### • MDN Web Docs – great reference for JavaScript, HTML, and CSS

### • Stack Overflow – for troubleshooting random errors along the way

### Last but not Least My classmate Makeba C. and my instructor Arianna
