// Small reusable components. The parent component supplies their content
// through props so the same layout can be used with different information.

export function SectionLabel({ number, title, note }) {
  return (
    <div className="section-label">
      <span>{number} / {title}</span>
      <span>{note}</span>
    </div>
  );
}

export function StatCard({ value, label }) {
  return (
    <div className="stat">
      <span className="stat-spark">✳</span>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.tone}`}>
        <div className="project-meta">
          <span>PROJECT {project.number}</span>
          <span>{project.type.toUpperCase()}</span>
        </div>

        <div className="project-inner">
          <span className="project-mark">{project.mark}</span>
          <span className="project-caption">{project.caption}</span>
        </div>

        <span className="project-arrow">↗</span>
      </div>

      <div className="project-title">
        <h3>{project.title}</h3>
        <span>
          {project.category} <span className="project-dot">·</span>{" "}
          {project.type}
        </span>
      </div>
    </article>
  );
}

export function TimelineItem({ item, index }) {
  return (
    <article className="timeline-item">
      <span className="timeline-year">{item.year}</span>
      <span className="timeline-node">{index === 0 ? "✳" : ""}</span>

      <div className="timeline-detail">
        <span className="timeline-tag">{item.tag}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <span className="timeline-index">0{index + 1}</span>
    </article>
  );
}
