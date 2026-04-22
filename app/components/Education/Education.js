import "./Education.css";
import Reveal from "../Animations/Reveal";

const educationData = [
  {
    degree: "BSCS (Bachelor of Computer Science)",
    institute: "University of Central Punjab",
    duration: "2021 - 2025",
    details: ["Final Year Project: Explore Asia Tourism Website"],
  },
  {
    degree: "ICS (Intermediate of Computer Science)",
    institute: "Unique Group of Colleges",
    duration: "2019 - 2021",
    details: [],
  },
];

export default function EducationSection() {
  return (
    <section className="education-section container" id="education">
      <Reveal className="education-header">
        <h2>Education</h2>
        <p>ACADEMIC BACKGROUND</p>
      </Reveal>

      <div className="education-list">
        {educationData.map((item, index) => (
          <Reveal
            className="education-card"
            key={`${item.degree}-${item.institute}`}
            delay={index * 120}
          >
            <article>
              <div className="education-icon">
                <i className="bi bi-mortarboard-fill" />
              </div>
              <div className="education-content">
                <h3>{item.degree}</h3>
                <h4>{item.institute}</h4>
                <span>{item.duration}</span>
                {item.details.length > 0 && (
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
