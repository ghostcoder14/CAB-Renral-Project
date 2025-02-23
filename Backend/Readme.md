# Car Rental Website

## 🚗 About the Project
This is a **Car Rental Website** built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to register, book cars, and manage rentals easily.

---

## 🛠 Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT


---

## 👅 Installation Guide
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/car-rental.git
   cd car-rental
   ```
2. Install dependencies:
   ```sh
   npm install  # For backend
   cd client && npm install  # For frontend
   ```
3. Set up environment variables (`.env` file in the backend folder):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Run the backend:
   ```sh
   npm run dev
   ```
5. Run the frontend:
   ```sh
   cd client
   npm start
   ```

---

## 📌 API Documentation

### 🔹 1. User Authentication

#### ➙ Register a New User
**Endpoint:** `POST /api/v1/register`
- **Description:** This endpoint registers a new user, validates input data, hashes the password, stores it in the database, and returns a JWT token.
- **Request Body:**
  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com"
    }
  }
  ```
- **Validation Errors:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First Name must be at least 3 characters long",
        "param": "firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 8 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

---

### 🔹 2. Captain Registration

#### ➙ Register a New Captain
**Endpoint:** `POST /api/v1/captain/registerCaptain`
- **Description:** This endpoint registers a captain, validates input fields, and stores the data in the database.
- **Request Body:**
  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```
- **Response:**
  ```json
  {
    "message": "Captain registered successfully",
    "captain": {
      "_id": "captain_id",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```
- **Validation Errors:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Firstname must be at least 2 characters",
        "param": "firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 8 characters",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Vehicle color must be at least 3 characters",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Vehicle must have seating for at least 2 including the driver",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Vehicle plate must be at least 3 characters",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

---

## 🚀 Deployment Guide
### Deploy Backend on Render:
1. Push your code to GitHub.
2. Create a new **Render Web Service**.
3. Connect your GitHub repo and set environment variables.
4. Deploy and get the backend URL.

### Deploy Frontend on Vercel:
1. Push the frontend code to GitHub.
2. Connect your GitHub repo to Vercel.
3. Set up the backend API URL in `.env`.
4. Deploy and share your live site!

---

## 🐜 License
This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author
**Aakash** - *Building an AI-powered Car Rental System* 🚗✨
