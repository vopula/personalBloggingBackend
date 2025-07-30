# Personal Blog Backend & Frontend

A full-stack blog application built using Fastify, Mysql, HTML, CSS, JS. It provides full CRUD capabilities for managing blog posts via RESTful APIs.

Notes: This deployment will not be available without MySQL activation from user

---

## Features

- ✅ Create, Read, Update, Delete blog posts
- ✅ Fastify REST API with schema validation
- ✅ MySQL database integration
- ✅ Environment-based config management
- ✅ Modular code structure with separation of concerns
- ✅ Lightweight HTML frontend with Tailwind CSS
- ✅ CORS enabled for cross-origin frontend-backend communication

## Tech Stack

Backend: Node.js, Fastify, MySQL2
Frontend: HTMl, Tailwind CSS, Vanilla JS
Dev Tools: dotenv, fastify with schema validation

## API Endpoint

GET: /api/v1/post/ to get all posts
POST: /api/v1/post/ to create new post
PUT: /api/v1/post/:id to update post by ID
DELETE: /api/v1/post/:id to delete post by ID

## Installation

### 1. Clone the repository
git clone https://github.com/yourusername/personalBloggingBackend.git
cd personalBloggingBackend

### 2. Install dependencies
npm install

### 3. Create .env file
BACKEND_PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdbname

### 4. Start the development server
npm start


👨‍💻 Author
Developed by Alka
If you found this project useful, feel free to ⭐ the repo or contribute!