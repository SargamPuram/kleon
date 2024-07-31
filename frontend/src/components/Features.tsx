"use client"
import React from "react"

const features = [
    {
        title: 'In-depth SQL Query Explanations',
        description: 'Input your SQL queries and get clear, detailed explanations on what they do and how they work.'
    },
    {
        title: 'Smart SQL Query Generation',
        description: 'Describe what you need, and let our AI craft the perfect SQL query for you, including SELECT, INSERT, UPDATE, DELETE, JOIN, and more.'
    },
    {
        title: 'Support for Multiple Databases',
        description: 'Our tool provides support for MySQL, PostgreSQL, MariaDB, MongoDB, and SQLite, offering flexibility for various database needs.'
    },
]

export const Features = () => {
    return (
        <div className="bg-black text-white py-8 px-4">
            <div className="container mx-auto py-12 px-8">
                <h2 className="text-5xl font-bold text-center mb-6 tracking-lighter">Everything You Need</h2>
                <p className="text-center mb-12 text-xl text-white/85">
                    Discover the power and convenience of our AI-powered data query interface.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex flex-col gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="rounded-lg border border-white/50 px-5 py-10 text-center">
                            <div className=" font-semibold mb-4 flex flex-col h-auto w-auto text-white justify-center rounded-xl">
                            <h3 className="mt-6 font-bold text-4xl">{feature.title}</h3>
                            <p  className="mt-6 text-white/60 text-xl">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
