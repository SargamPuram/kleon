"use client"
import React from 'react';

export const Banner = () => {
  return (
    <div className="py-3 text-center bg-gradient-to-r from-[rgb(0,204,255)] via-[rgb(0,255,204)] via-[rgb(255,255,0)] via-[rgb(255,0,204)] to-[rgb(204,0,255)] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <p className="font-medium">
          <span className='hidden sm:inline'>Unravel Data Mysteries with AI-Powered Precision - </span>
          <a href="/dashboard" className="underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
