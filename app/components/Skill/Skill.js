import "./Skill.css";
import Reveal from "../Animations/Reveal";

const skillGroups = [
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "Authentication (JWT, Sessions)",
      "Middleware & Routing",
      "MVC Architecture",
    ],
  },
  {
    title: "Database Management",
    items: ["MongoDB", "Mongoose", "Data Modeling", "Pipelines"],
  },
  {
    title: "State Management & Tools",
    items: [
      "Redux / Redux Toolkit",
      "Axios / Fetch API",
      "Form Handling & Validation",
    ],
  },
  {
    title: "Deployment & Version Control",
    items: [
      "Git & GitHub",
      "Vercel / Netlify",
      "Environment Configuration",
      "CI/CD Basics",
    ],
  },
  {
    title: "Other Skills",
    items: [
      "API Integration",
      "Performance Optimization",
      "Debugging & Problem Solving",
      "Clean Code Practices",
    ],
  },
];

export default function SkillSection() {
  return (
    <section className="skill-section container" id="skills">
      <Reveal className="skill-header">
        <h2>Skills & Expertise</h2>
        <p>TECHNICAL COMPETENCIES</p>
      </Reveal>

      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <Reveal className="skill-card" key={group.title} delay={index * 90}>
            <article>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
