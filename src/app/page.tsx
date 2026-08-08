import { ProjectStudy } from "@/components/project-study";
import { SectionIntro } from "@/components/section-intro";
import { portfolio } from "@/data/portfolio";

const navigation = [
  { number: "01", label: "Profile", href: "#profile" },
  { number: "02", label: "Selected work", href: "#work" },
  { number: "03", label: "Experience", href: "#experience" },
  { number: "04", label: "Capabilities", href: "#capabilities" },
  { number: "05", label: "Contact", href: "#contact" },
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
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="mobile-header">
        <a className="mobile-brand" href="#top" aria-label={`${portfolio.name}, home`}>
          <span>{portfolio.initials}</span>
          <span>{portfolio.name}</span>
        </a>
        <a className="mobile-resume" href={portfolio.resumeHref}>Résumé</a>
      </header>

      <aside className="site-rail" aria-label="Site identity and navigation">
        <div>
          <a className="rail-brand" href="#top" aria-label={`${portfolio.name}, home`}>
            <span className="brand-mark">{portfolio.initials}</span>
            <span>{portfolio.name}</span>
          </a>
          <p className="rail-role">{portfolio.role}</p>
        </div>

        <nav className="rail-nav" aria-label="Primary navigation">
          <ol>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  <span>{item.number}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="rail-footer">
          <p>{portfolio.descriptor}</p>
          <a href={portfolio.resumeHref}>View résumé <ArrowIcon /></a>
        </div>
      </aside>

      <div className="mobile-index" aria-label="Section navigation">
        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </div>

      <main id="main-content" className="site-main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-heading">
            <p className="eyebrow">{portfolio.descriptor}</p>
            <h1 id="hero-title">{portfolio.headline}</h1>
          </div>

          <div className="hero-lower">
            <p className="hero-introduction">{portfolio.introduction}</p>
            <div className="hero-actions">
              <a className="text-link text-link-accent" href="#work">Explore selected work <ArrowIcon /></a>
              <a className="text-link" href={`mailto:${portfolio.email}`}>Start a conversation <ArrowIcon /></a>
            </div>
          </div>

          <div className="material-study" aria-hidden="true">
            <div className="study-meta study-meta-a">Specimen DS—26</div>
            <div className="study-meta study-meta-b">Section / 04 μm</div>
            <div className="material-layer material-layer-a"><span>01</span></div>
            <div className="material-layer material-layer-b"><span>02</span></div>
            <div className="material-layer material-layer-c"><span>03</span></div>
            <div className="material-scale"><span /> 20 μm</div>
          </div>
        </section>

        <section className="page-section profile-section" id="profile" aria-labelledby="profile-title">
          <SectionIntro
            id="profile-title"
            number="01"
            eyebrow="Profile"
            title="From the microstructure to the manufacturing floor."
          />
          <div className="profile-content">
            <div className="profile-copy">
              {portfolio.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <dl className="profile-facts">
              <div>
                <dt>Current focus</dt>
                <dd>Semiconductor processing and materials reliability</dd>
              </div>
              <div>
                <dt>Working mode</dt>
                <dd>Experiment → characterize → diagnose → improve</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>Cornell M.Eng. ’26 · PEC B.Tech. ’25</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="page-section work-section" id="work" aria-labelledby="work-title">
          <SectionIntro
            id="work-title"
            number="02"
            eyebrow="Selected work"
            title="Three ways of making a process more legible."
            description="Each study starts with a different material system. The common thread is using evidence to move from observation to an engineering decision."
          />
          <div className="project-list">
            {portfolio.projects.map((project) => <ProjectStudy key={project.number} project={project} />)}
          </div>

          <div className="additional-work">
            <header>
              <p className="eyebrow">Additional technical work</p>
              <h3>Further experiments and design studies</h3>
            </header>
            <div className="additional-grid">
              {portfolio.additionalProjects.map((project, index) => (
                <article key={project.title}>
                  <p className="additional-number">0{index + 1}</p>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <p className="additional-methods">{project.methods}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section" id="experience" aria-labelledby="experience-title">
          <SectionIntro
            id="experience-title"
            number="03"
            eyebrow="Experience & education"
            title="Technical range, built in real process environments."
          />

          <div className="experience-list">
            {portfolio.experiences.map((experience) => (
              <article key={`${experience.organization}-${experience.role}`}>
                <p className="experience-date">{experience.dates}</p>
                <div>
                  <p className="experience-organization">{experience.organization}</p>
                  <h3>{experience.role}</h3>
                </div>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>

          <div className="education-block">
            <p className="eyebrow">Education</p>
            {portfolio.education.map((education) => (
              <article key={education.school}>
                <p className="education-date">{education.dates}</p>
                <div>
                  <h3>{education.school}</h3>
                  <p>{education.degree}</p>
                </div>
                <p>{education.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
          <SectionIntro
            id="capabilities-title"
            number="04"
            eyebrow="Technical capabilities"
            title="Methods are most useful when they answer the right question."
            description="A compact view of the tools I use across fabrication, characterization, and process improvement."
          />
          <div className="capability-grid">
            {portfolio.capabilities.map((capability, index) => (
              <article key={capability.category}>
                <p className="capability-number">0{index + 1}</p>
                <h3>{capability.category}</h3>
                <ul>
                  {capability.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">05 · Contact</p>
          <h2 id="contact-title">Let’s talk about the process behind the result.</h2>
          <p className="contact-copy">
            I’m interested in materials, semiconductor, process, and manufacturing engineering work where careful measurement leads to better decisions.
          </p>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>
            {portfolio.email} <ArrowIcon />
          </a>
          <div className="contact-meta">
            <div className="contact-socials">
              {portfolio.socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} <ExternalLinkIcon />
                </a>
              ))}
              <a href={portfolio.resumeHref}>Résumé <ArrowIcon /></a>
            </div>
            <p>Designed and built with Next.js · {new Date().getFullYear()}</p>
          </div>
        </section>
      </main>
    </>
  );
}
