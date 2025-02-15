import { useState, useEffect } from "react";
import gsap from "gsap";

import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import About from "./components/About";
import Projets from "./components/Projets"


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
    root.classList.add("dark");
    } else {
    root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    gsap.from(".animate", { opacity: 0, duration: 1, y: -50 });
  }, []);

  return (
    <>
          <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header toggleDarkMode={toggleDarkMode} />
        <main>
        <About />
        <Projets />
        <Contact />
        </main>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
