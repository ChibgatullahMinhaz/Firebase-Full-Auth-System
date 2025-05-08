# 🔥 Firebase-Full-Auth-System

A plug-and-play authentication system built with Firebase, ready to integrate into your web.

---

## ✅ Features

- 📧 **Email/Password Authentication**
- 🔗 **Social Sign-In**: Google, Facebook, Twitter
- 👻 **Anonymous Sign-In (Guest Access)**
- 🔁 **Password Reset & Email Verification**

---

## 📦 Package & Libraries

- **Firebase** – Authentication SDK
- **React Router** – For routing
- **Tailwind CSS** – Styling
- **DaisyUI** - Component Library
- **MambaUI** - Tailwind Based Component Library
- **React Toastify** – Notifications

---

## 📦 Perfect For

- Full-stack web applications (React, Next.js, etc.)
- Developers who want to avoid setting up auth from scratch

---

## 📁📂 Project Structure

---

### Description of Each Folder

#### `client/`

This folder contains the frontend React application.

#### `public/`

Contains static files that are served directly (e.g., `index.html`, `favicon.ico`).

#### `src/`

The source code for the application resides here.

- **`assets/`**: This folder stores all the global assets like images, fonts, and global CSS files.
- **`components/`**: Contains reusable UI components like buttons, modals, headers, etc.
- **`features/`**: Organized by features. Each feature like `auth`, `user`, `cart`, `posts`, etc. has its own sub-folder.
- **`hooks/`**: Contains custom React hooks that are used throughout the app.
- **`layouts/`**: Different layouts for different pages (e.g., `MainLayout`, `AdminLayout`).
- **`pages/`**: React components that represent individual pages such as `Home`, `About`, etc.
- **`routes/`**: Contains route configuration using React Router.
- **`services/`**: API calls and other external services like Axios or Firebase.
- **`store/`**: Global state management using Redux or Zustand.
- **`utils/`**: Utility functions, such as formatting dates, etc.

---

---

### Description of Each Folder

#### `server/`

This folder contains the backend code for the application.

- **`config/`**: Holds configuration files for the server (e.g., database connection settings).
- **`controllers/`**: Contains functions for handling different types of requests for features like authentication, user data, posts, products, etc.
- **`middleware/`**: Includes middleware for tasks such as authentication checking and error handling.
- **`models/`**: Contains Mongoose or Sequelize models for the database entities (User, Post, Product, etc.).
- **`routes/`**: Contains route files that define all the HTTP routes (GET, POST, PUT, DELETE) for different resources.
- **`services/`**: External service logic such as email services or third-party integrations (e.g., payments).
- **`utils/`**: Utility functions used across the application, such as data validation or formatting.

### Key Files

- **`app.js`**: Configures Express, middleware, routes, and other settings for the backend.
- **`server.js`**: The entry point for starting the server. Typically, it imports `app.js` and sets up the Express server to listen on a port.
- **`.env`**: Stores environment variables (e.g., database connection string, JWT secrets, etc.).
- **`package.json`**: Contains metadata about the project, including the backend dependencies and scripts.

---

## 🚀 Get Started

1. **Clone this repository**
2. **Configure your Firebase project**
3. **Start building — you're ready to go!**

---

## 📄 License

This project is licensed under the MIT License.  
© 2025 Chibgatullah Minhaz
