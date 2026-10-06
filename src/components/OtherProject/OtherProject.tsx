import type { OtherProject as OtherProjectType } from '../../data/projects'
import styles from './OtherProject.module.scss'

interface OtherProjectProps {
  project: OtherProjectType
}

export function OtherProject({
  project,
}: OtherProjectProps) {
  return (
    <article className={styles.project}>
      <div className={styles.top}>
        <span
          className={styles.icon}
          aria-hidden="true"
        >
          &lt;/&gt;
        </span>

        <div className={styles.links}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title}`}
            >
              Live
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.title}>
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
          <li key={technology}>
            {technology}
          </li>
        ))}
      </ul>
    </article>
  )
}