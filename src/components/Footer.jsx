import React from "react";
import { Dumbbell, MapPin, Phone, Mail, Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Christ-Cardio-Sport</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La référence fitness au Cameroun. Nous transformons des vies depuis 2020 
              avec passion, professionnalisme et l'esprit camerounais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href="https://wa.me/237XXXXXXXXX" className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Galerie</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Nos Services</h3>
            <ul className="space-y-3">
              <li><a href="/programs#musculation" className="text-gray-400 hover:text-white transition-colors">Musculation & Force</a></li>
              <li><a href="/programs#cardio" className="text-gray-400 hover:text-white transition-colors">Cardio Training</a></li>
              <li><a href="/programs#cours-collectifs" className="text-gray-400 hover:text-white transition-colors">Cours Collectifs</a></li>
              <li><a href="/coaching" className="text-gray-400 hover:text-white transition-colors">Coaching Personnel</a></li>
              <li><a href="/programs" className="text-gray-400 hover:text-white transition-colors">Programmes Spécialisés</a></li>
              <li><a href="/nutrition" className="text-gray-400 hover:text-white transition-colors">Nutrition & Bien-être</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Douala - Boulevard de la Liberté</p>
                  <p className="text-gray-400">Yaoundé - Avenue Kennedy</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+237695XXXXXX" className="text-gray-400 hover:text-white transition-colors">+237 6 XX XX XX XX</a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="mailto:contact@christcardiosport.cm" className="text-gray-400 hover:text-white transition-colors">contact@christcardiosport.cm</a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Horaires</h4>
              <p className="text-sm text-gray-400">Lun-Ven : 6h00 - 22h00</p>
              <p className="text-sm text-gray-400">Sam-Dim : 8h00 - 20h00</p>
            </div>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Christ-Cardio-Sport. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-1 text-sm text-gray-400">
                <span>Fait avec</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>au Cameroun</span>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'utilisation
              </a>
              <a href="/legal" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-600/20 to-yellow-500/20 rounded-lg border border-green-600/30">
            <p className="text-center text-sm text-gray-300">
              🏆 <strong>Christ-Cardio-Sport</strong> - Élu "Meilleure Salle de Sport" Douala & Yaoundé 2023-2024 
              | 🇨🇲 Fier d'être camerounais !
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};