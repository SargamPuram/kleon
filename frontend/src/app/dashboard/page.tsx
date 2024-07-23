"use client"
import React, { useState } from 'react';
import QueryExplanation from '@/components/queryExplanation';

const databases = [
    { name: 'PostgreSQL', dialect: 'postgresql' },
    { name: 'MySQL', dialect: 'mysql' },
    { name: 'SQLite', dialect: 'sqlite' },
    { name: 'MSSQL', dialect: 'mssql' },
    { name: 'Oracle', dialect: 'oracle' },
];

const Dashboard: React.FC = () => {
    const [selectedDatabase, setSelectedDatabase] = useState(databases[0].dialect);

    const handleDatabaseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDatabase(event.target.value);
    };

    return (
        <div className="p-6 bg-[#00171f] min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-4 text-[#ffffff]">Dashboard</h1>
            <label className="block mb-2 text-lg font-medium text-[#ffffff]">Select a Database</label>
            <select
                value={selectedDatabase}
                onChange={handleDatabaseChange}
                className="w-full max-w-md p-3 mb-6 border border-[#003459] rounded-lg bg-white text-black"
            >
                {databases.map((db) => (
                    <option key={db.dialect} value={db.dialect}>
                        {db.name}
                    </option>
                ))}
            </select>
            <QueryExplanation dialect={selectedDatabase} />
        </div>
    );
};

export default Dashboard;



