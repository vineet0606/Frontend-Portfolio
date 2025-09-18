
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  // Typewriter Effect
  useEffect(() => {
    const roles = [
      "Frontend Developer",
      "React Enthusiast",
      "UI/UX Designer"
    ];
    let index = 0;
    const typingElement = document.querySelector(".typing-text");

    function typeRole() {
      if (typingElement) {
        typingElement.textContent = roles[index];
      }
      index = (index + 1) % roles.length;
    }

    typeRole();
    const interval = setInterval(typeRole, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("✅ Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <h1 className="logo">My Portfolio</h1>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </nav>
      </header>

      {/* Home */}
      <section id="home" className="section home">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h2>Hello, I'm <span className="highlight">Your Name</span></h2>
        <h3 className="typewriter">
          <span className="typing-text"></span>
        </h3>
        <p>A Frontend Developer passionate about web design</p>
        <a href="#projects" className="btn">View My Work</a>
        <a href="/resume.pdf" className="btn" download>Download Resume</a>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>
          I am skilled in React, HTML, CSS, and JavaScript. 
          I enjoy building modern, responsive web applications with clean UI/UX.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Weather App</h3>
            <p>A React app that fetches live weather data using API.</p>
          </div>
          <div className="project-card">
            <h3>To-Do List</h3>
            <p>Task manager built with React state and localStorage.</p>
          </div>
          <div className="project-card">
            <h3>Portfolio</h3>
            <p>Personal website built with React and responsive design.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
        <p>{msg}</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 My Portfolio | Built with ❤️ using React</p>
      </footer>
    </>
  );
}

export default App;
