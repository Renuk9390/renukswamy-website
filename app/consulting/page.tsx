import { ArrowRightIcon, EmailIcon } from "../components/Icons"

const services = [
  {
    tag: "STRATEGY",
    title: "AI Strategy & Advisory",
    description:
      "Helping teams decide where AI and retrieval actually fit their problem, what to build versus buy, and how to scope a realistic first project.",
  },
  {
    tag: "RAG",
    title: "Retrieval-Augmented Generation",
    description:
      "Designing RAG pipelines for domain-specific document collections — chunking strategy, embedding choice, and evaluation that goes beyond a demo that only works once.",
  },
  {
    tag: "SEARCH",
    title: "Semantic & Enterprise Search",
    description:
      "Moving internal search beyond keyword matching, so people searching a knowledge base actually find what they mean, not just what they typed.",
  },
  {
    tag: "CORE EXPERTISE",
    title: "Patent Intelligence & Prior-Art Search",
    description:
      "Building and improving prior-art search, patent classification, and novelty-detection systems — the domain I've spent my PhD specializing in.",
  },
  {
    tag: "MODELS",
    title: "Domain-Specific Language Models",
    description:
      "Fine-tuning and adapting embeddings and LLMs to specialized vocabularies — legal, technical, medical, or patent language that general-purpose models handle poorly.",
  },
  {
    tag: "DISCOVERY",
    title: "Knowledge Management & Discovery",
    description:
      "Applying topic modeling and text mining to structure large unstructured collections, so organizations can see what they actually know.",
  },
]

const workshopTopics = [
  "Generative AI for Document-Heavy Workflows",
  "Information Retrieval Fundamentals",
  "Patent Intelligence & Prior-Art Search",
  "Building Domain-Specific AI Systems",
  "Practical LLM Engineering",
]

const audience = [
  "Patent offices & IP law firms",
  "R&D-heavy manufacturers",
  "Healthcare & health-tech organizations",
  "Research institutions & universities",
  "Enterprise teams with large internal document collections",
]

export default function Consulting() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Consulting
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            AI strategy for organizations drowning in their own documents
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate">
            I work with organizations that need to retrieve, understand, or
            act on knowledge buried inside large, specialized document
            collections — patents, technical literature, or internal
            archives.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Where I can help
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-line bg-mist/60 p-7 transition-colors hover:border-accent/40 hover:bg-paper"
            >
              <p className="font-mono text-[11px] tracking-widest text-accent">
                {service.tag}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who I work with + how it works */}
      <section className="border-y border-line bg-mist/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                Who I Work With
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Organizations sitting on hard-to-search knowledge
              </h2>
              <ul className="mt-6 space-y-3">
                {audience.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                How It Works
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                A simple, low-risk way to start
              </h2>
              <ol className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs text-paper">
                    1
                  </span>
                  <p className="text-sm leading-6 text-slate">
                    A short discovery call to understand your document
                    collection, current search pain points, and goals.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs text-paper">
                    2
                  </span>
                  <p className="text-sm leading-6 text-slate">
                    A scoped assessment or pilot — usually a small, bounded
                    project that proves out an approach before any larger
                    commitment.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs text-paper">
                    3
                  </span>
                  <p className="text-sm leading-6 text-slate">
                    Implementation support or an ongoing advisory
                    relationship, depending on what the pilot tells us.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & workshops */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
              Speaking &amp; Workshops
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Talks and hands-on sessions for teams and conferences
            </h2>
            <p className="mt-4 text-base leading-7 text-slate">
              I&apos;m available for talks, internal workshops, and
              conference sessions on AI, retrieval, and patent intelligence
              — pitched for either a technical team or a mixed
              technical/business audience, depending on what you need.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {workshopTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            Have a project or talk in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-paper/65">
            Tell me about your document collection, your search problem, or
            the audience for your event — I&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:renukswamy.chikkamath@hm.edu?subject=Consulting%20inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent/90"
            >
              <EmailIcon className="h-4 w-4" />
              Start a conversation
            </a>
            <a
              href="https://www.linkedin.com/in/renukswamy-chikkamath-6466493a/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/50"
            >
              Connect on LinkedIn
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
