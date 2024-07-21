import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Supercharge Your SQL Queries with <span className="text-blue-400">AI</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Effortlessly generate optimized SQL queries and unlock data insights with cutting-edge AI technology.
        </p>
        <Link href="/get-started" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
