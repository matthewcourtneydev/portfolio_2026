import { Reveal } from "../../components/Reveal/Reveal";
import { experience } from "../../data/experience";
import styles from "./Experience.module.scss";

export function Experience() {
  return (
    <section
      id="experience"
      className={styles.experience}
      aria-labelledby="experience-heading"
    >
      <div className={styles.container}>
        <Reveal>
          <h2
            id="experience-heading"
            className={styles.heading}
          >
            <span className={styles.number}>02.</span>
            Experience
          </h2>
        </Reveal>

        {experience.map((item) => (
          <div
            key={item.company}
            className={styles.experienceItem}
          >
            <Reveal>
              <div>
                <div className={styles.companyHeader}>
                  <div>
                    <h3>{item.company}</h3>
                  </div>

                  <p className={styles.companyDates}>
                    {item.dates}
                  </p>
                </div>

                <p className={styles.summary}>
                  {item.summary}
                </p>
              </div>
            </Reveal>

            <div className={styles.timeline}>
              {item.roles.map((role, index) => (
                <Reveal
                  key={`${role.title}-${role.type}`}
                >
                  <article className={styles.role}>
                    <div
                      className={`${styles.marker} ${
                        index === 0
                          ? styles.markerCurrent
                          : ""
                      }`}
                      aria-hidden="true"
                    />

                    <div className={styles.roleHeader}>
                      <div>
                        <h4>{role.title}</h4>

                        <p className={styles.roleType}>
                          {role.type}
                        </p>
                      </div>

                      <p className={styles.roleDates}>
                        {role.dates}
                      </p>
                    </div>

                    <ul className={styles.highlights}>
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {index === 0 && (
                      <ul
                        className={styles.technologies}
                        aria-label="Technologies used"
                      >
                        {item.technologies.map(
                          (technology) => (
                            <li key={technology}>
                              {technology}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}