// components/Hero.tsx

import React from 'react';
import Image from 'next/image'; // Import the Image component from the correct package

const Hero: React.FC = () => {
  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl mb-2 font-bold text-primary">Nassim Hassain</h1>
          <p className="mb-4 text-lg text-gray-600">Passionné par les technologies innovantes.</p>
          <a className="mt-8 bg-secondary text-white py-2 px-4 rounded-full hover:shadow-xl transition duration-300" href='#suricate'  >
            Pourquoi je veux rejoindre Suricate Concept ? 
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <Image src="suricate-bebe.webp" alt="Illustration" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
