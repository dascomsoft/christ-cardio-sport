import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";



const Contact = () => {
        useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);
  const contactInfo = [
    {
      icon: FaPhone,
      title: "Téléphone",
      details: ["+237 6 95 xx xx xx", "+237 6 77 xx xx xx"],
      color: "green"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@christcardiosport.cm", "contact@christcardiosport.cm"],
      color: "blue"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Adresses",
      details: ["Douala - Akwa Nord", "Yaoundé - Bastos"],
      color: "red"
    },
    {
      icon: FaClock,
      title: "Horaires",
      details: ["Lun-Ven: 6h-22h", "Sam-Dim: 8h-20h"],
      color: "yellow"
    }
  ];

  const socialMedia = [
    { icon: FaFacebook, name: "Facebook", color: "blue", link: "#" },
    { icon: FaInstagram, name: "Instagram", color: "pink", link: "#" },
    { icon: FaTwitter, name: "Twitter", color: "blue", link: "#" },
    { icon: FaWhatsapp, name: "WhatsApp", color: "green", link: "https://wa.me/237XXXXXXXXX" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-16">
            Contactez <span className="text-yellow-300">Christ-Cardio-Sport</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Prêt à commencer votre transformation ? Nous sommes là pour vous accompagner
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className={`text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 ${info.color === 'green' ? 'border-l-green-600' : info.color === 'blue' ? 'border-l-blue-600' : info.color === 'red' ? 'border-l-red-600' : 'border-l-yellow-500'}`}>
                <div className={`${info.color === 'green' ? 'bg-green-100' : info.color === 'blue' ? 'bg-blue-100' : info.color === 'red' ? 'bg-red-100' : 'bg-yellow-100'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`text-2xl ${info.color === 'green' ? 'text-green-600' : info.color === 'blue' ? 'text-blue-600' : info.color === 'red' ? 'text-red-600' : 'text-yellow-500'}`} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h2>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input 
                      type="text" 
                      placeholder="Votre nom"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+237 6xx xx xx xx"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="votre.email@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input 
                    type="text" 
                    placeholder="Objet de votre message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    placeholder="Votre message..."
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <button
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos Localisations
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-l-green-600 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Christ-Cardio-Sport Douala
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Quartier Akwa Nord, près du marché central
                    </p>
                    <p className="text-gray-600">
                      Douala, Région du Littoral
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-l-yellow-500 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Christ-Cardio-Sport Yaoundé
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Quartier Bastos, avenue Kennedy
                    </p>
                    <p className="text-gray-600">
                      Yaoundé, Région du Centre
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Suivez-nous
                </h2>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 ${social.color === 'green' ? 'bg-green-100 hover:bg-green-200 text-green-600' : social.color === 'blue' ? 'bg-blue-100 hover:bg-blue-200 text-blue-600' : 'bg-pink-100 hover:bg-pink-200 text-pink-600'} px-4 py-2 rounded-lg transition-colors duration-200`}
                    >
                      <social.icon className="text-xl" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à rejoindre la famille Christ-Cardio-Sport ?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour une séance d'essai gratuite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/essai-gratuit"
              className="bg-white text-black hover:bg-gray-100 font-medium py-3 px-6 rounded-lg text-lg transition-colors duration-200"
            >
              Séance d'essai gratuite
            </a>
            <a 
              href="tel:+237695XXXXXX"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-medium py-3 px-6 rounded-lg text-lg transition-colors duration-200"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;