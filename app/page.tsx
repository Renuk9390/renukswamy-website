import Image from "next/image"
import Link from "next/link"
import AwardsMarquee from "./components/AwardsMarquee"
import { ArrowRightIcon, DownloadIcon } from "./components/Icons"

const stats = [
  { value: "12", label: "Peer-reviewed publications" },
  { value: "7+", label: "Years researching AI & NLP" },
  { value: "2", label: "Countries — Germany & India" },
  { value: "2026", label: "Expected PhD completion" },
]

const pillars = [
  {
    tag: "IR · RANKING",
    title: "Information Retrieval & Patent Search",
    description:
      "Designing retrieval and ranking models that connect a search query to the most relevant prior art across millions of patent documents.",
  },
  {
    tag: "LLM · EVALUATION",
    title: "LLMs for Prior-Art Search",
    description:
      "Benchmarking large language models such as GPT and Gemini for prior-art search, and building evaluation frameworks for domain-specific retrieval tasks.",
  },
  {
    tag: "EXPLAINABLE AI",
    title: "Explainable Search & Classification",
    description:
      "Making AI-driven search and classification systems interpretable — highlighting the evidence behind every result for examiners and analysts.",
  },
  {
    tag: "EMBEDDINGS",
    title: "Domain-Specific Language Models",
    description:
      "Fine-tuning and quantizing transformer embeddings, including BERT-for-Patents, for efficient, domain-adapted retrieval.",
  },
  {
    tag: "TOPIC MODELS",
    title: "Knowledge Discovery",
    description:
      "Mapping large technical collections — from health-informatics patents to engineering literature — to surface emerging themes and structure.",
  },
  {
    tag: "TEXT MINING",
    title: "Patent Analytics",
    description:
      "Applying sentiment analysis, summarization, and text-mining techniques to extract structured insight from unstructured patent text.",
  },
]

const publications = [
  {
    venue: "World Patent Information · Elsevier, 2025",
    title:
      "Rethinking Patent Retrieval with Language Models: Toward Scalable and Efficient Search",
  },
  {
    venue: "ICAAI (ACM), 2025",
    title:
      "Patent Retrieval with Few-Shot Fine-Tuning and Quantized Embeddings",
  },
  {
    venue: "PatentSemTech @ SIGIR, 2025",
    title: "Enhancing Patent Retrieval Using Automated Patent Summarization",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
              PhD Candidate · Hochschule M&uuml;nchen, Munich
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Advancing Knowledge Discovery through Artificial Intelligence
            </h1>
            <p className="mt-5 text-base font-medium leading-7 text-slate sm:text-lg">
              AI Researcher &middot; Information Retrieval Specialist &middot;
              Patent Intelligence Expert &middot; Builder of Domain-Specific
              AI Systems
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate">
              I design intelligent systems that help organizations discover,
              retrieve, understand, and act on knowledge hidden inside
              patents, scientific literature, and large technical document
              collections — combining information retrieval, natural
              language processing, large language models, and explainable
              AI.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-ink"
              >
                Explore my research
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                View publications
              </Link>
              <a
                href="/Renukswamy-Chikkamath-CV.pdf"
                download
                className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-medium text-slate transition-colors hover:text-ink"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-slate-light sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-mist">
              <Image
                src="/profile.jpg"
                alt="Portrait of Renukswamy Chikkamath"
                fill
                priority
                sizes="(min-width: 768px) 24rem, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research focus */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Research Focus
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Six pillars, one goal: turning unstructured knowledge into
            actionable insight
          </h2>
          <p className="mt-4 text-base leading-7 text-slate">
            Patents are my proving ground — one of the densest, highest-stakes
            document collections in the world. The methods I build there
            extend naturally to scientific literature, legal documents, and
            enterprise knowledge bases.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-line bg-mist/60 p-6 transition-colors hover:border-accent/40 hover:bg-paper"
            >
              <p className="font-mono text-[11px] tracking-widest text-accent">
                {pillar.tag}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AwardsMarquee />

      {/* Featured publications */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                Selected Publications
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Recent work on patent retrieval &amp; LLM evaluation
              </h2>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
            >
              View all publications
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="flex flex-col rounded-2xl border border-line bg-paper p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-slate-light">
                  {pub.venue}
                </p>
                <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink">
                  {pub.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            Interested in collaborating on AI-driven retrieval or patent
            intelligence?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-paper/65">
            Open to research partnerships, industry projects, and Indo-German
            initiatives in AI, NLP, and information retrieval.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent/90"
            >
              Let&apos;s Collaborate
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href="mailto:renukswamy.chikkamath@hm.edu"
              className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/50"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
