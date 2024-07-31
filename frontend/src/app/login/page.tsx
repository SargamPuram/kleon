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
        <div className="custom-gradient text-white flex items-center justify-center min-h-screen py-2">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-black">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {loading ? "Processing..." : "Log In"}
                </h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg mb-2">Email</label>
                    <input
                        className="p-2 w-full border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-lg mb-2">Password</label>
                    <input
                        className="p-2 w-full border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Enter your password"
                    />
                </div>
                <br />
                <button
                    onClick={onLogin}
                    className={`p-2 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg focus:outline-none transition-all duration-200 ${buttonDisabled ? '' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!buttonDisabled}
                >
                    {loading ? "Processing..." : "Log In"}
                </button>
                <div className="mt-4 text-center">
                    <Link href="/signup" legacyBehavior>
                        <a className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">Not signed up? Visit Sign Up Page</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
