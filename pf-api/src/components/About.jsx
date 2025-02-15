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
    <section ref={aboutRef} className="animate p-20">
      <h2 className="text-3xl font-bold m-4">À propos</h2>
      <p className="">
        Je suis Bassma El Abassi, développeuse passionnée par les technologies modernes et l'innovation. Je conçois des solutions performantes et intuitives, alliant esthétique et efficacité. Mon objectif est de transformer vos idées en projets concrets et impactants.
      </p>
    </section>
  )
}

export default About
