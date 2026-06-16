import Link from "next/link"
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/Icons"

const pillars = [
  {
    tag: "01",
    title: "Patent Information Retrieval",
    description:
      "Designing retrieval and ranking systems that connect a search query to the most relevant prior art across millions of patent documents — the technical core of automated prior-art search.",
  },
  {
    tag: "02",
    title: "LLMs for Prior-Art Search",
    description:
      "Evaluating and adapting large language models — GPT, Gemini, and open models — for patent retrieval, with a focus on where they help, where they fail, and how to measure both rigorously.",
  },
  {
    tag: "03",
    title: "Explainable AI for Patent Text",
    description:
      "Building systems that highlight the exact evidence behind a retrieval or classification decision, so patent examiners and analysts can verify, not just trust, an AI's output.",
  },
  {
    tag: "04",
    title: "Domain-Specific Embeddings",
    description:
      "Fine-tuning and quantizing transformer models such as BERT-for-Patents for efficient, domain-adapted search — squeezing state-of-the-art retrieval into production-ready footprints.",
  },
  {
    tag: "05",
    title: "Topic Modeling & Knowledge Discovery",
    description:
      "Mapping large technical collections, from health-informatics patents to engineering literature, to surface emerging themes, sub-fields, and structure that no single reader could find manually.",
  },
  {
    tag: "06",
    title: "Patent Analytics & Text Mining",
    description:
      "Applying sentiment analysis, automated summarization, and natural query understanding to turn dense, unstructured patent text into something an analyst can act on quickly.",
  },
]

const projects = [
  {
    title: "Few-Shot Fine-Tuning & Quantized Embeddings for Patent Retrieval",
    description:
      "A retrieval pipeline that fine-tunes embeddings with limited labeled data and compresses them through quantization, holding onto retrieval quality while cutting the computational cost.",
    venue: "ICAAI, ACM, 2025",
  },
  {
    title: "Rethinking Patent Retrieval with Language Models",
    description:
      "A study toward scalable, efficient patent search with language models, examining where modern LLM-based retrieval architectures outperform classical IR baselines — and where they don't.",
    venue: "World Patent Information, Elsevier, 2025",
  },
  {
    title: "ChatGPT vs. Google Gemini for Prior-Art Search",
    description:
      "A head-to-head evaluation of two frontier LLMs on prior-art search using European Search Reports as ground truth, surfacing concrete strengths and failure modes for each model.",
    venue: "SemTech4STLD, ESWC, 2024",
  },
  {
    title: "Explainable AI for Highlighting & Searching in Patent Text",
    description:
      "An explainability layer for patent search that highlights the specific passages driving a result, making AI-assisted search auditable for examiners rather than a black box.",
    venue: "PatentSemTech, SIGIR, 2023",
  },
  {
    title: "Topic Models for Health-Informatics Patent Retrieval",
    description:
      "An investigation into topic modeling techniques for decoding health-informatics patents, mapping a fast-moving technical domain into structured, searchable themes.",
    venue: "HINT24, Springer LNNS, 2024",
  },
  {
    title: "Natural Query Understanding for Patent Prior-Art Search",
    description:
      "A diagnostic approach to a deceptively simple question — is your search query well-formed? — that improves prior-art search by catching malformed queries before they fail silently.",
    venue: "World Patent Information, Elsevier, 2023",
  },
]

export default function Research() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Research
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Teaching machines to find what experts are actually looking for
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate">
            My research sits at the intersection of information retrieval,
            natural language processing, and explainable AI — using patents
            as a proving ground for methods that generalize to any large,
            specialized document collection.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Research Pillars
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Six interconnected research themes
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-paper p-7">
              <p className="font-display text-3xl font-semibold text-accent/30">
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

      {/* Selected projects */}
      <section className="border-y border-line bg-mist/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                Selected Projects
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Research in action
              </h2>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
            >
              Full publication list
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-7 transition-colors hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                    {project.title}
                  </h3>
                  <ArrowUpRightIcon className="mt-1 h-5 w-5 shrink-0 text-slate-light transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate">
                  {project.description}
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-slate-light">
                  {project.venue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future agenda */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
              Looking Ahead
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              A future AI &amp; Knowledge Discovery Lab
            </h2>
            <p className="mt-4 text-base leading-7 text-slate">
              As I complete my Ph.D., my research agenda is broadening from
              patent-specific systems toward a general framework for
              AI-driven knowledge discovery — applicable wherever
              organizations sit on top of large, specialized, hard-to-search
              document collections.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-mist/60 p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-light">
              Emerging directions
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Retrieval-augmented generation for enterprise and technical
                knowledge bases.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Rigorous evaluation frameworks for LLM-based search and
                retrieval.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Cross-lingual and multilingual retrieval for global patent
                and scientific corpora.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Innovation analytics — using patent and literature data to
                map technological trends.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-ink"
          >
            Discuss a research collaboration
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
