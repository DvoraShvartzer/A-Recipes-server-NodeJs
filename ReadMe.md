

# A-Recipes Server - Node.js

A server application for managing a recipe platform, built using Node.js. This project allows users to view, add, edit, and delete recipes. It uses a RESTful API to interact with a database and provide various functionalities for a recipe-based platform.

## Table of Contents

* [Project Overview](#project-overview)
* [Installation](#installation)
* [Usage](#usage)
* [API Endpoints](#api-endpoints)
* [Technologies Used](#technologies-used)
* [License](#license)

## Project Overview

The "A-Recipes Server" project is a backend service built using Node.js that powers a recipe management platform. It allows users to:

* Add new recipes
* Update existing recipes
* Delete recipes
* Fetch a list of all recipes
* Fetch recipes by category or name

The server interacts with a MongoDB database and supports RESTful APIs for communication with the frontend.

## Installation

To get started with the project, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/DvoraShvartzer/A-Recipes-server-NodeJs.git
   ```

2. Navigate into the project directory:

   ```bash
   cd A-Recipes-server-NodeJs
   ```

3. Install the dependencies using npm:

   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file and providing the necessary configuration (e.g., database URI, JWT secret, etc.):

   ```env
   DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. Start the server:

   ```bash
   npm start
   ```

The server should now be running at `http://localhost:3000`.

## Usage

The server exposes several API endpoints to interact with the recipes. You can use a tool like [Postman](https://www.postman.com/) or `curl` to test the API.

### API Endpoints

| Method | Endpoint              | Description                            |
| ------ | --------------------- | -------------------------------------- |
| GET    | `/api/recipes`        | Fetch all recipes                      |
| POST   | `/api/recipes`        | Add a new recipe                       |
| GET    | `/api/recipes/:id`    | Fetch a recipe by its ID               |
| PUT    | `/api/recipes/:id`    | Update a recipe by its ID              |
| DELETE | `/api/recipes/:id`    | Delete a recipe by its ID              |
| GET    | `/api/recipes/search` | Search for recipes by name or category |

## Technologies Used

* **Node.js** - Server-side JavaScript runtime
* **Express.js** - Web framework for Node.js
* **MongoDB** - NoSQL database for storing recipe data
* **Mongoose** - ODM (Object Data Modeling) for MongoDB
* **JWT** - For user authentication
* **dotenv** - For managing environment variables


