import { Reveal } from "../../components/Reveal/Reveal";
import { Project } from "../../components/Project/Project";
import { OtherProject } from "../../components/OtherProject/OtherProject";
import { featuredProjects, otherProjects } from "../../data/projects";
import styles from "./Work.module.scss";

export function Work() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-heading">
      <div className={styles.container}>
        <Reveal>
          <h2 id="work-heading" className={styles.heading}>
            <span className={styles.number}>03.</span>
            Work
          </h2>
        </Reveal>

        <div className={styles.projects}>
          {featuredProjects.map((project, index) => (
            <Project
              key={project.title}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <Reveal>
          <div className={styles.otherHeading}>
            <h3>Other Projects</h3>
            <span aria-hidden="true" />
          </div>
        </Reveal>

        <div className={styles.otherProjects}>
          {otherProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index % 3 === 1 ? 0.06 : index % 3 === 2 ? 0.12 : 0}
            >
              <OtherProject project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
