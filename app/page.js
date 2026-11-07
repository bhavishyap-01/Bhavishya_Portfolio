"use client";

import { useState } from "react";

// Keep portfolio information in arrays so it is easy to update later.
const skills = ["JavaScript", "React", "Next.js", "HTML", "CSS", "Git", "GitHub"];

const projects = [
  {
    number: "01",
    name: "Personal portfolio",
    description: "A responsive website made with Next.js, React, and CSS.",
    technologies: ["Next.js", "React", "CSS"],
    color: "violet",
    githubLink: "https://github.com/",
    demoLink: "#home",
  },
  {
    number: "02",
    name: "Practice project",
    description: "Replace this example with a project you have built.",
    technologies: ["JavaScript", "HTML", "CSS"],
    color: "peach",
    githubLink: "https://github.com/",
    demoLink: "#projects",
  },
];

// The navigation links jump to sections with matching id values below.
function Navigation({ isDark, onThemeChange }) {
  return (
    <header className="site-header">
      <nav className="topbar wrap" aria-label="Main navigation">
        <a className="brand" href="#home">
          <span className="brand-mark">B<span>.</span></span>
          <span className="brand-name">Bhavishya</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeChange}
            aria-label="Change color theme"
          >
            {isDark ? "☼" : "☾"}
          </button>
          <a className="button button-primary" href="#contact">Contact me</a>
        </div>
      </nav>
    </header>
  );
}

// Reusable card: the project details arrive through the project prop.
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.color}`}>
        <span className="project-mark">{project.number}</span>
      </div>

      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className="project-tech">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={project.demoLink}>Live demo ↗</a>
      </div>
    </article>
  );
}

// This form checks the required fields, then creates an email draft.
// Replace the sample email address with your own before publishing.
function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Stop the browser from reloading the page.

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const note = form.elements.message.value;

    const emailSubject = encodeURIComponent(`Portfolio message: ${subject}`);
    const emailBody = encodeURIComponent(`From: ${name} (${email})\n\n${note}`);

    window.location.href =
      `mailto:bhavishyap59@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setMessage("Your email app should open with your message ready to send.");
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" required minLength="2" placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="bhavishyap59@gmail.com" />
        </label>
      </div>

      <label>
        Subject
        <select name="subject" required defaultValue="">
          <option value="" disabled>Select a topic</option>
          <option>Internship opportunity</option>
          <option>Project collaboration</option>
          <option>General hello</option>
        </select>
      </label>

      <label>
        Message
        <textarea name="message" required minLength="10" rows="5" placeholder="Write your message" />
      </label>

      <button className="button button-primary submit-button" type="submit">
        Prepare email ↗
      </button>
      <p className="form-note" aria-live="polite">
        {message || "Your browser checks the form before preparing an email."}
      </p>
    </form>
  );
}

export default function Home() {
  // React remembers this value. Clicking the button changes the theme.
  const [isDark, setIsDark] = useState(true);

  function changeTheme() {
    setIsDark(!isDark);
  }

  return (
    <main data-theme={isDark ? "dark" : "light"}>
      <Navigation isDark={isDark} onThemeChange={changeTheme} />

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>
          <h1>Hi, I’m Bhavishya.<br /><span>Welcome to my portfolio.</span></h1>
          <p className="hero-desc">
            I’m a second-year computer science engineering student learning web
            development and sharing my work here.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my projects ↗</a>
            <a className="button text-link" href="#about">About me</a>
          </div>
        </div>
        <div className="hero-art">
          <img className="profile-picture" src="/profile.jpg" alt="Portrait of Bhavishya" />
        </div>
      </section>

      <section className="section wrap" id="about">
        <p className="eyebrow">01 / ABOUT ME</p>
        <div className="about-grid">
          <h2>Learning computer science and web development.</h2>
          <div className="about-copy">
            <p>I’m studying computer science engineering. I enjoy learning by building useful websites and trying out new ideas.</p>
            <p>My goal is to become a software developer, work with a team, and keep improving through real projects.</p>
            <p className="edit-note">Add your own interests, career goals, and location here.</p>
          </div>
        </div>
      </section>

      <section className="section wrap skills-section" id="skills">
        <p className="eyebrow">02 / SKILLS &amp; TOOLS</p>
        <h2>Technologies I’m learning.</h2>
        <p className="section-intro">This list is easy to change at the top of this file.</p>
        <div className="skill-list">
          {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="section work-section" id="projects">
        <div className="wrap">
          <p className="eyebrow">03 / PROJECTS</p>
          <div className="work-heading">
            <div>
              <h2>Things I’m learning to build.</h2>
              <p>Show what each project does and link to its code and live version.</p>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section wrap" id="experience">
        <p className="eyebrow">04 / EXPERIENCE &amp; EDUCATION</p>
        <h2>My learning journey.</h2>
        <div className="journey-list">
          <article className="journey-card">
            <span className="timeline-year">2024 — Present</span>
            <div><span className="timeline-tag">EDUCATION</span><h3>Computer Science Engineering</h3><p>Add your college, courses, and activities.</p></div>
          </article>
          <article className="journey-card">
            <span className="timeline-year">Add dates</span>
            <div><span className="timeline-tag">EXPERIENCE</span><h3>Add an internship, club, or volunteer role</h3><p>Describe what you did and what you learned.</p></div>
          </article>
        </div>
      </section>

      <section className="section work-section" id="achievements">
        <div className="wrap">
          <p className="eyebrow">05 / ACHIEVEMENTS</p>
          <h2>Milestones along the way.</h2>
          <p className="section-intro">Replace these examples with real courses, awards, or hackathons.</p>
          <div className="achievement-grid">
            <article><span className="achievement-icon">✳</span><h3>Certification</h3><p>Course · Issuer · Year</p></article>
            <article><span className="achievement-icon">✦</span><h3>Award or hackathon</h3><p>Event · Result · Year</p></article>
            <article><span className="achievement-icon">↗</span><h3>Other milestone</h3><p>Add a short description.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap">
          <p className="eyebrow">06 / CONTACT</p>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2>Let’s start a conversation.</h2>
              <p>Have an opportunity or project idea? Send me a message.</p>
              <a className="email-link social-email" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=bhavishyap59%40gmail.com" target="_blank" rel="noreferrer">bhavishyap59@gmail.com ↗</a>
              <div className="social-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner wrap">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">B<span>.</span></span><span className="brand-name">Bhavishya</span></a>
          <span>Built with Next.js and React</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
