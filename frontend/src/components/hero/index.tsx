"use client";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-white" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/6d/ba/05/6dba0551cb7e69bc21e970b1606c46ad.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center px-6 md:px-12 pt-12">
        <h1 className="text-4xl md:text-8xl font-pacifico-cursive mb-8 mt-40">
          KLEON
        </h1>
        <h1 className="font-nunito text-4xl md:text-4xl mb-2">
          Supercharge Your SQL Queries with <span className="text-blue-400">AI</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 font-space-grotesk">
          Effortlessly generate optimized SQL queries and unlock data insights with cutting-edge AI technology.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <Link href="/login">
            <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer">
              Get Started
            </div>
          </Link>
          <Link href="/features">
            <div className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer">
              Learn More
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


