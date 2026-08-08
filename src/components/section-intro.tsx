type SectionIntroProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionIntro({ id, number, eyebrow, title, description }: SectionIntroProps) {
  return (
    <header className="section-intro">
      <p className="section-index" aria-hidden="true">{number}</p>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
    </header>
  );
}
