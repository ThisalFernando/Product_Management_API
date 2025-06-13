
# Personal Finance Tracker API

This is RESTful API for managing product details with user registration and login features.



## Features

- User authentication (JWT-based login and registration).
- CRUD Operations for products.




## Setup Instructions

Prerequisities:
- Node.js
- MongoDB (local or cloud(MongoDB Atlas))

Open the terminal and install Dependencies

```bash
  npm install
```

Configure Environment Variables:
Create a .env file in the root directory and configure the MONGO_URI, PORT and JWT_SECRET

Stat the API:

```bash
  npm start
```
or

```bash
  node server.js
```

The API will display the following message and run the API on http://localhost:5000

```bash
  Server running on port 5000
  MongoDB connected

```






## API Endpoints

### User authentication:

- User Registration

```http
  POST /api/auth/register
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. User's name |
| `email` | `string` | **Required**. User's email |
| `password` | `string` | **Required**. User's password |
| `role` | `string` | admin / user |

Example:

```bash
  {
    "name": "User001",
    "email": "user001@gmail.com",
    "password": "user@001"
  }
```

- User Login

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Login email |
| `password` | `string` | **Required**. Login password |

Example:

```bash
  {
    "email": "user001@gmail.com",
    "password": "user@001"
  }
```

### Product Management:

- Set a product

```http
  POST /api/products
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Product Name |
| `price` | `number` | **Required**. Product Price |
| `quantity` | `number` | **Required**. Product quantity |

Example:

```bash
  {
    "name": "Chocolate Biscuits",
    "price": 500,
    "quantity": 50
  }
```

- Display products

```http
  GET /api/products
```

- Display product by id

```http
  GET /api/products/:id
```

- Update product

```http
  PUT /api/products/:id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Product Name |
| `price` | `number` | **Required**. Product Price |
| `quantity` | `number` | **Required**. Product quantity |

Example:

```bash
  {
    "name": "Chocolate Cream Biscuits",
    "price": 600,
    "quantity": 70
  }
```

- Delete product by id

```http
  DELETE /api/products/:id
```




