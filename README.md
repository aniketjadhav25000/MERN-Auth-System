# MERN Authentication System

A simple full-stack authentication system built using React.js, Node.js, Express.js, MongoDB, and JWT Authentication.

This project was created as part of the Full Stack Development Intern assessment for Quantum IT Innovation.

---

# Features

- User Registration
- User Login
- JWT Authentication
- MongoDB Database Integration
- Protected Dashboard Route
- LocalStorage Authentication
- Responsive UI
- React + Node.js Full Stack Application

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS (CDN)

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Project Structure

```bash
MERN-Auth-System
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   └── UI
│       ├── src
│       ├── public
│       ├── package.json
│       └── vite.config.js
│
└── README.md
```

---

# Backend Setup

## 1. Go to backend folder

```bash
cd backend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/auth_test
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

## 4. Start MongoDB

```bash
mongod --dbpath="C:\data\db"
```

## 5. Run backend server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## 1. Go to frontend folder

```bash
cd frontend/UI
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Register User

```http
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Aniket Jadhav",
  "dob": "2002-01-01",
  "email": "aniket@gmail.com",
  "password": "123456"
}
```

---

## Login User

```http
POST /api/auth/login
```

### Request Body

```json
{
  "email": "aniket@gmail.com",
  "password": "123456"
}
```

---

# Authentication Flow

1. User registers or logs in
2. Backend validates credentials
3. JWT token is generated
4. Token and user data are stored in localStorage
5. User is redirected to dashboard
6. Dashboard route is protected

---

# Dashboard

The dashboard page:
- is accessible only after login
- displays a static user table
- includes logout functionality
- is responsive for mobile and desktop

---

# Screenshots

## Login Page
- Responsive login UI inspired by the provided design
  <img width="1918" height="967" alt="image" src="https://github.com/user-attachments/assets/e1f0d4fd-9b90-4572-8043-108ec44b1ac0" />


## Register Page
- User registration with Name, DOB, Email, Password
<img width="1902" height="960" alt="image" src="https://github.com/user-attachments/assets/8604ac29-e301-4155-a8c2-fa6ef4bb899b" />


## Dashboard
- Protected dashboard with styled table layout
  <img width="1915" height="965" alt="image" src="https://github.com/user-attachments/assets/1eb129c5-d7ad-4dd5-b4c2-85c6fc65420a" />


---

# Author

Aniket Jadhav

GitHub Repository:
https://github.com/aniketjadhav25000/MERN-Auth-System

---

# Notes

- Passwords are securely hashed using bcryptjs
- JWT is used for authentication
- MongoDB stores user data
- LocalStorage is used for session persistence
- Frontend and backend are connected using Axios
