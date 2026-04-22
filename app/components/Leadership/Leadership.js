 "use client";

import { useRef, useState } from "react";
import "./Leadership.css";
import Reveal from "../Animations/Reveal";

const leadershipPoints = [
  "Led organization of high-impact events featuring Pakistan's top freelancers.",
  "Managed teams for workshops and seminars focused on freelancing skills and digital careers.",
  "Coordinated with industry professionals and guest speakers to build networking opportunities for students.",
  "Increased student engagement by planning structured training sessions and mentorship programs on digital skills and freelancing platforms.",
];

const leadershipImages = [
  { src: "/leadership/group-1.png", title: "Freelance Force Team" },
  { src: "/leadership/award-1.png", title: "Recognition Ceremony" },
  { src: "/leadership/group-2.png", title: "Student Community Event" },
  { src: "/leadership/award-2.png", title: "Young Leaders Summit Award" },
  { src: "/leadership/award-3.png", title: "Leadership Trophy" },
];

export default function LeadershipSection() {
  const galleryRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);

  const scrollGallery = (direction) => {
    if (!galleryRef.current) {
      return;
    }
    galleryRef.current.scrollBy({
      left: direction * 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="leadership-section container" id="leadership">
      <Reveal className="leadership-header">
        <h2>Leadership & Achievements</h2>
        <p>RECOGNITIONS AND LEADERSHIP ROLES</p>
      </Reveal>

      <Reveal className="leadership-card" delay={120}>
        <article>
          <div className="leadership-badge">Leadership Role</div>
          <h3>President - Freelance Force, University of Central Punjab</h3>
          <span>Dec 2024 - Sept 2025</span>
          <ul>
            {leadershipPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </Reveal>

      <Reveal className="leadership-gallery-wrap" delay={180}>
        <button
          type="button"
          className="gallery-arrow left"
          aria-label="Scroll left"
          onClick={() => scrollGallery(-1)}
        >
          &#8249;
        </button>

        <div className="leadership-gallery" ref={galleryRef}>
          {leadershipImages.map((image) => (
            <figure
              className="leadership-gallery-item"
              key={image.src}
              onClick={() => setActiveImage(image)}
            >
              <img src={image.src} alt={image.title} />
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="gallery-arrow right"
          aria-label="Scroll right"
          onClick={() => scrollGallery(1)}
        >
          &#8250;
        </button>
      </Reveal>

      {activeImage && (
        <div
          className="leadership-lightbox"
          onClick={() => setActiveImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Escape" || event.key === "Enter") {
              setActiveImage(null);
            }
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image preview"
          >
            ×
          </button>
          <img
            className="lightbox-image"
            src={activeImage.src}
            alt={activeImage.title}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
