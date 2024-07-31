"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            console.log("Login successful", response.data);
            router.push("/profile");
        } catch (error: any) {
            console.log("Login Unsuccessful", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [user]);

    return (
        <div className="custom-gradient text-white flex flex-col items-center justify-center min-h-screen py-2 relative overflow-hidden">
            <h1 className="text-7xl font-bold tracking-tighter mt-8 font-cursive py-1 px-2">
                {loading ? "Processing..." : "Log In"}
            </h1>
            <div className="container text-center mt-8 py-1 px-2">
                <label htmlFor="email" className="block text-2xl mb-2">Email</label>
                <input
                    className="p-2 w-80 border border-white/40 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Enter your email"
                />
                <label htmlFor="password" className="block text-2xl mb-2">Password</label>
                <input
                    className="p-2 w-80 border border-white/40 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Enter your password"
                />
                <button
                    onClick={onLogin}
                    className={`p-2 w-80 border bg-yellow-50 text-black border-purple-100 rounded-lg focus:outline-none focus:border-gray-50 mt-4 ${buttonDisabled ? '' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!buttonDisabled}
                >
                    {loading ? "Processing..." : "Log In"}
                </button>
                <div className="mt-4">
                    <Link href="/signup" legacyBehavior>
                        <a className="text-blue-500 underline">Not signed up? Visit Sign Up Page</a>
                    </Link>
                </div>
            </div>
            <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-[radial-gradient(ellipse,_rgba(0,0,0,0.95)_50%,_rgba(214,58,119,0.85)_90%)] left-1/2 -translate-x-1/2 bottom-[-300px]"></div>
        </div>
    );
}
