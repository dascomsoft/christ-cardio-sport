import React, { useState } from "react";
import { FaBars, FaTimes, FaDumbbell, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <FaDumbbell className="text-3xl text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Christ-Cardio-Sport</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              À propos
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Services
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Galerie
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Tarifs
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Contact
            </Link>
            <Link to="/programs" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Programs
            </Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <a 
              href="https://wa.me/237XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                À propos
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Galerie
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Tarifs
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/programs" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                Programs
              </Link>
              <div className="pt-4">
                <a 
                  href="https://wa.me/237XXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;