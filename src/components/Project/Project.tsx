import { Reveal } from "../Reveal/Reveal";
import type { Project as ProjectType } from "../../data/projects";
import styles from "./Project.module.scss";

interface ProjectProps {
  project: ProjectType;
  reverse?: boolean;
}

export function Project({ project, reverse = false }: ProjectProps) {
  const hasDevicePreview =
    project.desktopImage &&
    project.tabletImage &&
    project.mobileImage;

  return (
    <article
      className={`${styles.project} ${reverse ? styles.reverse : ""}`}
    >
      <Reveal>
        <div className={styles.visual}>
          {hasDevicePreview ? (
            <div className={styles.devices}>
              <div className={styles.laptop}>
                <div className={styles.laptopScreen}>
                  <img
                    src={project.desktopImage}
                    alt={`${project.title} desktop view`}
                  />
                </div>

                <div
                  className={styles.laptopBase}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.tablet}>
                <div className={styles.tabletScreen}>
                  <img
                    src={project.tabletImage}
                    alt={`${project.title} tablet view`}
                  />
                </div>
              </div>

              <div className={styles.phone}>
                <div className={styles.phoneScreen}>
                  <img
                    src={project.mobileImage}
                    alt={`${project.title} mobile view`}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.browser}>
              <div
                className={styles.browserBar}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>

              <div className={styles.placeholder}>
                <span>Project preview</span>
              </div>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className={styles.details}>
          {project.label && (
            <p className={styles.eyebrow}>
              {project.label}
            </p>
          )}

          <h3 className={styles.projectTitle}>
            {project.title}
          </h3>

          <p className={styles.description}>
            {project.description}
          </p>

          <ul
            className={styles.technologies}
            aria-label="Technologies used"
          >
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <div className={styles.links}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View project
                <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </article>
  );
}