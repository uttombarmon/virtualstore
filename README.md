# VirtualStore - Full-Stack E-commerce Platform

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg)](https://github.com/uttombarmon/virtualstore/graphs/commit-activity)
[![Contributors](https://img.shields.io/github/contributors/uttombarmon/virtualstore)](https://github.com/uttombarmon/virtualstore/graphs/contributors)
[![Deployment Status (if applicable)](your-deployment-badge-url)](your-deployment-link)

## Overview

**VirtualStore** is a comprehensive e-commerce platform meticulously crafted using the MERN stack (MongoDB, Express.js, React, Node.js). The frontend delivers a dynamic and SEO-friendly user experience through Next.js, leveraging its Server-Side Rendering (SSR) and Static Site Generation (SSG) capabilities. The backend is built with **TypeScript**, ensuring enhanced code quality, maintainability, and developer experience, with `ts-node-dev` facilitating rapid development through automatic server restarts. This project demonstrates a complete online shopping solution, encompassing product browsing, shopping cart management, secure user authentication, order placement, and a basic administrative interface for efficient product and order management.

## Key Features

- **Rich Product Catalog:** Explore a diverse range of products with detailed descriptions, high-quality images, and pricing information.
- **Secure User Authentication:** Robust registration and login system for customers to manage their accounts.
- **Persistent Shopping Cart:** Seamlessly add, update, and remove items from a shopping cart that persists across sessions.
- **Effortless Order Placement:** Intuitive checkout process for registered users to finalize and submit their orders.
- **Comprehensive Order History:** Registered users can easily access and review their past order history.
- **Admin Dashboard for Management:** A secure administrative interface enabling authorized users to:
  - **Product Management:** Create, read, update, and delete products within the catalog.
  - **Order Management:** View detailed order information and update order statuses.
- **Optimized Performance & SEO:** Leverages Next.js for Server-Side Rendering (SSR) and Static Site Generation (SSG), resulting in faster load times and improved search engine visibility.
- **Backend Powered by TypeScript:** Ensures a scalable and maintainable backend codebase with static typing and modern JavaScript features.
- **Rapid Development with `ts-node-dev`:** Automatic server restarts on file changes streamline the backend development workflow.
- **Responsive and Accessible Design:** User interface is designed to adapt seamlessly to various screen sizes and adheres to accessibility best practices.
- **Well-Defined RESTful API:** Provides a clear and consistent API for seamless communication between the Next.js frontend and the Node.js/Express backend.

## Technologies Used

**Frontend:**

- [Next.js](https://nextjs.org/) (React framework for SSR/SSG)
- [React](https://react.dev/) (JavaScript library for building user interfaces)
- **Styling:** [Specify your primary styling method here, e.g., Tailwind CSS](https://tailwindcss.com/), [or CSS Modules](https://github.com/css-modules/css-modules), [or Styled Components](https://styled-components.com/)
- [State Management: React Context API](https://react.dev/docs/context)
- [API Communication: Axios](https://axios-http.com/docs/intro)
- [Other relevant frontend libraries, e.g., Formik, Yup, Swiper]

**Backend:**

- [Node.js](https://nodejs.org/en/) (JavaScript runtime environment)
- [Express.js](https://expressjs.com/) (Web application framework for Node.js)
- [TypeScript](https://www.typescriptlang.org/) (Superset of JavaScript for enhanced code quality)
- [Development Tool: `ts-node-dev`](https://github.com/wclr/ts-node-dev) (For automatic server restarts with TypeScript)
- [Database: MongoDB](https://www.mongodb.com/) (NoSQL database)
- [ORM/ODM: Mongoose](https://mongoosejs.com/) (MongoDB object modeling for Node.js)
- [Authentication: jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (for JWT-based authentication)
- [Password Hashing: bcrypt](https://www.npmjs.com/package/bcrypt) (for secure password storage)
- [CORS Handling: cors](https://www.npmjs.com/package/cors) (for enabling Cross-Origin Resource Sharing)
- [Environment Variables: dotenv](https://www.npmjs.com/package/dotenv) (for managing configuration)
- [Validation: e.g., express-validator](https://express-validator.github.io/) (if used)
- [Other relevant backend libraries]

**Deployment:**

- **Frontend:** [Specify your frontend deployment platform, e.g., Vercel](https://vercel.com/)
- **Backend:** [Specify your backend deployment platform, e.g., Render](https://render.com/)
- **Database:** [Specify your database hosting, e.g., MongoDB Atlas](https://www.mongodb.com/atlas)

## Getting Started

To run the VirtualStore locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/uttombarmon/virtualstore.git
   cd virtualstore
   ```

2. **Install backend dependencies:**

   ```bash
   cd server
   npm install
   cd ..
   ```

3. **Install frontend dependencies:**

   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables:**

   - Create a `.env` file in the `server` directory.
   - Add the following essential environment variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_jwt_key
     ```
   - Navigate to the `client` directory and create a `.env.local` file (if it doesn't exist) for frontend-specific environment variables (usually prefixed with `NEXT_PUBLIC_`), such as API endpoints.

5. **Run the development:**

   - **Frontend:** Starts the Next.js development server in the `client` directory using
     ```bash
     npm run dev
     ```
     . This typically runs on `http://localhost:3000`.
   - **Backend:** Starts the `ts-node-dev` server in the `server` directory using
     ```
     npm run dev
     ```
     . This provides automatic server restarts on file saves and usually runs the API on `http://localhost:5000` (or your configured port).

6. **Access the application:**
   - **Frontend:** Open your browser and navigate to `http://localhost:3000`.
   - **Backend API:** The API endpoints will be available at `http://localhost:5000/api/...` (or your configured base URL).

<!-- ## Contributing

(Your contributing guidelines here) -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Uttom Barmon](https://github.com/uttombarmon)
