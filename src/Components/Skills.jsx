function Skills() {
  const skills = [
  {
    name: "React.js",
    percentage: "90%",
    icon: "⚛️",
  },
  {
    name: "JavaScript",
    percentage: "85%",
    icon: "JS",
  },
  {
    name: "HTML",
    percentage: "95%",
    icon: "HTML",
  },
  {
    name: "CSS",
    percentage: "90%",
    icon: "CSS",
  },
  {
    name: "Tailwind CSS",
    percentage: "80%",
    icon: "TW",
  },
  {
    name: "Git & GitHub",
    percentage: "75%",
    icon: "Git",
  },
  {
    name: "Node.js",
    percentage: "70%",
    icon: "Node",
  },
  {
    name: "Express.js",
    percentage: "65%",
    icon: "EX",
  },
  {
    name: "MongoDB",
    percentage: "65%",
    icon: "DB",
  },
  {
    name: "REST API",
    percentage: "70%",
    icon: "API",
  },
];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-container">

        <div className="section-heading center">
          <span>MY SKILLS</span>
          <h2>Technologies I <strong>work with</strong></h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-top">

                <div className="skill-name">

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <span>{skill.name}</span>

                </div>

                <span className="percentage">
                  {skill.percentage}
                </span>

              </div>

              <div className="progress-bg">
                <div
                  className="progress"
                  style={{ width: skill.percentage }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;