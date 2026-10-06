import { Reveal } from '../../components/Reveal/Reveal'
import styles from './Contact.module.scss'

export function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <Reveal>
          <p className={styles.eyebrow}>
            <span>05.</span>
            What&apos;s next?
          </p>
        </Reveal>

        <Reveal delay={0.07}>
          <h2
            id="contact-heading"
            className={styles.heading}
          >
            Let&apos;s build something thoughtful.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className={styles.description}>
            I&apos;m always interested in thoughtful engineering,
            challenging frontend work, and opportunities to build
            experiences that are accessible, intuitive, and made to last.
          </p>
        </Reveal>

        <Reveal delay={0.21}>
          <a
            className={styles.email}
            href="mailto:YOUR_EMAIL_HERE"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}