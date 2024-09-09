# Documentation Back-End Green Fingers Project

This is the backend application for the Green Fingers Store project. It is built with Node.js and Express and provides a RESTful API for managing gardening products. The system uses MySQL for data management.

## Features

- **Product Management:** CRUD operations for managing gardening products.
- **RESTful API:** Provides endpoints for interacting with the frontend.
- **Data Storage:** Utilizes MySQL to store product information.
- **Authentication:** Protects admin routes with password-based authentication.
- **MVC Pattern:** Implements the Model-View-Controller architecture for organized code structure.

## Technologies Used

- **Node.js:** JavaScript runtime environment for server-side development.
- **Express.js:** Node.js framework for building APIs.
- **MySQL:** Relational database management system.
- **dotenv:** Manages environment variables for secure configurations.

## Project Structure

![Backend Structure](public/img/backend_structure.png)

The project follows the MVC (Model-View-Controller) pattern to maintain a clear separation between business logic, presentation, and data access layers:

- **Models:** Definitions of database structures and business logic.
- **Views:** Responses and views generated for the client.
- **Controllers:** Management of incoming requests, processing, and responses.

## Database Structure

The MySQL database contains the following tables:

### Table: `products`

- `id` (INT) - Primary key, auto-incremented.
- `name` (VARCHAR) - Product name.
- `category` (ENUM) - Product category: `Interior`, `Exterior`, `Supplement`.
- `price` (DECIMAL) - Product price.
- `img` (VARCHAR) - Image path for the product.

### Relationships

Currently, there is only a products table, but the database design is prepared for expansion with additional tables like `customers`, `orders` and `invoices`, which will be related through foreign keys.

## Installation and Configuration

1. **Clone the repository:**

bash
   git clone https://github.com/IngridDLT/GREEN_FINGERS_FINAL_PROJECT.git


2. **Navigate to the project directory:**

bash

cd Green_Fingers_final_project

3. **Install the dependencies:**

bash

npm install

4. **Start the server:**

bash

    npm start

    The server will run at http://localhost:3080.

## API Endpoints

    GET /api/products: Retrieve all products.

    POST /api/products: Add a new product.

    DELETE /api/products/: Delete a product by ID.

    UPDATE /api/products/: Update a product by ID.

## Security and Authentication

**Admin Route Protection**

Admin routes are protected with password-based authentication, ensuring that only authenticated users can access sensitive areas:

    Admin Route: /admin
    Access: Requires password authentication. Only authorized users can manage products and access sensitive information.

**Future Enhancements**

    JWT Authentication: Implement token-based authentication for enhanced security.
    User Roles: Establish roles to differentiate between admin and customer access.
    Order Management: Add functionality for managing customer orders.

## Usage

    Fetch Products: Send a GET request to /api/products.

    Create Product: Send a POST request with product data to /api/products.

    Delete Product: Send a DELETE request to /api/products/:id.

    Update Product: Send a PUT request to /api/products/:id.

**Contact**

For further information, please contact the developer at:

    Email: ingriddelatorre@gmail.com
    LinkedIn: https://www.linkedin.com/in/ingrid-de-la-torre-12726327/