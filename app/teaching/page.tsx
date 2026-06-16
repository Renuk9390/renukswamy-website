import Link from "next/link"
import { ArrowRightIcon } from "../components/Icons"

const courses = [
  {
    tag: "CORE AI",
    title: "Deep Learning",
    place: "University of Passau, 2019 \u2013 2022",
    description:
      "From the foundations of neural networks through CNNs, RNNs, and transformer architectures, with hands-on labs building and training models rather than just reading about them.",
  },
  {
    tag: "INFORMATION RETRIEVAL",
    title: "Preference-Based Information Retrieval",
    place: "University of Passau, 2019 \u2013 2022",
    description:
      "Ranking, relevance, and evaluation: how retrieval systems learn from preferences and feedback, covering classical IR models alongside learning-to-rank methods.",
  },
  {
    tag: "WEB & SYSTEMS",
    title: "Web Science",
    place: "University of Passau, 2019 \u2013 2022",
    description:
      "The structure and dynamics of the web as a research subject — crawling, search engines, link analysis, and the social and technical graphs that hold it together.",
  },
  {
    tag: "SYSTEMS THINKING",
    title: "Complex Engineering Systems",
    place: "University of Passau, 2019 \u2013 2022",
    description:
      "Designing and reasoning about large-scale software and AI systems, where individual components are simple but their interactions are not.",
  },
]

export default function Teaching() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Teaching
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Teaching students to build AI systems, not just study them
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate">
            Between 2019 and 2022 at the University of Passau, I taught
            across deep learning, information retrieval, and systems
            engineering, while supervising master&apos;s thesis students
            through their own research projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Courses Taught
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Four courses, one throughline: applied AI
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-2xl border border-line bg-mist/60 p-7 transition-colors hover:border-accent/40 hover:bg-paper"
            >
              <p className="font-mono text-[11px] tracking-widest text-accent">
                {course.tag}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {course.title}
              </h3>
              <p className="mt-1 text-sm text-slate-light">{course.place}</p>
              <p className="mt-3 text-sm leading-6 text-slate">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Supervision + philosophy */}
      <section className="border-y border-line bg-mist/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                Thesis Supervision
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Guiding students through their own research
              </h2>
              <p className="mt-4 text-base leading-7 text-slate">
                Alongside teaching, I supervised master&apos;s thesis
                students at the University of Passau, working with them from
                problem formulation through experiment design and writing.
                Most projects sat at the intersection of NLP, information
                retrieval, and applied machine learning, the same areas
                where I supervise and mentor today.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                Teaching Philosophy
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Theory in service of building things
              </h2>
              <p className="mt-4 text-base leading-7 text-slate">
                I learned to code by building, not just reading, and I teach
                the same way: every concept gets paired with something a
                student can implement, break, and fix themselves. The goal
                isn&apos;t to produce people who can recite an architecture
                diagram — it&apos;s to produce people who can debug one at
                2 a.m. when it actually matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future teaching interests */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Looking Ahead
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Courses I&apos;d be glad to teach next
          </h2>
          <p className="mt-4 text-base leading-7 text-slate">
            As I move toward a faculty role, I&apos;m looking forward to
            extending this teaching into the areas my research has grown
            into since 2022.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Natural Language Processing",
            "Information Retrieval & Search Engines",
            "Generative AI & Large Language Models",
            "Applied Machine Learning",
            "Patent & Innovation Analytics",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-ink"
          >
            Interested in thesis supervision? Let&apos;s talk
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
