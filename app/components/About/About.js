import "./About.css";
import Reveal from "../Animations/Reveal";

export default function AboutSection() {
  return (
    <section className="about-section container" id="about">
      <Reveal className="about-header">
        <h2>About Me</h2>
        <p>GET TO KNOW ME BETTER</p>
      </Reveal>

      <Reveal className="about-content" delay={120}>
        <p>
          I am a passionate Full-Stack Web Developer specializing in the MERN
          stack, with hands-on experience in building modern, scalable, and
          high-performance web applications. My expertise includes React.js and
          Next.js for creating dynamic and optimized frontends, along with
          strong proficiency in TypeScript for writing clean and maintainable
          code. On the backend, I work with Node.js and Express.js to develop
          robust REST APIs and server-side logic, while MongoDB serves as my
          go-to database for efficient data management.
        </p>

        <p>
          I have a solid understanding of state management using Redux and
          focus on crafting responsive, user-friendly interfaces with Tailwind
          CSS. I follow best practices in version control using Git and GitHub,
          ensuring smooth collaboration and project management. I am
          continuously learning and improving my skills to stay updated with
          the latest technologies and deliver high-quality solutions.
        </p>
      </Reveal>
    </section>
  );
}
