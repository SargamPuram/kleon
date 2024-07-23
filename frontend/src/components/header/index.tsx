"use client";

import Link from 'next/link';
import { useAuth } from '../authContext';

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-deep-blue text-light-gray py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/hero" className="text-2xl font-bold nanum-myeongjo-regular ">
          Kleon
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/hero" className="hover:text-bright-yellow nanum-myeongjo-regular">
                Home
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link href="/profile" className="hover:text-bright-yellow nanum-myeongjo-regular">
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="hover:text-bright-yellow nanum-myeongjo-regular">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-bright-yellow nanum-myeongjo-regular">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link href="/query" className="hover:text-bright-yellow nanum-myeongjo-regular">
                Query
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-bright-yellow nanum-myeongjo-regular">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
