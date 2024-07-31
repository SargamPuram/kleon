"use client";
import React from 'react';
import logo from '@/assests/logo.png';
import Image from 'next/image';
import menu from '@/assests/hamburger.png';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from './authContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-black p-8">
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='relative h-16 w-16'>
          <div className='absolute inset-0 flex justify-center items-center'>
            <div className='relative h-16 w-16 rounded-full flex justify-center items-center'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#00ccff] via-[#00ffcc] via-[#ffff00] via-[#ff00cc] to-[#cc00ff] blur-xl' />
              <div className='relative h-16 w-16 flex justify-center items-center'>
                <Image
                  src={logo}
                  alt="Saas logo"
                  className='object-cover rounded-full'
                  layout="fill"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Menu Icon */}
        <div className='border border-white border-opacity-35 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
          <div className='relative h-10 w-10'>
            <Image
              src={menu}
              alt="menu logo"
              className='object-cover rounded-full bg-white'
              layout="fill"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden sm:flex text-white items-center gap-6">
          <Link href='/' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Home</Link>
          {isAuthenticated ? (
            <>
              <Link href='/profile' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Profile</Link>
            </>
          ) : (
            <>
              <Link href='/login' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Login</Link>
              <Link href='/signup' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Sign Up</Link>
            </>
          )}
          <Link href='/query' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Query</Link>
          <Link href='/dashboard' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Dashboard</Link>
          <Link href='/dashboard'>
            <button className='bg-gradient-to-r from-[#b8b8f3] via-[#d7b8f3] via-[#f397d6] via-[#f42272] to-[#232e21] text-white font-bold px-4 py-2 rounded-md hover:opacity-80 transition-opacity duration-200 ease-in-out'>
              Get for free
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col text-white mt-4 space-y-4">
          <Link href='/' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Home</Link>
          {isAuthenticated ? (
            <>
              <Link href='/profile' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Profile</Link>
            </>
          ) : (
            <>
              <Link href='/login' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Login</Link>
              <Link href='/signup' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Sign Up</Link>
            </>
          )}
          <Link href='/query' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Query</Link>
          <Link href='/dashboard' className='hover:text-opacity-100 hover:opacity-100 hover:glow transition-opacity duration-200 ease-in-out opacity-70'>Dashboard</Link>
          <Link href='/dashboard'>
            <button className='bg-gradient-to-r from-[#b8b8f3] via-[#d7b8f3] via-[#f397d6] via-[#f42272] to-[#232e21] text-white font-bold px-4 py-2 rounded-md hover:opacity-80 transition-opacity duration-200 ease-in-out'>
              Get for free
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
