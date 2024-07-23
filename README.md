# kleon
AI-Powered Data Query Interface using Rust

## Features

- **SQL Query Explanation:** Input an SQL query and receive a detailed explanation of its purpose and functionality.
- **SQL Query Generation:** Provide a prompt to generate SQL queries for various use cases, such as SELECT, INSERT, UPDATE, DELETE, JOIN, and aggregation operations.

## Technologies Used

- **Frontend:** React, Next.js
- **Backend:** Rust (for query generation and explanation)
- **API Communication:** Axios for making HTTP requests
- **Database:** MySQL

## Getting Started

### Prerequisites

- Node.js (v16.0 or later)
- Rust (for backend development)
- MySQL database

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/sql-query-tool.git
   cd sql-query-tool
Set Up the Frontend

Navigate to the frontend directory and install dependencies:

bash
Copy code
cd frontend
npm install
Set Up the Backend

Navigate to the backend directory and install dependencies:

bash
Copy code
cd backend
cargo build
Configure Environment Variables

Create a .env file in both frontend and backend directories and set up your environment variables. Example .env file for frontend:

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:8080
Example .env file for backend:

env
Copy code
DATABASE_URL=mysql://user:password@localhost:3306/yourdatabase
Run the Project

Start the backend server:

bash
Copy code
cd backend
cargo run
Start the frontend server:

bash
Copy code
cd frontend
npm run dev
The frontend should now be available at http://localhost:3000, and it will communicate with the backend at http://localhost:8080.

Usage
Explaining SQL Queries
Navigate to the Explain Query section.
Enter your SQL query into the text area.
Click Explain Query to receive a detailed explanation.
Generating SQL Queries
Navigate to the Generate Query section.
Provide a prompt describing the SQL query you need.
Click Generate Query to receive the generated SQL query.
API Endpoints
POST /api/explain_sql

Request Body: { "prompt": "your SQL query", "dialect": "mysql" }
Response: { "message": "Explanation of the query" }
POST /api/generate_sql

Request Body: { "prompt": "your query prompt", "dialect": "mysql" }
Response: { "query": "Generated SQL query" }
Contributing
Feel free to contribute to this project by submitting pull requests or opening issues. Contributions are welcome to improve the functionality or add new features.
