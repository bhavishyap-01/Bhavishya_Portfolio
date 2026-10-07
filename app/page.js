function Navbar() {
  return (
    <nav className="topbar wrap">
      <a className="brand" href="#home">
        <span className="brand-mark">B<span>.</span></span>
        <span className="brand-name">Bhavishya</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a className="button button-primary" href="#contact">
        Contact me
      </a>
    </nav>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>

          <h1>
            Hi, I’m Bhavishya.
            <br />
            <span>Welcome to my portfolio.</span>
          </h1>

          <p className="hero-desc">
            I’m a second-year computer science engineering student. I’m learning
            web development and sharing some of my work here.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my projects
            </a>
            <a className="button text-link" href="#about">
              About me
            </a>
          </div>
        </div>

        <div className="hero-art">
          <img
            className="profile-picture"
            src="/profile.jpg"
            alt="Bhavishya"
          />
        </div>
      </section>

      <section className="section wrap about-section" id="about">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Learning computer science and web development.</h2>
        <p className="hero-desc">
          I’m currently studying computer science engineering. This website is
          where I can share what I learn and the projects I make.
        </p>
      </section>

      <section className="section work-section" id="projects">
        <div className="wrap">
          <p className="eyebrow">MY PROJECTS</p>
          <h2>Things I’m learning to build.</h2>

          <div className="project-grid">
            <div className="project-card">
              <div className="project-art violet">
                <span className="project-mark">01</span>
              </div>
              <h3>My portfolio</h3>
              <p>A website made with HTML, CSS, and Next.js.</p>
            </div>

            <div className="project-card">
              <div className="project-art peach">
                <span className="project-mark">02</span>
              </div>
              <h3>Practice project</h3>
              <p>Add a short description of another project here.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Thanks for visiting!</h2>
        <a className="button button-primary" href="mailto:your-email@example.com">
          Email me
        </a>
      </section>
    </main>
  );
}
