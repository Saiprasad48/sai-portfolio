import { additionalProjects, education, featuredProjects, profile, skills } from './data.js';

function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" aria-label="Home">
          <span className="brand-mark">SK</span>
          <span>Sai Prasad</span>
        </a>
        <div className="nav-links" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero container section-pad">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1>{profile.name}</h1>
        <h2>{profile.headline}</h2>
        <p className="hero-summary">{profile.summary}</p>
        <p className="availability">{profile.availability}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View Projects</a>
          <a className="button" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
          <a className="button" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="hero-card" aria-label="Quick profile card">
        <div className="avatar">SK</div>
        <div>
          <h3>{profile.shortName}</h3>
          <p>{profile.location}</p>
        </div>
        <div className="mini-stats">
          <span><strong>9+</strong> Projects</span>
          <span><strong>ML</strong> Engineering</span>
          <span><strong>Data</strong> Systems</span>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="container section-pad">
      <SectionTitle
        eyebrow="Tech Stack"
        title="Tools I use to build practical systems"
        subtitle="A mix of ML, backend, data, search, full-stack, and deployment tools."
      />
      <div className="skill-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.group}>
            <h3>{group.group}</h3>
            <div className="chips">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="container section-pad">
      <SectionTitle
        eyebrow="Selected Work"
        title="Projects built around real use cases"
        subtitle="Each project is written to show the problem, implementation, and practical outcome clearly."
      />
      <div className="project-grid">
        {featuredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.period}</span>
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="impact">{project.impact}</p>
            <div className="chips compact">
              {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </article>
        ))}
      </div>
      <div className="more-projects">
        <h3>Additional Projects</h3>
        <div className="chips">
          {additionalProjects.map((project) => <span key={project}>{project}</span>)}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="container section-pad">
      <SectionTitle
        eyebrow="Education"
        title="Academic background"
      />
      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-item" key={item.school}>
            <h3>{item.school}</h3>
            <p>{item.degree}</p>
            <span>{item.meta}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container section-pad contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s connect"
        subtitle="Open to full-time opportunities and project conversations."
      />
      <div className="contact-card">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.resume} target="_blank" rel="noreferrer">Download Resume</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <p>Built by Sai Prasad Reddy Kukudala.</p>
      </footer>
    </>
  );
}

export default App;
