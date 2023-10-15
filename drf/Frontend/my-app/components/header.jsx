import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl lg:text-3xl font-bold">
          Innov8ors
        </a>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              HomePage
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
