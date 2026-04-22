import "./Home.css";
import Reveal from "../Animations/Reveal";

export default function HomeSection() {
  return (
    <section className="hero-section container" id="home">
      <Reveal className="hero-content" direction="left">
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-name">Bilal Tariq</h1>
        <h2 className="hero-role">MERN Stack Developer</h2>
        <p className="hero-description">
          MERN Stack Developer focused on building responsive, high-performance
          web applications with clean architecture and modern user experiences.
        </p>

        <div className="hero-actions">
          <a
            className="btn-primary"
            href="/resume/Bilal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-file-earmark-person-fill" /> View Resume
          </a>
          <a
            className="btn-secondary"
            href="#contact"
          >
            <i className="bi bi-envelope-fill" /> Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/bilal-t-336001388" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin" />
          </a>
          <a href="https://github.com/BilalTariq2k3" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="bi bi-github" />
          </a>
          <a href="mailto:bilaltariq@example.com" target="_blank" rel="noreferrer" aria-label="Email">
            <i className="bi bi-envelope-fill" />
          </a>
        </div>
      </Reveal>

      <Reveal className="hero-image-wrap" direction="right" delay={120}>
        <img
          className="hero-image"
          src="https://github.com/BilalTariq2k3.png"
          alt="Bilal Tariq"
        />
      </Reveal>
    </section>
  );
}
