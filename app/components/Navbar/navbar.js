"use client";

import { useEffect, useState } from "react";
import './navbar.css'



export default function Navbar()
{
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  const savedTheme = window.localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

  setIsDarkMode(shouldUseDark);
  document.body.classList.toggle("dark-theme", shouldUseDark);
}, []);

const handleThemeToggle = () => {
  setIsDarkMode((prev) => {
    const next = !prev;
    document.body.classList.toggle("dark-theme", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    return next;
  });
};

const closeMenu = () => setIsMenuOpen(false);

return (
<nav className={`main container-fluid ${isScrolled ? 'scrolled' : ''}`}>
  <div className='nav-inner'>
    <div className='brand'>Bilal Tariq</div>

    <button
      className='menu-toggle'
      aria-label='Toggle menu'
      aria-expanded={isMenuOpen}
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      {isMenuOpen ? '✕' : '☰'}
    </button>

    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
      <li><a href='#home' onClick={closeMenu}>Home</a></li>
      <li><a href='#about' onClick={closeMenu}>About</a></li>
      <li><a href='#skills' onClick={closeMenu}>Skills</a></li>
      <li><a href='#projects' onClick={closeMenu}>Projects</a></li>
      <li><a href='#experience' onClick={closeMenu}>Experience</a></li>
      <li><a href='#leadership' onClick={closeMenu}>Leadership</a></li>
      <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
    </ul>

    <button
      className={`theme-toggle ${isDarkMode ? 'active' : ''}`}
      aria-label='Toggle theme'
      aria-pressed={isDarkMode}
      onClick={handleThemeToggle}
    >
      <i className={`bi ${isDarkMode ? "bi-sun-fill" : "bi-moon-stars-fill"}`} />
    </button>
  </div>
</nav>


)

}