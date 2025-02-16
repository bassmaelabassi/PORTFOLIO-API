import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
      gsap.from(aboutRef.current, {
        opacity: 1, 
        y: -50, 
        duration: 1, 
        ease: "power3.out", 
      });
    }, []);

  return (
    <section ref={aboutRef} className="animate p-15">
      <h2 className="text-3xl font-bold m-4">À propos</h2>
      <p className="">
      Je suis Bassma El Abassi, développeuse passionnée par les technologies modernes et l'innovation. Toujours en quête d'apprentissage et de perfectionnement, je conçois des solutions performantes et intuitives, alliant esthétique, efficacité et expérience utilisateur optimale.  
        Mon expertise englobe le développement frontend et backend, avec une maîtrise de React.js, Node.js, Express.js, MongoDB et Tailwind CSS. J'accorde une grande importance à l'optimisation des performances, la scalabilité des applications et l'utilisation des meilleures pratiques en développement web.  
        Mon objectif est de transformer vos idées en projets concrets et impactants, en proposant des interfaces modernes, réactives et adaptées aux besoins des utilisateurs. Grâce à une approche rigoureuse et méthodique, je veille à garantir qualité, clarté du code et fluidité d'interaction.  
        Curieuse et proactive, j'aime relever des défis techniques et explorer les nouvelles tendances du développement web pour proposer des solutions toujours plus innovantes.  
      </p>
    </section>
  )
}

export default About
