"use client";

import { useEffect, useState } from "react";
import "./Projects.css";
import Reveal from "../Animations/Reveal";

const projects = [
  {
    title: "Ecommerce Website",
    description:
      "A full-stack ecommerce platform with secure authentication, product browsing, cart management, order flow, and admin product controls.",
    tags: ["MERN Stack", "Next.js", "JWT Auth", "MongoDB"],
    accent: "accent-one",
    image: "/projects/ecommerce/ecommerce-cover.png",
    slug: "ecommerce",
  },
  {
    title: "Connectify Social Website",
    description:
      "A social networking web app with user profiles, posts, likes/comments, follow system, and a responsive feed designed for smooth engagement.",
    tags: ["React.js", "Node.js", "Express.js", "REST API"],
    accent: "accent-two",
    image: "/projects/connectify/connectify-cover.png",
    slug: "connectify",
  },
];

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  useEffect(() => {
    if (!openProject && !activeGalleryImage) {
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (activeGalleryImage) {
          setActiveGalleryImage(null);
        } else {
          setOpenProject(null);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openProject, activeGalleryImage]);

  return (
    <section className="projects-section container" id="projects">
      <Reveal className="projects-header">
        <h2>Featured Projects</h2>
        <p>SHOWCASING MY WORK</p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal className="project-card" key={project.title} delay={index * 100}>
            <article>
              <div
                className={`project-visual ${project.accent} ${
                  project.slug === "ecommerce" || project.slug === "connectify"
                    ? "project-visual-full"
                    : ""
                }`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className={
                      project.slug === "ecommerce" || project.slug === "connectify"
                        ? "project-image-full"
                        : ""
                    }
                  />
                ) : (
                  <span>{project.title}</span>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {(project.slug === "ecommerce" || project.slug === "connectify") && (
                  <button
                    type="button"
                    className="project-read-more"
                    onClick={() => setOpenProject(project.slug)}
                  >
                    Read More
                  </button>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {openProject === "ecommerce" && (
        <div className="project-modal-overlay" onClick={() => setOpenProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setOpenProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <h3>🛒 E-commerce Web Application</h3>
            <p>
              A full-featured E-commerce web application built with modern
              technologies, designed to provide a seamless shopping experience
              for users and powerful management tools for administrators. The
              platform includes separate User Panel and Admin Panel, ensuring
              efficient handling of products, orders, and users.
            </p>
            <p>
              The system allows users to browse products by categories, manage
              their profiles, and place orders using multiple payment methods.
              It also includes a real-time chat system enabling direct
              communication between users and the admin for support and queries.
            </p>
            <p>
              On the admin side, the platform provides complete control over the
              system, including product management, user management, order
              tracking, and communication features. The application is built with
              a scalable architecture using Next.js with TypeScript for the
              frontend and a robust backend API for handling data operations.
            </p>

            <h4>⚙️ Technical Stack</h4>
            <div className="project-modal-tags">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB / PostgreSQL",
                "REST API",
                "Socket.IO (for real-time chat)",
                "Stripe (for online payments)",
                "Tailwind CSS / Bootstrap",
                "JavaScript (ES6+)",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <h4>🚀 Key Features</h4>
            <h5>👤 User Panel</h5>
            <ul className="project-modal-list">
              <li>User authentication (Register / Login)</li>
              <li>
                Personalized dashboard showing:
                <ul className="project-modal-sublist">
                  <li>Total products</li>
                  <li>Categories</li>
                  <li>Order count</li>
                </ul>
              </li>
              <li>Browse products by category</li>
              <li>View detailed product pages</li>
              <li>
                Place orders with:
                <ul className="project-modal-sublist">
                  <li>Cash on Delivery</li>
                  <li>Online Payment via Stripe</li>
                </ul>
              </li>
              <li>User profile management (update personal info)</li>
              <li>Real-time chat with admin via chatbox</li>
            </ul>

            <h5>🛠️ Admin Panel</h5>
            <ul className="project-modal-list">
              <li>View and manage all users</li>
              <li>Add, update, and delete products</li>
              <li>Manage product categories</li>
              <li>View and manage all orders</li>
              <li>Real-time chat with users</li>
              <li>Dashboard with system insights</li>
            </ul>

            <h4>🏆 Key Achievements</h4>
            <ul className="project-modal-list">
              <li>Developed a complete full-stack E-commerce system with separate user and admin panels</li>
              <li>Implemented secure authentication and authorization system</li>
              <li>Integrated Stripe payment gateway for online transactions</li>
              <li>Built real-time chat system using Socket.IO</li>
              <li>Designed a responsive and modern UI using Next.js and TypeScript</li>
              <li>Created scalable backend APIs for handling products, users, and orders</li>
              <li>Implemented order tracking and management system</li>
              <li>Built dynamic dashboards for both users and admin</li>
              <li>Optimized performance for smooth user experience</li>
            </ul>

            <h4>Project Gallery</h4>
            <div className="project-modal-gallery">
              {[
                ["w1.png", "Workflow snapshot 1"],
                ["w2.png", "Workflow snapshot 2"],
                ["user-login.png", "User login screen"],
                ["chatbox.png", "Real-time chat interface"],
                ["notification.png", "Notification panel"],
                ["user-dashboard.png", "User dashboard"],
                ["user-categories.png", "User categories"],
                ["user-product.png", "User product listing"],
                ["user-cart.png", "User cart"],
                ["user-order-history.png", "User order history"],
                ["user-account-setting.png", "User account settings"],
                ["admin-dashboard.png", "Admin dashboard"],
                ["admin-category.png", "Admin categories management"],
                ["admin-product.png", "Admin products management"],
                ["admin-order.png", "Admin orders management"],
                ["admin-users.png", "Admin users management"],
              ].map(([fileName, caption]) => (
                <figure key={fileName}>
                  <img
                    src={`/projects/ecommerce/${fileName}`}
                    alt={caption}
                    loading="lazy"
                    onClick={() =>
                      setActiveGalleryImage({
                        src: `/projects/ecommerce/${fileName}`,
                        caption,
                      })
                    }
                  />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}

      {openProject === "connectify" && (
        <div className="project-modal-overlay" onClick={() => setOpenProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setOpenProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <h3>🌐 Connectify - Social Media Platform</h3>
            <p>
              Connectify is a modern social media web application inspired by platforms like
              Facebook, designed to enable users to connect, share content, and interact in
              real-time. The platform provides a dynamic and engaging user experience with
              features such as posting, reactions, commenting, and live updates using real-time
              technologies.
            </p>
            <p>
              Users can register and log in using a unique email or username, ensuring secure and
              distinct identities. The home feed displays posts from other users, where individuals
              can interact through a multi-reaction system and comments. The platform supports
              flexible content sharing, allowing users to post text, images, or both.
            </p>
            <p>
              A key highlight of Connectify is its real-time interactivity, where actions like
              likes, comments, and updates are instantly reflected across multiple sessions using
              socket-based communication.
            </p>

            <h4>⚙️ Technical Stack</h4>
            <div className="project-modal-tags">
              {[
                "Next.js",
                "React",
                "Redux",
                "Tailwind CSS",
                "Bootstrap",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Socket.IO (real-time communication)",
                "React Toastify (notifications)",
                "JavaScript (ES6+)",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <h4>🚀 Key Features</h4>
            <h5>👤 User Features</h5>
            <ul className="project-modal-list">
              <li>Secure authentication using unique email and username</li>
              <li>Personalized home feed displaying posts from other users</li>
              <li>
                Create posts with:
                <ul className="project-modal-sublist">
                  <li>Text only</li>
                  <li>Image only</li>
                  <li>Text + Image</li>
                </ul>
              </li>
              <li>View all personal posts in My Posts section</li>
              <li>Interactive commenting system on posts</li>
            </ul>

            <h5>❤️ Advanced Reaction System</h5>
            <ul className="project-modal-list">
              <li>Three reaction types: Heart, Like, Dislike</li>
              <li>View total reactions per post</li>
              <li>See how many users selected each reaction type</li>
            </ul>

            <h5>⚡ Real-Time Functionality</h5>
            <ul className="project-modal-list">
              <li>Instant updates for likes, reactions, comments, and new posts</li>
              <li>Multi-tab synchronization using Socket.IO</li>
              <li>No need for manual page refresh</li>
            </ul>

            <h5>🔔 User Experience Enhancements</h5>
            <ul className="project-modal-list">
              <li>Toast notifications using React Toastify</li>
              <li>Responsive UI with Tailwind CSS and Bootstrap</li>
              <li>Smooth and modern interface design</li>
            </ul>

            <h4>🏆 Key Achievements</h4>
            <ul className="project-modal-list">
              <li>Built a fully functional social media platform with real-time interaction</li>
              <li>Implemented a custom multi-reaction system (heart, like, dislike)</li>
              <li>Developed real-time updates using Socket.IO across multiple sessions</li>
              <li>Designed a flexible post system supporting text and media content</li>
              <li>Ensured unique user identity system (email + username validation)</li>
              <li>Integrated Redux for efficient state management</li>
              <li>Created a responsive and modern UI using Tailwind and Bootstrap</li>
              <li>Enhanced UX with instant notifications and smooth interactions</li>
            </ul>

            <h4>Project Gallery</h4>
            <div className="project-modal-gallery">
              {[
                ["home.png", "Home feed"],
                ["create-post.png", "Create post modal"],
                ["comments.png", "Comments and reactions"],
                ["profile.png", "Profile modal"],
                ["mypost.png", "My posts page"],
                ["login.png", "Login page"],
                ["signup.png", "Signup page"],
              ].map(([fileName, caption]) => (
                <figure key={fileName}>
                  <img
                    src={`/projects/connectify/${fileName}`}
                    alt={caption}
                    loading="lazy"
                    onClick={() =>
                      setActiveGalleryImage({
                        src: `/projects/connectify/${fileName}`,
                        caption,
                      })
                    }
                  />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeGalleryImage && (
        <div
          className="project-image-lightbox"
          onClick={() => setActiveGalleryImage(null)}
        >
          <button
            type="button"
            className="project-image-lightbox-close"
            onClick={() => setActiveGalleryImage(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <img
            src={activeGalleryImage.src}
            alt={activeGalleryImage.caption}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
