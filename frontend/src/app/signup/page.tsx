"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUp() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
        } catch (error: any) {
            console.log("SignUp failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [user]);

    return (
        <div className="custom-gradient text-white flex items-center justify-center min-h-screen py-2">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-black">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {loading ? "Processing..." : "Sign Up"}
                </h1>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-lg mb-2">Username</label>
                    <input
                        className="p-2 w-full border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="Enter your username"
                    />
                </div>
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
                <button
                    onClick={onSignup}
                    className={`p-2 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg focus:outline-none transition-all duration-200 ${buttonDisabled ? '' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!buttonDisabled}
                >
                    {loading ? "Processing..." : "Sign Up"}
                </button>
                <div className="mt-4 text-center">
                    <Link href="/login" legacyBehavior>
                        <a className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">Have already signed up? Visit the Login Page</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
