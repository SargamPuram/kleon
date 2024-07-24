import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the request and response types
interface ExplainSqlRequest {
    prompt: string;
    dialect: string;
}

interface ExplainSqlResponse {
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        // Parse JSON request body
        const { prompt, dialect }: ExplainSqlRequest = await request.json();

        // Make API call to your backend
        const response = await fetch('https://kleon.onrender.com/explain_sql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt, dialect }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response
        const data: ExplainSqlResponse = await response.json();

        // Return the response from your API
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in /explain_sql route:', error);
        return NextResponse.error();
    }
}
