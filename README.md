# Postman Lite - REST Client Application

This is a REST client application developed using Next.js, capable of facilitating various HTTP request methods such as GET, PUT, POST, and DELETE. The application also stores historical requests in a PostgreSQL database using Prisma ORM.

## Features

- Send HTTP requests (GET, POST, PUT, DELETE).
- View and delete historical requests stored in PostgreSQL.
- No page reloads; seamless user experience.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)
- PostgreSQL 
- Git

## Getting Started

Follow these steps to clone and run the application locally.

### 1. Clone the Repository

```bash
git clone https://github.com/kumarshivesh/postman-lite.git
cd postman-lite
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following:

```bash
DATABASE_URL="postgresql://postgres:8090311230@localhost:5432/mydb?schema=public"
```

### 4. Set Up Prisma

Generate the Prisma client and run the migrations to set up the database schema.

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### Start the json-server

The `json-server` will be used to mock API endpoints for testing purposes. In `db.json` file, put some initial data:

```json
{
  "posts": [
    { "id": 81, "title": "gnf", "body": "dhf", "userId": 81 },
    { "id": 82, "title": "jgn", "body": "qpx", "userId": 82 }
  ]
}
```

Install json-server globally if you haven't already:
```bash
npm install -g json-server
```

Start the json-server with the following command:
```bash
json-server --watch db.json --port 3001
```

This will start the json-server on ``` bash http://localhost:3001. ```

### 6. Run the Application

Start the development server.

```bash
npm run dev
```

The application should now be running on ```bash http://localhost:3000.```

## App Demo

This section provides a step-by-step procedure to make GET, POST, PUT, and DELETE requests from the UI.

### 1. Making a GET Request

1. Open your browser and go to ```bash http://localhost:3000```. Make sure `js-server` (i.e.,```bash http://localhost:3001```) is running.
2. Select the Method: Choose `GET` from the dropdown menu.
3. Enter the URL: Type ```bash http://localhost:3001/posts/81``` into the URL field. Make sure object data with id: 81 is present in `db.json`. 
4. Send the Request: Click the "Send Request" button.
5. View the Response: The response will be displayed below the form.

### 2. Making a POST Request

1. Open your browser and go to ```bash http://localhost:3000```. Make sure `js-server` (i.e.,```bash http://localhost:3001```) is running.
2. Select the Method: Choose `POST` from the dropdown menu.
3. Enter the URL: Type ```bash http://localhost:3001/posts``` into the URL field. 
4. Enter the Request Body:
```json
{
  "posts": [
    { "id": 83, "title": "lkt", "body": "kol", "userId": 83 },
  ]
}
```
5. Send the Request: Click the "Send Request" button.
6. View the Response: The response will be displayed below the form.

### 3. Making a PUT Request

1. Open your browser and go to ```bash http://localhost:3000```. Make sure `js-server` (i.e.,```bash http://localhost:3001```) is running.
2. Select the Method: Choose `PUT` from the dropdown menu.
3. Enter the URL: Type ```bash http://localhost:3001/posts/83``` into the URL field. Make sure object data with id: 83 is present in `db.json`. 
4. Enter the Request Body:
```json
{
  "posts": [
    { "id": 83, "title": "updated lkt", "body": "updated kol", "userId": 83 },
  ]
}
```
5. Send the Request: Click the "Send Request" button.
6. View the Response: The response will be displayed below the form.

### 4. Making a DELETE Request

1. Open your browser and go to ```bash http://localhost:3000```. Make sure `js-server` (i.e.,```bash http://localhost:3001```) is running.
2. Select the Method: Choose `DELETE` from the dropdown menu.
3. Enter the URL: Type ```bash http://localhost:3001/posts/81``` into the URL field. Make sure object data with id: 81 is present in `db.json`. 
4. Send the Request: Click the "Send Request" button.
5. View the Response: The response will be displayed below the form.


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
Next.js
Prisma
Render
json-server