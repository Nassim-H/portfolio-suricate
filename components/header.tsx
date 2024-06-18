'use client'
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-secondary">
          Le Suricate DZ
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#moi" className="text-gray-800 hover:text-secondary transition duration-300">Pourquoi Moi ?</a>
          <a href="#projets" className="text-gray-800 hover:text-secondary transition duration-300">Projets</a>
          <a href="#faq" className="text-gray-800 hover:text-secondary transition duration-300">F.A.Q</a>
          <a href="#experience" className="text-gray-800 hover:text-secondary transition duration-300">Expérience</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md mt-2">
          <div className="container mx-auto flex flex-col space-y-4 py-4 px-6">
            <a href="#moi" className="text-gray-800 ">Pourquoi Moi ?</a>
            <a href="#projets" className="text-gray-800 ">Projets</a>
            <a href="#faq" className="text-gray-800 ">F.A.Q</a>
            <a href="#contact" className="text-gray-800 ">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
