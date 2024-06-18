// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" text-center md:text-left">
            <p>&copy; 2024 Nassim Hassain. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/nassim-h" target="_blank" rel="noopener noreferrer" className=" hover:text-secondary transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.48.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.21-3.37-1.21-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.26-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0112 6.8c.85.004 1.7.114 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.014 10.014 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/nassim-hassain" target="_blank" rel="noopener noreferrer" className=" hover:text-secondary transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 20h-3v-9h3v9zm-1.5-10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11.5 10.5h-3v-5.5c0-1.25-.25-2.5-2.5-2.5s-2.5 1.25-2.5 2.5v5.5h-3v-9h3v1.25c.68-1 1.75-1.75 3.25-1.75 3.5 0 3.75 2.25 3.75 5v4.5z" />
              </svg>
            </a>
            <a href="mailto:nassimhassain@gmail.com" className=" hover:text-secondary transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l11.985-7.385v13.538h-24v-13.538l11.985 7.385zm11.985-9.713h-23.97l11.985 7.384 11.985-7.384z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
