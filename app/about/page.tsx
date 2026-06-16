import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, DownloadIcon } from "../components/Icons"

const education = [
  {
    period: "2023 — 2026",
    title: "Ph.D. Candidate, Computer Science",
    place: "Hochschule M\u00fcnchen (HM Munich), Germany",
    detail: "Patent analysis — AI algorithms for patent information retrieval and automated prior-art search.",
  },
  {
    period: "2020 — 2023",
    title: "Ph.D. Student, Computer Science",
    place: "University of Passau, Germany",
    detail: "Began doctoral research on AI for patent analysis under the Chair of Data & Knowledge Engineering.",
  },
  {
    period: "2016 — 2019",
    title: "M.Sc. Computer Science",
    place: "University of Passau, Germany",
    detail: "Master's thesis on identification and contextualization of n-ary arguments for open information extraction.",
  },
  {
    period: "2013 — 2015",
    title: "M.Tech, Computer Science & Engineering",
    place: "Siddaganga Institute of Technology, Tumkur, India",
    detail: "CGPA 8.69/10. Foundation in algorithms, systems, and applied computing.",
  },
]

const experience = [
  {
    period: "2023 — Present",
    title: "Research Assistant",
    place: "Faculty of Computer Science & Mathematics, Hochschule M\u00fcnchen",
  },
  {
    period: "2019 — 2023",
    title: "Research Assistant",
    place: "Chair of Data & Knowledge Engineering / Chair of Intelligent Systems, University of Passau",
  },
  {
    period: "2019 — 2022",
    title: "Teaching Assistant",
    place: "Deep Learning, Information Retrieval, Web Science, Complex Engineering Systems — University of Passau",
  },
  {
    period: "2019",
    title: "Machine Learning Engineer",
    place: "Rfrnz GmbH, Berlin, Germany",
  },
  {
    period: "2018",
    title: "AI Engineer",
    place: "Digital Product School (UnternehmerTUM), at IBM Watson, Munich",
  },
  {
    period: "2014 — 2016",
    title: "Research Project Intern",
    place: "Research & Technology Centre, Robert Bosch, Bangalore, India",
  },
]

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-24">
          <div className="mx-auto w-full max-w-xs md:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-mist">
              <Image
                src="/profile.jpg"
                alt="Portrait of Renukswamy Chikkamath"
                fill
                sizes="(min-width: 768px) 20rem, 70vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
              About
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              From a village in Karnataka to a research career in Munich
            </h1>
            <p className="mt-5 text-base leading-7 text-slate">
              I&apos;m Renukswamy Chikkamath — an AI researcher, information
              retrieval specialist, and patent intelligence expert. I build
              AI systems that help people and organizations find, understand,
              and trust the knowledge buried inside huge collections of
              technical documents.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/Renukswamy-Chikkamath-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-ink"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                See my research
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
          My Story
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Germany &ndash; India: a research bridge
        </h2>

        <div className="mt-6 space-y-5 text-base leading-7 text-slate">
          <p>
            I was born in Neeralagi, a small village in Karnataka, India,
            where access to computers was rare and the nearest path into
            technology ran through years of disciplined study. That path
            took me to the Siddaganga Institute of Technology in Tumkur for
            my M.Tech in Computer Science, and from there to the Research
            and Technology Centre at Robert Bosch in Bangalore, where I
            first worked on extracting structured insight from unstructured
            text — concept detection and clustering from news feeds. That
            project planted the question that still drives my research
            today: how can a machine understand what a document is actually
            saying?
          </p>
          <p>
            In 2016, I moved to Germany to pursue an M.Sc. in Computer
            Science at the University of Passau. It was a leap across more
            than geography — a new language, a new academic culture, and a
            much harder set of problems. My master&apos;s thesis on open
            information extraction sharpened a focus on natural language
            processing that has shaped everything since. A short stint as an
            AI Engineer at the Digital Product School, working alongside IBM
            Watson in Munich, and later as a Machine Learning Engineer at
            Rfrnz GmbH in Berlin, gave me an industry perspective I still
            draw on: research only matters if someone can use it.
          </p>
          <p>
            In 2019, I returned to Passau as a doctoral researcher, drawn to
            one of the hardest document-understanding problems there is:
            patents. Patent text is dense, adversarial, and deliberately
            ambiguous — written to be defensible, not readable. Teaching
            Deep Learning, Information Retrieval, and Web Science to Passau
            students while supervising their thesis projects taught me as
            much as the research itself. Since 2023, I&apos;ve continued
            this work as a Ph.D. candidate and research assistant at
            Hochschule M&uuml;nchen, building AI algorithms that automate
            prior-art search and surface the novelty hidden inside millions
            of patent documents.
          </p>
          <p>
            That work — recognized with a Top 6 finish at the EPO
            Codefest — sits at the intersection of information retrieval,
            large language models, and explainable AI. As I head toward
            completing my Ph.D. by the end of 2026, my research is widening
            beyond patents toward a broader goal: building domain-specific
            AI systems that let any organization, from patent offices to
            hospitals to manufacturers, retrieve and trust the knowledge
            locked inside their own documents.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-line bg-mist/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                Education
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                Academic timeline
              </h2>
              <ol className="mt-8 space-y-8 border-l border-line pl-6">
                {education.map((item) => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-paper" />
                    <p className="font-mono text-xs text-slate-light">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-slate">{item.place}</p>
                    {item.detail && (
                      <p className="mt-1.5 text-sm leading-6 text-slate-light">
                        {item.detail}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                Experience
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                Professional timeline
              </h2>
              <ol className="mt-8 space-y-8 border-l border-line pl-6">
                {experience.map((item) => (
                  <li key={item.title + item.period} className="relative">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-ink bg-paper" />
                    <p className="font-mono text-xs text-slate-light">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-6 text-slate">
                      {item.place}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
              Research Vision
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Beyond patents: AI for knowledge discovery
            </h2>
            <p className="mt-4 text-base leading-7 text-slate">
              Patents are my proving ground, not my ceiling. They&apos;re
              among the densest, most adversarial document collections that
              exist — if a retrieval or explanation system works there, it
              tends to generalize. My longer-term vision is to lead a
              research group built around exactly that principle: AI systems
              that retrieve, rank, explain, and discover knowledge from large
              collections of specialized text, applicable to patent offices,
              law firms, manufacturers, hospitals, and research institutions
              alike.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-mist/60 p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-light">
              What I bring to a faculty role
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Hands-on teaching experience in Deep Learning, Information
                Retrieval, Web Science, and Complex Engineering Systems.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                A publication record spanning ACM, Elsevier, and SIGIR
                venues, with active collaborators across Europe.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Direct industry experience translating research into
                production systems at IBM Watson and Rfrnz GmbH.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                A genuine Indo-German network, well placed to build research
                bridges between both ecosystems.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
