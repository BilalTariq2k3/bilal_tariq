import "./Experiance.css";
import Reveal from "../Animations/Reveal";

const experienceData = [
  {
    role: "MERN Stack Developer",
    company: "Arhamsoft Software House",
    duration: "Dec 2025 - Present",
    points: [
      "Built full-stack applications using MERN and Next.js.",
      "Designed secure RESTful APIs with JWT authentication.",
      "Optimized database queries and performance.",
      "Collaborated in agile development and deployments.",
    ],
  },
  {
    role: "Backend Developer Internship",
    company: "ML Bench Software House",
    duration: "Aug 2024 - Sept 2024",
    points: [
      "Developed backend systems using PHP, Laravel, MySQL.",
      "Designed RESTful APIs for system integration.",
      "Worked in agile team to improve performance.",
    ],
  },
];

export default function ExperianceSection() {
  return (
    <section className="experiance-section container" id="experience">
      <Reveal className="experiance-header">
        <h2>Professional Experience</h2>
        <p>MY CAREER JOURNEY</p>
      </Reveal>

      <div className="experiance-list">
        {experienceData.map((item, index) => (
          <Reveal
            className="experiance-card"
            key={`${item.role}-${item.company}`}
            delay={index * 120}
          >
            <article>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <span>{item.duration}</span>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
