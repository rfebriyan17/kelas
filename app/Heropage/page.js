"use client";

import { useState } from "react";

export default function Page() {
  const [profileImage] = useState("rizz.jpg");
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1a202c, #2d3748)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#2d3748",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 10,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#38b2ac" }}>Rizz CV</div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["About", "Skills", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#38b2ac")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            style={{
              color: "white",
              fontSize: "1.5rem",
              display: "none",
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "#2d3748", padding: "1rem" }}>
            {["About", "Skills", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "white",
                  display: "block",
                  padding: "0.5rem 0",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#38b2ac")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "100vh",
          padding: "1rem",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #38b2ac",
            marginBottom: "1rem",
            boxShadow: "0 0 15px rgba(56, 178, 172, 0.5)",
          }}
        >
          <img
            src={profileImage}
            alt="Profile Picture"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#38b2ac" }}>Rizki Febriyan</h1>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#cbd5e0" }}>
          Software Engineer | Web Developer | Tech Enthusiast
        </h2>
        <p style={{ color: "#a0aec0", maxWidth: "600px" }}>
          Passionate about crafting modern web and mobile applications. I specialize in React, Next.js, and Node.js.
          Let’s build something amazing together!
        </p>
        <a
          href="#contact"
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#38b2ac",
            color: "white",
            borderRadius: "0.5rem",
            textDecoration: "none",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#319795")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#38b2ac")}
        >
          Get in Touch
        </a>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        style={{
          backgroundColor: "#2d3748",
          padding: "2rem",
          borderRadius: "0.5rem",
          maxWidth: "800px",
          margin: "2rem auto",
        }}
      >
        <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#38b2ac", marginBottom: "1rem" }}>Skills</h2>
        <ul style={{ color: "#a0aec0", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          <li>🚀 JavaScript (React, Next.js)</li>
          <li>🎨 Tailwind CSS & UI/UX Design</li>
          <li>📱 Mobile Development (Flutter, React Native)</li>
          <li>⚙️ Backend (Node.js, Express, MongoDB)</li>
          <li>🔍 SEO & Performance Optimization</li>
        </ul>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        style={{
          backgroundColor: "#2d3748",
          padding: "2rem",
          borderRadius: "0.5rem",
          maxWidth: "800px",
          margin: "2rem auto",
        }}
      >
        <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#38b2ac", marginBottom: "1rem" }}>Portfolio</h2>
        <p style={{ color: "#a0aec0" }}>✨ Coming Soon! Stay tuned for my latest projects.</p>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem",
          backgroundColor: "#2d3748",
          marginTop: "1rem",
        }}
      >
        <p style={{ color: "#a0aec0" }}>© 2025 Rizki Febriyan. All rights reserved.</p>
      </footer>
    </div>
  );
}
