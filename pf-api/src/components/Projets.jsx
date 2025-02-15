import React, { useEffect } from 'react';
import gsap from "gsap";

const projects = [
    {
      id: 1,
      title: "Gestionnaire de Stock",
      description: "Application de gestion de stock pour petites entreprises.",
      image: "https://img.freepik.com/photos-gratuite/plan-moyen-femme-au-travail_23-2148902532.jpg?ga=GA1.1.1268337087.1735576499&semt=ais_hybrid.",
      link: "https://github.com/bassmaelabassi/-Gestionnaire-de-Stock-pour-une-Petite-Entreprise",
    },
    {
      id: 2,
      title: "Météo App",
      description: "Application météo affichant les prévisions en temps réel.",
      image: "https://img.freepik.com/vecteurs-libre/bulletin-meteo-mobile_23-2147551892.jpg?uid=R185750528&ga=GA1.1.1268337087.1735576499&semt=ais_hybrid",
      link: "https://github.com/bassmaelabassi/METEO",
    },
    {
      id: 3,
      title: "Gestion des Tâches",
      description: "Application de gestion de tâches avec suivi des progrès.",
      image: "https://img.freepik.com/photos-gratuite/vue-dessus-du-bureau-courbe-croissance-pieces-monnaie_23-2148780621.jpg?uid=R185750528&ga=GA1.1.1268337087.1735576499&semt=ais_hybrid",
      link: "https://github.com/bassmaelabassi/gestion-des-taches",
    },
    {
      id: 4,
      title: "Portfolio",
      description: "Application de Portfolio.",
      image: "data:image/png;base64,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",
      link: "https://github.com/bassmaelabassi/PORTFOLIO-API",
    },
  ];

function Projets() {

    useEffect(() => {
        gsap.to("#projects", { rotation: 360, duration: 2, ease: "power2.inOut" });
    }, []);

  return (
    <section id="projects" className="py-2 bg-gray-100 dark:bg-slate-700">
      <div className="w-[80%] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Mes Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-fit object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projets
