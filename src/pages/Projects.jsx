const projects = [
  {
    title: 'Student Portfolio',
    summary: 'A modern React portfolio with reusable sections and polished styling.'
  },
  {
    title: 'Task Tracker',
    summary: 'An interactive app that helps organize daily commitments with a clean UI.'
  },
  {
    title: 'Mini Dashboard',
    summary: 'A compact dashboard experience showing cards and simple data-driven components.'
  }
]

function Projects() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Recent Work</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
