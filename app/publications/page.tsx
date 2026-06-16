import { ArrowUpRightIcon, ScholarIcon } from "../components/Icons"

type Publication = {
  title: string
  authors: string
  venue: string
  year: string
}

const publications: Publication[] = [
  {
    title:
      "Patent Retrieval with Few-Shot Fine-Tuning and Quantized Embeddings",
    authors: "Renukswamy Chikkamath, Linda Andersson, Markus Endres",
    venue: "ICAAI, ACM, Manchester, UK",
    year: "2025",
  },
  {
    title:
      "Rethinking Patent Retrieval with Language Models: Toward Scalable and Efficient Search",
    authors: "Renukswamy Chikkamath, Linda Andersson, Markus Endres",
    venue: "World Patent Information, Elsevier",
    year: "2025",
  },
  {
    title: "Enhancing Patent Retrieval Using Automated Patent Summarization",
    authors:
      "Eleni Kamateri, Michail Salampasis, Renukswamy Chikkamath, Linda Andersson, Markus Endres",
    venue: "PatentSemTech, SIGIR, Italy",
    year: "2025",
  },
  {
    title:
      "ChatGPT vs. Google Gemini: Assessing AI Frontiers for Patent Prior Art Search Using European Search Reports",
    authors:
      "Renukswamy Chikkamath, Ankit Sharma, Christoph Hewel, Markus Endres",
    venue: "SemTech4STLD, ESWC, Hersonissos, Greece",
    year: "2024",
  },
  {
    title:
      "Decoding Health Informatics Patents: Investigating Topic Models for Patent Information Retrieval",
    authors: "Renukswamy Chikkamath, Zahra Esmaeili, Markus Endres",
    venue: "HINT24, Springer LNNS, India",
    year: "2024",
  },
  {
    title:
      "Explainable Artificial Intelligence for Highlighting and Searching in Patent Text",
    authors:
      "Renukswamy Chikkamath, Rana Fassahat Ali, Christoph Hewel, Markus Endres",
    venue: "PatentSemTech, SIGIR, Taipei, Taiwan",
    year: "2023",
  },
  {
    title:
      "Is Your Search Query Well-Formed? A Natural Query Understanding for Patent Prior Art Search",
    authors:
      "Renukswamy Chikkamath, Deepak Rastogi, Mahesh Maan, Markus Endres",
    venue: "World Patent Information, Elsevier",
    year: "2023",
  },
  {
    title: "Patent Classification Using BERT-for-Patents on USPTO",
    authors:
      "Renukswamy Chikkamath, Vishvapalsinhji Ramsinh Parmar, Yusuke Otiefy, Markus Endres",
    venue: "MLNLP, ACM, Sanya, China",
    year: "2022",
  },
  {
    title:
      "PaSA: A Dataset for Patent Sentiment Analysis to Highlight Patent Paragraphs",
    authors:
      "Renukswamy Chikkamath, Vishvapalsinhji Ramsinh Parmar, Christoph Hewel, Markus Endres",
    venue: "ICAIL, WASET, ACM, Singapore",
    year: "2022",
  },
  {
    title: "A Survey on Deep Learning for Patent Analysis",
    authors:
      "Ralf Krestel, Renukswamy Chikkamath, Christoph Hewel, Julian Risch",
    venue: "World Patent Information, Elsevier",
    year: "2021",
  },
  {
    title:
      "An Empirical Study on Patent Novelty Detection: A Novel Approach Using Machine Learning and Natural Language Processing",
    authors:
      "Renukswamy Chikkamath, Markus Endres, Lavanya Bayyapu, Christoph Hewel",
    venue: "ANLP 2020, IEEE Digital Library",
    year: "2020",
  },
  {
    title:
      "Concept Detection and Cluster Analysis from Newsfeed: A Singular Value Decomposition Based Approach",
    authors: "Renukswamy Chikkamath, B. Sathish Babu",
    venue: "2nd International Conference on Computational Intelligence and Networks (CINE), IEEE Digital Library",
    year: "2016",
  },
]

const byYear = publications.reduce<Record<string, Publication[]>>(
  (acc, pub) => {
    acc[pub.year] = acc[pub.year] ? [...acc[pub.year], pub] : [pub]
    return acc
  },
  {}
)
const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

export default function Publications() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Publications
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Peer-reviewed research on AI for patent intelligence
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate">
            {publications.length} publications across ACM, Elsevier, IEEE,
            and SIGIR venues, spanning information retrieval, explainable
            AI, and large language model evaluation for patent search.
          </p>
          <a
            href="https://scholar.google.com/citations?user=nbfWmvcAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <ScholarIcon className="h-4 w-4" />
            View full profile on Google Scholar
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-14">
          {years.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {year}
                </h2>
                <div className="h-px flex-1 bg-line" />
              </div>
              <div className="mt-6 space-y-5">
                {byYear[year].map((pub) => (
                  <div
                    key={pub.title}
                    className="rounded-2xl border border-line p-6 transition-colors hover:border-accent/40"
                  >
                    <h3 className="font-display text-base font-semibold leading-snug text-ink">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate">
                      {pub.authors}
                    </p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-accent">
                      {pub.venue}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
