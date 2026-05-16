# Week 10: CommunityHub API – Backend Basics

## Author
- **Name:** Ian Mutugi
- **GitHub:** [@hunted104](https://github.com/hunted104)

---

## Project Description

This project is a backend REST API built for the CommunityHub platform as part of the IYF Season 10 Week 10 assignment.

The goal of this project was to build a structured backend using Node.js and Express, implement RESTful API routes, handle requests and responses, and organize the project using MVC architecture.

The API allows users to create, view, update, and delete community posts through HTTP endpoints.

---

## Technologies Used

- Node.js
- Express.js
- JavaScript
- dotenv
- Git
- GitHub
- Postman

---

## Features

- Express server setup
- RESTful API routes
- CRUD operations for posts
- Route controllers
- Middleware implementation
- Error handling
- MVC project structure
- JSON request handling

---

## How to Run

### 1. Clone this repository

```bash
git clone https://github.com/hunted104/iyf-s10-week-10-hunted104.git
```

### 2. Navigate into project folder

```bash
cd iyf-s10-week-10-hunted104
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file and add:

```env
PORT=3000
```

### 5. Start the server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## Lessons Learned

Through this project, I learned:

- How to build APIs using Express
- How controllers organize backend logic
- How middleware improves request handling

---

## Challenges Faced

### Route Organization
At first, organizing routes and controllers was confusing.

**Solution:**  
I separated routes, controllers, and middleware into different folders following MVC structure.

---

### Error Handling
Managing invalid routes and server errors was challenging.

**Solution:**  
I implemented middleware to handle errors and return structured responses.

---

## Screenshots

API endpoints were tested successfully using Postman.

---

## Live Demo

Not yet deployed.

---

## Project Status

✅ Express server created  
✅ API routes working  
✅ CRUD operations completed  
✅ Controllers implemented  
✅ Middleware added  
✅ Week 10 requirements completed
