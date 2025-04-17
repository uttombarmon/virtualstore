# VirtualStore - Full-Stack E-commerce Platform

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg)](https://github.com/uttombarmon/virtualstore/graphs/commit-activity)
[![Contributors](https://img.shields.io/github/contributors/uttombarmon/virtualstore)](https://github.com/uttombarmon/virtualstore/graphs/contributors)

## Overview

**VirtualStore** is a fully functional e-commerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js) with a dynamic and SEO-friendly frontend powered by Next.js. The backend is developed with TypeScript for enhanced code quality and maintainability, utilizing `ts-node-dev` for automatic server restarts on file changes during development. This project showcases the development of a complete online shopping experience, allowing users to browse products, manage a shopping cart, create accounts, and place orders. It also includes a basic administrative interface for product and order management, demonstrating full-stack development capabilities and proficiency in modern web technologies.

## Key Features

- **Product Catalog:** Browse a wide range of products with detailed information and images.
- **User Authentication:** Secure registration and login for customers.
- **Shopping Cart:** Add, update, and remove items from a persistent shopping cart.
- **Order Placement:** Streamlined checkout process for registered users to place orders.
- **Order History:** Registered users can view their past order history.
- **Admin Dashboard:** Secure interface for administrators to:
  - **Product Management:** Add, edit, and delete products.
  - **Order Management:** View and update order statuses.
- **Server-Side Rendering (SSR) / Static Site Generation (SSG):** Implemented with Next.js for improved performance and SEO.
- **Backend with TypeScript:** Utilizing TypeScript for a more robust and maintainable server-side codebase.
- **Automatic Server Updates:** `ts-node-dev` enables automatic server restarts on file saves during development.
- **Responsive Design:** User interface adapts seamlessly to different screen sizes (desktop, tablet, mobile).
- **RESTful API:** Well-defined API for communication between the frontend and backend.

## Technologies Used

**Frontend:**

- [Next.js](https://nextjs.org/) (React framework for SSR/SSG)
- [React](https://react.dev/) (JavaScript library for building user interfaces)
- [CSS Modules](https://github.com/css-modules/css-modules) / [Styled Components](https://styled-components.com/) / [Tailwind CSS](https://tailwindcss.com/) (Specify which you used, e.g., Tailwind CSS)
- [State Management: Context API](https://react.dev/docs/context)
- [API Communication: Axios](https://axios-http.com/docs/intro)

**Backend:**

- [Node.js](https://nodejs.org/en/) (JavaScript runtime environment)
- [Express.js](https://expressjs.com/) (Web application framework for Node.js)
- [TypeScript](https://www.typescriptlang.org/) (Superset of JavaScript that compiles to clean JavaScript)
- [ts-node-dev](https://github.com/wclr/ts-node-dev) (Development tool for Node.js with automatic restarts and TypeScript support)
- [MongoDB](https://www.mongodb.com/) (NoSQL database)
- [Mongoose](https://mongoosejs.com/) (MongoDB object modeling for Node.js)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (for authentication)
- [bcrypt](https://www.npmjs.com/package/bcrypt) (for password hashing)
- [cors](https://www.npmjs.com/package/cors) (for handling Cross-Origin Resource Sharing)
- [dotenv](https://www.npmjs.com/package/dotenv) (for managing environment variables)
- [Other relevant backend libraries]

**Deployment (If applicable):**

- [Vercel](https://vercel.com/) (for frontend deployment)
- [Render](https://render.com/) (for backend deployment)
- [MongoDB Atlas](https://www.mongodb.com/atlas) (for database hosting)

## Getting Started

Follow these steps to get the project running locally:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/uttombarmon/virtualstore.git](https://github.com/uttombarmon/virtualstore.git)
    cd virtualstore
    ```

2.  **Install backend dependencies:**

    ```bash
    cd server
    npm install
    cd ..
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd client
    npm install
    cd ..
    ```

4.  **Set up environment variables:**

    - Create a `.env` file in the root directory.
    - Add the following environment variables (replace with your actual values):
      ```
      MONGODB_URI=your_mongodb_connection_string
      JWT_SECRET=your_secret_jwt_key
      # Add any other environment variables your backend needs
      ```
    - You might also need to create `.env.local` in the `client` directory for frontend-specific environment variables (if any, usually prefixed with `NEXT_PUBLIC_`).

5.  **Run the development servers concurrently:**

    ```bash
    npm run dev
    ```

    This command, defined in the root `package.json`, will use `concurrently` to start:

    - The Next.js development server in the `client` directory (`npm run dev` in `client/package.json`).
    - The `ts-node-dev` server in the `server` directory (`npm run dev` in `server/package.json`), which provides automatic server restarts on saving TypeScript files.

6.  **Access the application:**
    - Frontend: Usually runs on `http://localhost:3000`.
    - Backend API: Usually runs on `http://localhost:5000` (or a different port you configure).

## Deployment

_(Add details about how you deployed your project, if applicable. Include links to the live demo.)_

For example:

> The frontend is deployed on [Vercel](your-vercel-deployment-link) for optimal performance.
> The backend API is deployed on [Render](your-render-deployment-link).
> The MongoDB database is hosted on [MongoDB Atlas](your-mongodb-atlas-link).

## Contributing

_(If you're open to contributions, add guidelines here.)_

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

## Author

[Uttom Barmon](https://github.com/uttombarmon)

## Acknowledgements

_(Optional: Mention any resources, tutorials, or libraries that were particularly helpful.)_

**Here are the key updates and changes:**

- **Repository Link:** Updated the clone command with your actual GitHub repository URL.
- **Frontend Technologies:** Clarified the state management library as "Context API" and the API communication library as "Axios". Also, I've left a note for you to specify which CSS styling method you primarily used (e.g., Tailwind CSS).
- **Backend Technologies:** Added `TypeScript` and `ts-node-dev` with descriptions and links.
- **Getting Started (Step 5):** Streamlined the explanation of the `npm run dev` command.

Make sure to review the "Technologies Used" section and specify your CSS styling choice for the frontend. This updated `README.md` provides a more accurate and informative overview of your **VirtualStore** project. Good job on setting up the TypeScript backend with automatic updates!
