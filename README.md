# kleon
AI-Powered Data Query Interface using Rust

## Features

- **SQL Query Explanation:** Input an SQL query and receive a detailed explanation of its purpose and functionality.
- **SQL Query Generation:** Provide a prompt to generate SQL queries for various use cases, such as SELECT, INSERT, UPDATE, DELETE, JOIN, and aggregation operations.

## Technologies Used

- **Frontend:** Next.js
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
    ```
2. **Set Up the Frontend**

Navigate to the frontend directory and install dependencies:

 ```bash
cd frontend
npm install
 ```
3. ***Set Up the Backend***

Navigate to the backend directory and install dependencies:

 ```bash
cd backend
cargo build
 ```

4. Configure Environment Variables
5. Create a .env file in both frontend and backend directories and set up your environment variables. Example .env file for frontend: 

.env
 ```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
 ```
6. Example .env file for backend:

.env
 ```bash
DATABASE_URL=mysql://user:password@localhost:3306/yourdatabase
 ```
7. Run the Project
Start the backend server:

 ```bash
cd backend
cargo run
 ```
8. Start the frontend server:
 ```bash
cd frontend
npm run dev
 ```
The frontend should now be available at http://localhost:3000, and it will communicate with the backend at http://localhost:8080.


## Usage
1. Explaining SQL Queries
2. Navigate to the Explain Query section.
3. Enter your SQL query into the text area.
4. Click Explain Query to receive a detailed explanation.
5. Generating SQL Queries
6. Navigate to the Generate Query section.
7. Provide a prompt describing the SQL query you need.
8. Click Generate Query to receive the generated SQL query.
9. API Endpoints
1. POST /api/explain_sql

Request Body: { "prompt": "your SQL query", "dialect": "mysql" }<br>
Response: { "message": "Explanation of the query" }<br>

2. POST /api/generate_sql

Request Body: { "prompt": "your query prompt", "dialect": "mysql" }<br>
Response: { "query": "Generated SQL query" }<br><br>
10. Contributing<br>
Feel free to contribute to this project by submitting pull requests or opening issues. Contributions are welcome to improve the functionality or add new features.
