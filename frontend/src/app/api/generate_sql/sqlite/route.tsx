import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { prompt } = reqBody;

        // Forward the request to the Rust backend
        const res = await axios.post('http://127.0.0.1:8080/generate_sql', { prompt, dialect: 'sqlite' }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return NextResponse.json(res.data);
    } catch (error: any) {
        console.error('Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
