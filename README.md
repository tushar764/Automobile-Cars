#Output![img3](https://github.com/user-attachments/assets/25e9a4f5-3d17-4226-9cfa-0b97dfdb531a)
![img4](https://github.com/user-attachments/assets/47926916-03db-472b-a5cf-0606a1751fcb)
![img5](https://github.com/user-attachments/assets/1b326136-dcf5-4300-b586-21bec8be203f)
![img6](https://github.com/user-attachments/assets/03be3682-b5ef-47fd-a127-ccaed743a284)
🚗 Automobile System
Project Overview
The Automobile System is a web application that provides detailed information about various cars while ensuring secure user authentication using Two-Factor Authentication (2FA). It implements a robust login and registration system with email-based OTP verification for enhanced security.

Key Features
✅ Secure Authentication – Ensures user identity verification before granting access.
✅ Email Verification – Sends a unique OTP (One-Time Password) via email using Nodemailer.
✅ User Management – Supports secure login and registration with Two-Factor Authentication.
✅ Car Descriptions – Displays detailed information about different cars.

Components
User Registration & Authentication
Users sign up using their email and receive a verification code.
OTP verification is required to complete registration.
Secure login with 2FA authentication.
Google OAuth for social login support.
Backend Development (Express.js & Node.js)
Uses Express.js to manage API routes for authentication.
Integrates Nodemailer for OTP-based email verification.
Encrypts user credentials for added security.
Frontend Development (HTML, CSS, JavaScript)
Built with HTML, CSS, and JavaScript for a smooth and interactive user experience.
Uses form handling for user input validation and authentication flow.
Database (MongoDB Atlas)
Stores user data securely using MongoDB Atlas.
Ensures data integrity with proper validation and encryption techniques.
Security Enhancements
🔒 bcrypt.js for password hashing.
🔒 JWT (JSON Web Token) for secure user authentication.
🔒 Middleware Authentication to prevent unauthorized access.

Deployment & Hosting
🚀 Deployed on Vercel with frontend and backend hosting.

Future Enhancements
🔹 Implement SMS-based OTP verification.
🔹 Add multi-user roles with different authentication levels.

Tech Stack
📌 Frontend: HTML, CSS, JavaScript
📌 Backend: Node.js, Express.js
📌 Database: MongoDB Atlas
📌 Security: JWT, bcrypt.js
📌 Email Service: Nodemailer
📌 Deployment: Vercel / Netlify / Firebase / Render / Heroku
