function Projects() {
  const projects = [
    {
      number: "01",
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React.js and responsive CSS.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "#",
      live: "#",
    },
    {
      number: "02",
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce application with product listings and shopping features.",
      technologies: ["React", "JavaScript", "API"],
      github: "#",
      live: "#",
    },
    {
      number: "03",
      title: "Task Manager",
      description:
        "A productivity application for creating, managing and tracking tasks.",
      technologies: ["React", "LocalStorage", "CSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="section">

      <div className="section-container">

        <div className="section-heading">
          <span>MY PROJECTS</span>
          <h2>Things I've <strong>built</strong></h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-links">

                  <a href={project.github} target="_blank">
                    GitHub ↗
                  </a>

                  <a href={project.live} target="_blank">
                    Live Demo ↗
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;