import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

const navigation = [
  { label: "Abot", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M7 5H5.8A1.8 1.8 0 0 0 4 6.8v7.4A1.8 1.8 0 0 0 5.8 16h7.4a1.8 1.8 0 0 0 1.8-1.8V13M11 4h5v5M9 11l7-7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label={`${portfolio.name}, home`}>
            <span>{portfolio.initials}</span>
            {portfolio.name}
          </a>
          <nav aria-label="Primary navigation">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="nav-contact" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Materials · Semiconductors · Manufacturing</p>
              <h1 id="hero-title">
                Building reliable processes from <span>materials up.</span>
              </h1>
              <p className="hero-description">{portfolio.tagline}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View projects <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact me
                </a>
              </div>
            </div>

            <aside className="hero-card" aria-label="Professional summary">
              <div className="monogram" aria-hidden="true">
                {portfolio.initials}
              </div>
              <div>
                <p className="hero-card-name">{portfolio.name}</p>
                <p>{portfolio.role}</p>
              </div>
              <div className="status">
                <span aria-hidden="true" />
                {portfolio.availability}
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-muted" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <SectionHeading id="about-title" eyebrow="About" title="Curious about the why. Focused on the how." />
            <div className="about-copy">
              <p>{portfolio.biography}</p>
              <dl className="at-a-glance">
                <div>
                  <dt>Focus</dt>
                  <dd>Semiconductor & materials processing</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>Experiment, analyze, improve</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <SectionHeading
              id="experience-title"
              eyebrow="Experience"
              title="Engineering across research and manufacturing."
              description="Hands-on work connecting materials behavior, process data, and practical improvements."
            />
            <div className="timeline">
              {portfolio.experiences.map((experience) => (
                <article className="timeline-item" key={`${experience.organization}-${experience.role}`}>
                  <p className="timeline-date">{experience.dates}</p>
                  <div className="timeline-content">
                    <h3>{experience.role}</h3>
                    <p className="organization">{experience.organization}</p>
                    <p>{experience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <SectionHeading
              id="projects-title"
              eyebrow="Selected projects"
              title="Technical work, clearly explained."
              description="A selection of projects in electrochemistry, advanced materials, and semiconductor fabrication."
            />
            <div className="project-grid">
              {portfolio.projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <p className="project-number">0{index + 1}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label={`Technologies used for ${project.name}`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-title">
          <div className="container">
            <SectionHeading
              id="education-title"
              eyebrow="Education"
              title="A foundation in materials. A focus on semiconductors."
            />
            <div className="education-list">
              {portfolio.education.map((item) => (
                <article key={item.school}>
                  <div>
                    <p className="degree">{item.degree}</p>
                    <h3>{item.school}</h3>
                  </div>
                  {"dates" in item ? <p className="education-date">{item.dates}</p> : null}
                  <p>{item.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills" aria-labelledby="skills-title">
          <div className="container skills-layout">
            <SectionHeading
              id="skills-title"
              eyebrow="Skills"
              title="Tools for understanding and improving processes."
            />
            <div className="skills-grid">
              {portfolio.skills.map((group) => (
                <article key={group.category}>
                  <h3>{group.category}</h3>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 id="contact-title">Let&apos;s build something that works.</h2>
              <p>
                I&apos;m interested in thoughtful engineering work across materials, semiconductor processing,
                manufacturing, and quality.
              </p>
            </div>
            <div className="contact-links">
              <a className="button button-light" href={`mailto:${portfolio.email}`}>
                {portfolio.email} <ArrowIcon />
              </a>
              <div className="social-links">
                {portfolio.socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label} <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {portfolio.name}</p>
          <p>Built with Next.js and curiosity.</p>
        </div>
      </footer>
    </>
  );
}
