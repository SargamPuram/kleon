"use client";
import React from 'react';
import Link from 'next/link';

const QueryPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white-600 via-black-500 to-pink-500 p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-white">Select a Database</h1>
            <div className="flex space-x-6">
                <Link href="/queries/mysql"
                     className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        MySQL
                    
                </Link>
                <Link href="/queries/postgresql"
                     className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        PostgreSQL
                    
                </Link>
                <Link href="/queries/sqlite"
                     className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        SQLite
                    
                </Link>
                <Link href="/queries/mongodb"
                     className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        MongoDb
                    
                </Link>
                <Link href="/queries/mariadb"
                     className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        MariaDB
                    
                </Link>
            </div>
        </div>
    );
};

export default QueryPage;

