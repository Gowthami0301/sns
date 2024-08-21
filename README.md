# React + TypeScript + Ant Design Frontend

## Overview

This is the frontend of a user management application built with React, TypeScript, and Ant Design. The application allows users to sign up, log in, and view a list of registered users.

## Features

- **User Signup**: Allows new users to create an account.
- **User Login**: Existing users can log in to access the application.
- **User List**: Displays a list of all registered users (accessible after login).

## Technologies Used
React: A JavaScript library for building user interfaces.
TypeScript: A typed superset of JavaScript that scales.
Ant Design: A UI design language and React UI library.
Axios: For making HTTP requests to the backend.


# Node.js + Express + TypeScript Backend

## Overview

This is the backend of a user management application built with Node.js, Express, and TypeScript. It provides RESTful APIs for user signup, login, and retrieving a list of registered users.

## Features

- **User Signup API**: Registers a new user.
- **User Login API**: Authenticates an existing user and returns a JWT.
- **User List API**: Returns a list of all registered users (authentication required).


## Technologies Used
Node.js: A JavaScript runtime built on Chrome's V8 engine.
Express: A minimal and flexible Node.js web application framework.
TypeScript: A typed superset of JavaScript that scales.
Mongoose: An elegant MongoDB object modeling for Node.js.
JWT: JSON Web Token for user authentication.

## API Endpoints
POST /api/auth/signup: Registers a new user.
POST /api/auth/login: Authenticates a user and returns a JWT.
GET /api/users: Returns a list of registered users (requires JWT).



