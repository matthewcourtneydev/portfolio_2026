import { Reveal } from '../../components/Reveal/Reveal'
import styles from './HowIBuild.module.scss'

const principles = [
  {
    number: '01',
    title: 'Accessibility first',
    description:
      'I build interfaces with keyboard navigation, screen readers, focus management, and semantic structure in mind from the start — not as a final checklist.',
    details: ['Keyboard', 'Screen readers', 'Focus', 'Semantics'],
  },
  {
    number: '02',
    title: 'Responsive by default',
    description:
      'I design and build across desktop, tablet, and mobile together, making sure the experience stays intuitive as layouts, inputs, and available space change.',
    details: ['Desktop', 'Tablet', 'Mobile', 'Touch'],
  },
  {
    number: '03',
    title: 'Built to maintain',
    description:
      'I favor reusable components, predictable data flow, and patterns that make a codebase easier to understand, extend, and support over time.',
    details: ['Components', 'State', 'Patterns', 'Scalability'],
  },
  {
    number: '04',
    title: 'Details matter',
    description:
      'I care about the small interactions that make software feel complete — clear feedback, thoughtful motion, useful states, and consistent behavior.',
    details: ['Motion', 'Feedback', 'States', 'Consistency'],
  },
]

export function HowIBuild() {
  return (
    <section
      id="how-i-build"
      className={styles.howIBuild}
      aria-labelledby="how-i-build-heading"
    >
      <div className={styles.container}>
        <Reveal>
          <h2
            id="how-i-build-heading"
            className={styles.heading}
          >
            <span className={styles.sectionNumber}>04.</span>
            How I Build
            <span
              className={styles.line}
              aria-hidden="true"
            />
          </h2>
        </Reveal>

        <div className={styles.principles}>
          {principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              delay={index % 2 === 1 ? 0.08 : 0}
            >
              <article className={styles.principle}>
                <div className={styles.principleHeader}>
                  <span className={styles.number}>
                    {principle.number}
                  </span>

                  <h3>{principle.title}</h3>
                </div>

                <p>{principle.description}</p>

                <ul
                  className={styles.details}
                  aria-label={`${principle.title} topics`}
                >
                  {principle.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}