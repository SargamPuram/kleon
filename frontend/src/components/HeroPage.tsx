"use client";
import Link from "next/link";
import React from "react";

export const HeroPage = () => {
    return (
        <div className="custom-gradient text-white flex flex-col items-center justify-center relative overflow-hidden">
            <div className="container text-center">
                <Link href="/signup" legacyBehavior>
                    <a className="inline-flex gap-2 border py-1 px-2 rounded-lg border-white/40">
                        <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">Version 1.0 is out!</span>
                        <span>Read More</span>
                    </a>
                </Link>
            </div>
            <h1 className="text-7xl font-bold tracking-tighter text-center mt-8 font-cursive py-1 px-2">
                Elevate Your SQL Game
            </h1>
            <p className="text-center text-2xl mt-9 py-1 px-10">
                Unlock the power of SQL like never before. <br />
                Our AI-Powered Data Query Interface streamlines your database interactions with cutting-edge technology. <br />
                Whether you are a data analyst, developer, or SQL enthusiast, check out our tool <br />
            </p>
            <div className="flex justify-center mt-8 mb-12">
                <Link href="/login" legacyBehavior>
                <button className="bg-white text-black py-3 px-5 rounded-lg border border-white/60 font-medium mb-9 transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg">
    Get Started!
</button>
                </Link>
            </div>
            <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-[radial-gradient(ellipse,_rgba(0,0,0,0.95)_50%,_rgba(214,58,119,0.85)_90%)] left-1/2 -translate-x-1/2 bottom-[-300px] "></div>
        </div>
    );
}

