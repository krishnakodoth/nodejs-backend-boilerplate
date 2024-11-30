# Node.js Backend Boilerplate

A boilerplate for building scalable and maintainable Node.js backend applications.

## Features
- Express.js setup
- MVC architecture
- CORS, dotenv, morgan
- Easy to extend for MongoDB, Sequelize, or other DBs

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nodejs-backend-boilerplate.git
   cd nodejs-backend-boilerplate

## Folder Structure

- **nodejs-backend-boilerplate/**
  - **node_modules/**
  - **src/**
    - **config/**
      - **db.js**
    - **controllers/**
      - **userController.js**
    - **models/**
    - **routes/**
      -**userRoutes.js**
    - **middlewares/**
    - `app.js`
  - **tests/**
    - **unit/**
    - **integration/**
  - `.gitignore`
  - `package.json`
  - `README.md`
  - `server.js`

## 2. Initialize Project

### Initialize npm:

```javascript
npm init -y
```

### Install Dependencies:

```javascript
npm install express dotenv morgan cors body-parser
npm install --save-dev nodemon eslint 
```

### Set Up ESLint:

```
npx eslint --init
```
Or

```
npm init @eslint/config@latest
```

#### Choose the following:

* To check syntax, find problems, and enforce style.
* CommonJS (for Node.js).
* Use a popular style guide (e.g., Airbnb).
* JSON for config file.

Add an `.eslintrc.json` to the boilerplate.

