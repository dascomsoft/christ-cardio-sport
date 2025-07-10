import React from "react";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Aminata Ndong",
      location: "Douala",
      profession: "Enseignante",
      rating: 5,
      comment: "FitCameroun a complètement transformé ma vie ! En 6 mois, j'ai perdu 15 kg et je me sens plus énergique que jamais. L'ambiance familiale et les coachs bienveillants font toute la différence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Jean-Paul Mvogo",
      location: "Yaoundé",
      profession: "Ingénieur",
      rating: 5,
      comment: "Excellente salle avec des équipements modernes. Les cours de danse africaine le soir sont fantastiques ! C'est un vrai plaisir de venir s'entraîner dans cette ambiance typiquement camerounaise.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Marie-Claire Fouda",
      location: "Douala",
      profession: "Commerçante",
      rating: 5,
      comment: "Après mon diabète, mon médecin m'a conseillé le sport. FitCameroun propose un programme spécialisé parfait ! Les coachs sont très attentifs et m'accompagnent avec professionnalisme.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Samuel Etoundi",
      location: "Yaoundé",
      profession: "Étudiant",
      rating: 5,
      comment: "Les tarifs étudiants sont très abordables et la qualité est au rendez-vous. Je recommande vivement ! L'esprit de communauté nous motive tous à donner le meilleur de nous-mêmes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Elisabeth Biya",
      location: "Douala",
      profession: "Infirmière",
      rating: 5,
      comment: "Working en équipe de nuit, j'apprécie les horaires flexibles. Les cours de yoga du matin m'aident à décompresser après mes gardes. Une équipe formidable et des installations impeccables !",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Patrick Onana",
      location: "Yaoundé",
      profession: "Fonctionnaire",
      rating: 5,
      comment: "FitCameroun c'est plus qu'une salle de sport, c'est une vraie famille ! Les événements communautaires et les challenges mensuels créent une émulation positive. Je ne peux plus m'en passer !",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Témoignages de nos <span className="text-green-600">Membres</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les histoires inspirantes de transformation de nos membres camerounais. 
            Leurs succès sont notre plus grande fierté !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-green-600 opacity-20">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.profession}</p>
                    <p className="text-sm text-green-600 font-medium">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section statistiques */}
        <div className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Nos Membres Parlent</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-lg">Note moyenne</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg">Renouvellent</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-lg">Recommandent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
