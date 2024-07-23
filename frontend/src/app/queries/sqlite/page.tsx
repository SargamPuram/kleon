"use client";
import React, { useState } from 'react';
import axios from 'axios';

const SQLitePage = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
        try {
            const res: any = await axios.post('../api/generate_sql/sqlite', { prompt, dialect: 'sqlite' }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.status === 200) {
                setResponse(res.data.message);
            } else {
                console.error('Failed to fetch');
            }
        } catch (error) {
            console.error('Failed to fetch', error);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(response).then(() => {
            alert('SQL query copied to clipboard!');
        }).catch((error) => {
            console.error('Failed to copy', error);
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 p-4">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Enter your SQLite query</h1>
                <div className="mb-4">
                    <textarea
                        className="w-full h-32 p-3 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-800 text-white resize-none"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your prompt"
                        maxLength={1000}
                    />
                    <div className="text-right text-gray-400 mt-1">{prompt.length}/1000</div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        onClick={handleSubmit}
                    >
                        Generate SQLite
                    </button>
                </div>
                {response && (
                    <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded-lg">
                        <p className="text-white"><strong>Response:</strong></p>
                        <p className="text-green-400 font-mono mt-2">{response}</p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                                onClick={handleCopy}
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SQLitePage;
