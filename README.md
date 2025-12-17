# Potenz Backend 🚀

## 1️⃣ Folder Structure (Final)
```

│── POTENZ/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Application.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── applicationController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── applicationRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   ├── uploads/
```

---

## 2️⃣ README.md

````md
# Job Application RESTful API

A RESTful API built with **Node.js, Express.js, MongoDB**, supporting **JWT authentication**, **resume uploads**, and **job application tracking**.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (File Uploads)

---

## ⚙️ Setup & Installation

### 1. Clone Repository
```bash
git clone https://github.com/Dharmik57/Potenz-backend.git
cd github.com/Dharmik57/Potenz-backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

```bash
cp .env.example .env
```

### 4. Run Server

```bash
nodemon server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication APIs

### Register User

**POST** `/api/auth/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Login User

**POST** `/api/auth/login`

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

## 📄 Job Application APIs

### Apply for Job

**POST** `/api/applications`

Headers:

```
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data
```

Body:

```
jobTitle: Backend Developer
company: Amazon
resume: resume.pdf
```

### Get My Applications

**GET** `/api/applications/my`

Headers:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## ✅ Features

* JWT-based authentication
* Resume upload (PDF only)
* User-specific job applications
* Secure protected routes

