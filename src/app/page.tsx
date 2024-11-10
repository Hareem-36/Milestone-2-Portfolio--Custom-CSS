"use client"; // Add this line to mark the component as a client component

import Image from "next/image";

import Link from "next/link";
import image1 from "../app/images/Image.jpg";
import image2 from "../app/images/hmtll.png";
import image3 from "../app/images/css 1.png";
import image4 from "../app/images/js.png";
import image5 from "../app/images/next1.png";
import image6 from "../app/images/ts.png";
import image7 from "../app/images/react.png";
import image8 from "../app/images/Seerat1.jpeg";
import image9 from "../app/images/builder1.jpeg";
import image10 from "../app/images/blog1.jpeg";


import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu open/close state
  };

  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can call your backend API to send the message
    console.log(formData); // For now, log the form data to console
    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main className="main-background">

  
  
      {/* Navbar */}
      <nav className="navbar">
      <div className="navbar-brand">HareemN.</div>
      <div className="navbar-toggle md:hidden">
        <button onClick={toggleMenu} className="navbar-toggle">
          {isMenuOpen ? (
            <span>&times;</span> // Close icon
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`navbar-links ${
          isMenuOpen ? "navbar-links-open" : "navbar-links-closed"
        }`}
      >
        {["About", "Skills", "Projects", "Contact"].map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="navbar-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>

      {/* Hero Section */}
      <section id="about">
      {/* Left Side */}
      <div className="about-text">
        <h1 className="about-heading">Hi, I’m Hareem Jaweid</h1>
        <p className="about-description">
          I'm a passionate Front End Developer currently honing my skills at
          GIAIC. On the front-end, I've mastered Next.js and Tailwind CSS,
          creating responsive and dynamic user interfaces. As I continue my
          journey, I’m diving deeper into back-end technologies to build
          comprehensive, full-stack applications. Stay tuned as I continue to
          expand my skill set and bring innovative ideas to life!
        </p>
        <br></br><br></br><a
          href="https://photos.google.com/photo/AF1QipOmJH2RIdgEl0gLqsF11hrgeNak0hpPHsWRo1UT"
          download
          className="resume-button"
        >
          Download Resume
        </a>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <Image
          width={300}
          height={300}
          className="about-image"
          src={image1}
          alt="Abstract background"
        />
      </div>
    </section>

      {/* Skills Section */}
      <section id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {[
          { src: image2, alt: "HTML" },
          { src: image3, alt: "CSS" },
          { src: image4, alt: "JavaScript" },
          { src: image5, alt: "Next.js" },
          { src: image6, alt: "TypeScript" },
          { src: image7, alt: "React" },
        ].map((skill) => (
          <div className="skill-item" key={skill.alt}>
            <Image src={skill.src} alt={skill.alt} width={60} height={60} />
            <p className="skill-name">{skill.alt}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Projects Section */}
     

      <section id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {[
          {
            src: image8,
            title: "Project 1",
            desc: "Seerat-un-Nabi Website (HTML CSS)",
            link: "https://html-css-website-seerat.vercel.app/"
          },
          {
            src: image10,
            title: "Project 2",
            desc: "Blog Website (Next.js)",
            link: "https://blog-website-nextjs-flax.vercel.app"
          },
          {
            src: image9,
            title: "Project 3",
            desc: "Builder Construction Website (HTML CSS)",
            link: "https://builder-website-html-css.vercel.app/"
          },
        ].map((project) => (
          <div key={project.title} className="project-card">
            <center>
              <Image src={project.src} width={400} height={200} className="project-image" alt={project.title} />
            </center>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <Link href={project.link} passHref>
              <center>
                <button className="view-project-button">View Project</button>
              </center>
            </Link>
          </div>
        ))}
      </div>
    </section>


      <br />
      <br />


      
        {/* Contact Form */}
        <section id="contact" className="contact-section">
  <h2 className="contact-heading">Contact Me</h2>
  <form onSubmit={handleSubmit} className="contact-form">
    <div className="mb-6">
      <label htmlFor="name" className="contact-label">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="contact-input"
        placeholder="Your Name"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="contact-label">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="contact-input"
        placeholder="Your Email"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="subject" className="contact-label">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="contact-input"
        placeholder="Subject"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="contact-label">Message</label>
      <textarea
        id="message"
        name="message"
        rows={4} 
        value={formData.message}
        onChange={handleChange}
        className="contact-textarea"
        placeholder="Your Message"
        required
      />
    </div>
    <button type="submit" className="contact-submit-btn">
      Send Message
    </button>
  </form>
</section>
          <footer className="footer-background">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
    <div>
      <h3 className="footer-heading">Why You Should Hire Me:</h3>
      <p className="footer-text">
        I’m dedicated to delivering tailored, high-quality solutions with a focus on clear communication and collaboration.
      </p>
    </div>

    
    <div>
      <h3 className="footer-heading">Email Address</h3>
      <p className="footer-text mb-4">Email: hareemjaweid@example.com</p>
      <h3 className="footer-heading">Phone Number</h3>
      <p className="footer-text mb-4">+9203340001112</p>
    </div>

   
    <div>
      <h3 className="footer-heading">Socials Links</h3>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/hareem-jaweid-4ab2102bb/" target="_blank">LinkedIn</a>
        <a href="https://www.facebook.com/share/wuEzeX2f8oR9pjrS/" target="_blank">Facebook</a>
        <a href="https://twitter.com/hareem_jaweid" target="_blank">Twitter</a>
      </div>
    </div>
  </div>

 
  <div className="footer-copyright">
    © <script>document.write(new Date().getFullYear());</script> Hareem. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}