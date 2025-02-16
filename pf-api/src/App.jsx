import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";

import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Projets from "./components/Projets";
import AdminPage from "./components/AdminPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
    if (elements.length > 0) {
      gsap.from(".animate", { opacity: 0, duration: 1, y: -50 });
    }
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Header toggleDarkMode={toggleDarkMode} />
          <div className="text-center my-4">
            <Link to="/admin" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Accéder à l'Admin
            </Link>
          </div>
          <main>
            <Routes>
              <Route path="/" element={<>
                <About />
                <Projets />
                <Contact />
              </>} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
