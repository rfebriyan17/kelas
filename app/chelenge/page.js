"use client";

import { useState } from "react";

export default function Page() {
  const [profileImage, setProfileImage] = useState("riz.jpg");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleConfirmImage = () => {
    if (selectedImage) {
      setProfileImage(selectedImage);
      setSelectedImage(null);
    }
  };

  return (
    <div>
      <style>
        {`
          * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
          body { font-family: 'Poppins', sans-serif; background-color: #0a192f; color: #ccd6f6; text-align: center; padding-top: 80px; }
          nav { background: rgba(10, 25, 47, 0.9); padding: 15px; position: fixed; top: 0; width: 100%; display: flex; justify-content: center; gap: 20px; z-index: 1000; }
          nav a { color: #64ffda; font-size: 18px; text-decoration: none; padding: 10px 15px; transition: 0.3s ease-in-out; }
          nav a:hover { color: #fff; background: #64ffda; border-radius: 5px; }
          .container { max-width: 900px; margin: auto; padding: 20px; }
          section { padding: 60px 20px; margin-bottom: 50px; background: rgba(255, 255, 255, 0.05); border-radius: 15px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); transition: transform 0.3s ease-in-out; }
          section:hover { transform: scale(1.02); }
          h2 { font-size: 2.5em; color: #64ffda; margin-bottom: 15px; }
          .profile { display: flex; flex-direction: column; align-items: center; gap: 15px; }
          .profile img { width: 180px; height: 180px; border-radius: 50%; border: 4px solid #64ffda; object-fit: cover; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); }
          .profile input { margin-top: 10px; padding: 8px; border-radius: 5px; border: 1px solid #64ffda; background: transparent; color: #ccd6f6; cursor: pointer; }
          .btn-ok { margin-top: 10px; padding: 8px 15px; background: #64ffda; color: #0a192f; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; }
          .btn-ok:hover { background: #52e0c4; }
          ul { list-style-type: none; padding: 0; }
          ul li { font-size: 18px; margin-bottom: 10px; }
        `}
      </style>

      {/* Navbar */}
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="container">
        {/* About Section */}
        <section id="about">
          <div className="profile">
            <img src={profileImage} alt="Rizki Febriyan" />
            <h2>Rizki Febriyan</h2>
            <p>Software Engineer | Web Developer | Tech Enthusiast</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
              <button className="btn-ok" onClick={handleConfirmImage}>OK</button>
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>🚀 JavaScript (React, Next.js)</li>
            <li>🎨 Tailwind CSS & UI/UX Design</li>
            <li>📱 Mobile Development (Flutter, React Native)</li>
            <li>⚙️ Backend (Node.js, Express, MongoDB)</li>
            <li>🔍 SEO & Performance Optimization</li>
          </ul>
        </section>

        {/* Services Section */}
        <section id="services">
          <h2>Services</h2>
          <ul>
            <li>🖥️ Web Development</li>
            <li>📱 Mobile App Development</li>
            <li>🎨 UI/UX Design</li>
            <li>🛠️ Website Optimization</li>
            <li>🔧 API Development</li>
          </ul>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <h2>Portfolio</h2>
          <p>✨ Coming Soon! Stay tuned for my latest projects.</p>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact</h2>
          <p>📧 Email: rizki@example.com</p>
          <p>📍 Location: Indonesia</p>
          <p>💼 LinkedIn: <a href="https://linkedin.com/in/rizki" target="_blank" style={{ color: "#64ffda" }}>linkedin.com/in/rizki</a></p>
        </section>
      </div>
    </div>
  );
}
