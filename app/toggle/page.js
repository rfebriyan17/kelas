"use client";

import { useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <style>
        {`
          * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
          body { font-family: 'Poppins', sans-serif; background-color: #0a192f; color: #ccd6f6; }

          /* Navbar */
          .navbar {
            position: fixed; top: 0; width: 100%;
            background: rgba(10, 25, 47, 0.9);
            display: flex; justify-content: space-between;
            align-items: center; padding: 15px 20px;
            z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          }
          .navbar .logo { font-size: 1.5em; color: #64ffda; font-weight: bold; }
          .nav-links { display: flex; gap: 20px; }
          .nav-links a {
            color: #ccd6f6; text-decoration: none; font-size: 18px;
            transition: 0.3s ease; padding: 10px 15px;
          }
          .nav-links a:hover { color: #64ffda; }

          /* Mobile Menu */
          .burger { display: none; cursor: pointer; }
          .burger div {
            width: 25px; height: 3px; margin: 5px;
            background: #64ffda; transition: 0.3s ease;
          }
          .mobile-menu {
            display: none; flex-direction: column; text-align: center;
            background: rgba(10, 25, 47, 0.95); position: absolute;
            width: 100%; top: 60px; left: 0; padding: 20px 0;
          }
          .mobile-menu a { padding: 15px; display: block; color: #ccd6f6; text-decoration: none; }
          .mobile-menu a:hover { color: #64ffda; }

          /* Show mobile menu when open */
          .mobile-menu.open { display: flex; }

          /* Responsive */
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .burger { display: flex; flex-direction: column; }
          }

          /* Hero Section */
          .hero {
            height: 100vh; display: flex; justify-content: center;
            align-items: center; flex-direction: column;
            text-align: center; padding: 0 20px;
          }
          .hero h1 {
            font-size: 3rem; color: #64ffda; margin-bottom: 10px;
          }
          .hero p {
            font-size: 1.2rem; color: #ccd6f6; max-width: 600px;
          }
        `}
      </style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Riz's CV</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Burger Menu Icon */}
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Riz's CV</h1>
        <p>Explore my skills, projects, and services.</p>
      </section>
    </div>
  );
}
