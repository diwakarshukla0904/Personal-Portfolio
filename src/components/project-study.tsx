import type { FeaturedProject } from "@/data/portfolio";

function ProjectVisual({ type }: { type: FeaturedProject["visual"] }) {
  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="visual-coordinate visual-coordinate-top">Y / 04</div>
      <div className="visual-coordinate visual-coordinate-bottom">X / 12</div>
      {type === "interface" ? (
        <div className="interface-stack">
          <span>Ga alloy</span>
          <span>Oxide interface</span>
          <span>Substrate</span>
        </div>
      ) : null}
      {type === "wafer" ? (
        <div className="wafer-figure">
          <span className="wafer-line wafer-line-a" />
          <span className="wafer-line wafer-line-b" />
          <span className="wafer-line wafer-line-c" />
        </div>
      ) : null}
      {type === "steel" ? (
        <div className="steel-figure">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : null}
      <div className="visual-caption">Process study / {type}</div>
    </div>
  );
}

export function ProjectStudy({ project }: { project: FeaturedProject }) {
  return (
    <article className="project-study">
      <header className="project-header">
        <p className="project-number">{project.number}</p>
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>
      </header>

      <ProjectVisual type={project.visual} />

      <div className="project-brief">
        <div>
          <p className="brief-label">Context</p>
          <p>{project.context}</p>
        </div>
        <div>
          <p className="brief-label">My contribution</p>
          <p>{project.contribution}</p>
        </div>
        <div className="project-outcome">
          <p className="brief-label">Engineering value</p>
          <p>{project.outcome}</p>
        </div>
      </div>

      <div className="project-process">
        <p className="brief-label">Process</p>
        <ol>
          {project.steps.map((step, index) => (
            <li key={step.title}>
              <p className="process-count">0{index + 1}</p>
              <div>
                <p className="process-label">{step.label}</p>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <ul className="methods" aria-label={`Methods used for ${project.title}`}>
        {project.methods.map((method) => <li key={method}>{method}</li>)}
      </ul>
    </article>
  );
}
