import { ArrowUpRightIcon } from "../components/Icons"

// TODO: replace with your actual HuggingFace Space URL once deployed,
// e.g. "https://huggingface.co/spaces/your-username/patent-prior-art-explorer"
const SPACE_EMBED_URL =
  "https://renukswamy-explainable-patent-prior-art-search.hf.space"
const SPACE_PAGE_URL =
  "https://huggingface.co/spaces/Renukswamy/Explainable-Patent-Prior-Art-Search"

const pillars = [
  {
    tag: "SEMANTIC SEARCH",
    title: "Search by meaning, not keywords",
    description:
      "A query for \u201cpreventing a battery from overheating\u201d can surface a passage about \u201cthermal runaway suppression\u201d \u2014 no shared words required.",
  },
  {
    tag: "EXPLAINABLE RETRIEVAL",
    title: "See why a result matched",
    description:
      "Every result shows the specific evidence sentences driving the match, scored against the query in plain sight \u2014 not a black-box similarity number.",
  },
  {
    tag: "SEMANTIC HIGHLIGHTING",
    title: "Evidence highlighted automatically",
    description:
      "The passages most relevant to your query are highlighted directly in the result, computed entirely offline with no external API call.",
  },
]

export default function Demo() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Demo
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Try the Patent Prior-Art Explorer
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate">
            A small, free, explainable patent semantic search tool built
            on this research \u2014 search real granted patents by meaning,
            and see exactly why each result matched.
          </p>
          <a
            href={SPACE_PAGE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Open in a new tab
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-2xl border border-line bg-mist">
          <iframe
            src={SPACE_EMBED_URL}
            title="Patent Prior-Art Explorer demo"
            className="h-[820px] w-full"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-center text-xs text-slate-light">
          Hosted as a free HuggingFace Space. If the embed above doesn&apos;t
          load (some browser privacy settings block embedded third-party
          pages), use the &quot;Open in a new tab&quot; link.
        </p>
      </section>

      <section className="border-y border-line bg-mist/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Three layers, one pipeline
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-line bg-paper p-7"
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
        </div>
      </section>
    </>
  )
}
