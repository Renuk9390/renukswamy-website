import Link from "next/link"
import { ArrowRightIcon, EmailIcon } from "../components/Icons"

const tracks = [
  {
    tag: "ACADEMIA",
    title: "Research Collaboration",
    description:
      "Joint work on patent retrieval, LLM evaluation, explainable AI, and information retrieval — co-authored papers, shared datasets, and cross-institutional projects.",
    points: [
      "Co-authoring papers for IR, NLP, or patent-analytics venues",
      "Joint grant applications and Indo-German research initiatives",
      "Sharing or jointly developing benchmark datasets",
    ],
  },
  {
    tag: "INDUSTRY",
    title: "Industry Collaboration",
    description:
      "Applying retrieval, NLP, and explainable AI methods to real-world search and document-understanding problems for companies and patent offices.",
    points: [
      "Prior-art search and patent classification systems",
      "Domain-specific search and retrieval-augmented generation",
      "Evaluating LLMs for enterprise document understanding",
    ],
  },
  {
    tag: "MENTORSHIP",
    title: "Student Supervision",
    description:
      "Supervising thesis and project work for students interested in information retrieval, NLP, and applied machine learning — informed by several years of doing exactly this at Passau and HM Munich.",
    points: [
      "Master's and Bachelor's thesis supervision",
      "Guidance on patent-analytics or IR-focused research projects",
      "Code review and methodology feedback for ML projects",
    ],
  },
]

export default function Collaborate() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Collaborate
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Let&apos;s build something worth searching for
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate">
            I&apos;m open to academic and industry collaborations in AI,
            information retrieval, and patent intelligence — whether that
            means co-authoring a paper, solving a search problem for your
            organization, or supervising a thesis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="flex flex-col rounded-2xl border border-line bg-mist/60 p-7"
            >
              <p className="font-mono text-[11px] tracking-widest text-accent">
                {track.tag}
              </p>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                {track.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate">
                {track.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {track.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting teaser */}
      <section className="border-y border-line bg-mist/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                Consulting
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Need AI strategy for search or patent intelligence?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate">
                I also work with organizations directly on retrieval-augmented
                generation, semantic search, patent intelligence, and
                domain-specific language models — get in touch to discuss
                your use case.
              </p>
            </div>
            <Link
              href="/consulting"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-ink"
            >
              See consulting services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            Start the conversation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-paper/65">
            The fastest way to reach me is by email — tell me a bit about
            what you&apos;re working on and I&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:renukswamy.chikkamath@hm.edu"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent/90"
            >
              <EmailIcon className="h-4 w-4" />
              renukswamy.chikkamath@hm.edu
            </a>
            <a
              href="https://www.linkedin.com/in/renukswamy-chikkamath-6466493a/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/50"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
