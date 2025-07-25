import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return ( 

    <footer className="bg-gray-900 text-white py-8 text-center font-sans">
      <footer className=" text-white p-4 text-center">
      <div className="flex justify-center space-x-6 text-2xl">
        <i className="fab fa-facebook hover:text-yellow-400"></i>
        <i className="fab fa-twitter hover:text-yellow-400"></i>
        <i className="fab fa-instagram hover:text-yellow-400"></i>
      </div>
    </footer>
      <div className="max-w-6xl mx-auto">
        <p className="mb-5 text-sm">&copy; 2025 Pickle Inc. All rights reserved.</p>

         
    
        <div className="text-center">
          <h4 className="mb-3 text-yellow-400 text-lg font-semibold">Quick Links</h4>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a>
            </li>
            <li>
              <a href="/products" className="text-gray-300 hover:text-yellow-400 transition-colors">Products</a>
            </li>
            <li>
              <a href="/contacts" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-gray-300 hover:text-yellow-400 transition-colors">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
