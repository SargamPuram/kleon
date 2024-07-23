"use client"
import React, { useState } from 'react';
import axios from 'axios';

interface QueryExplanationProps {
    dialect: string;
}

const QueryExplanation: React.FC<QueryExplanationProps> = ({ dialect }) => {
    const [query, setQuery] = useState('');
    const [explanation, setExplanation] = useState('');

    const handleExplain = async () => {
        try {
            const response: any = await axios.post('../api/explain_sql', { prompt: query, dialect });
            setExplanation(response.data.message);
        } catch (error) {
            console.error('Error explaining query:', error);
            setExplanation('Error explaining query.');
        }
    };

    return (
        <div className="p-6 bg-[#00171f] rounded-lg shadow-md w-full max-w-3xl mx-auto mt-8">
            <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter SQL query here"
                className="w-full h-40 p-3 mb-4 border border-[#003459] rounded-lg bg-white text-black resize-none
                bg-[#f8f7ff] font-sans" 
            />
            <button
                onClick={handleExplain}
                className="px-4 py-2 bg-[#007ea7] text-white rounded-lg hover:bg-[#00a8e8] transition-all duration-200 bg-center"
            >
                Explain Query
            </button>
            {explanation && (
                <div className="mt-6 p-4 bg-[#ffffff] rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-[#003459]">Explanation:</h3>
                    <p className="whitespace-pre-wrap text-[#00171f]">{explanation}</p>
                </div>
            )}
        </div>
    );
};

export default QueryExplanation;


