# Task Management System

This project is a Task Management System built using Node.js, Express.js, MongoDB for the backend, and React, Tailwind CSS, Axios, Notistack, and React Router DOM for the frontend. The application features user authentication, CRUD operations for tasks, a responsive design, and state management using React hooks.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Allows users to sign up and log in securely. It also hashes the password and saves it in mongoDb
- **Task Management**: Performs CRUD operations for tasks.
- **Responsive Design**: Ensures a seamless user experience across various devices.
- **State Management**: Utilizes React hooks such as `useState` and `useEffect` for managing application state.
- **Navigation**: Implements navigation using `react-router-dom` for a single-page application experience.
- **Validation**: Provides client-side validation for improved user experience.

## Tech Stack

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Axios
  - Bcrypt

- **Frontend**:
  - React
  - Tailwind CSS
  - Axios
  - Notistack
  - React Router DOM


## Installation and Running Locally

**Clone it or Zip it** 


 - **Backend**
 
    - First add a `.env `file  with the following (use this exact port)
        - `PORT = 5555`
        -  `mongoDBURL = "Your mongodb url"`

    - `cd backend`
    - `npm install` 
    - `npm run dev`

  - **Frontend**

    - `cd frontend`
    - `npm install `
    - `npm run dev `



## Feedback

If you have any feedback, please reach out to us at hassanahmed4987427@gmail.com


## License

[MIT](https://choosealicense.com/licenses/mit/)

