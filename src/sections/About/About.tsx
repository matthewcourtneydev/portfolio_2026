import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./About.module.scss";

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Vue",
  "HTML / SCSS",
  "Git",
];

const focusAreas = [
  "Accessibility",
  "Responsive UI",
  "Design Systems",
  "Component Architecture",
  "Performance",
  "UX Details",
];

export function About() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        <Reveal>
          <h2 id="about-heading" className={styles.heading}>
            <span className={styles.number}>01.</span>
            About Me
          </h2>
        </Reveal>

        <div className={styles.content}>
          <div className={styles.description}>
            <Reveal>
              <h3 className={styles.intro}>
                I enjoy building digital experiences that feel as good as they
                work.
              </h3>
            </Reveal>

            <Reveal>
              <div>
                <p>
                  I'm a frontend engineer who cares about accessibility,
                  responsive design, and the details that make interfaces
                  intuitive.
                </p>

                <p>
                  I enjoy working at the intersection of thoughtful design and
                  clean, maintainable code, turning complex requirements into
                  experiences that feel simple to use.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className={styles.skills}>
              <div className={styles.skillGroup}>
                <h3>Core</h3>

                <ul className={styles.skillList}>
                  {technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.skillGroup}>
                <h3>Focus</h3>

                <ul className={styles.skillList}>
                  {focusAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}