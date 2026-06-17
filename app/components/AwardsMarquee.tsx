import Image from "next/image"

type Achievement = {
  image: string
  alt: string
  eyebrow: string
  title: string
  caption: string
}

const achievements: Achievement[] = [
  {
    image: "EPO-Codefest-2024.png",
    alt: "Finalist certificate from the European Patent Office's CodeFest 2024",
    eyebrow: "2024 \u00b7 EPO CodeFest",
    title: "Finalist, EPO CodeFest 2024",
    caption:
      "Received a finalist certificate from the European Patent Office at CodeFest 2024, presented at the Patent Knowledge Forum.",
  },
  {
    image: "manipa-best-paper.png",
    alt: "Best paper award at the HINT'24 conference, MIT Manipal",
    eyebrow: "2024 \u00b7 HINT'24, MIT Manipal",
    title: "Best Paper Award",
    caption:
      "Awarded Best Paper at the HINT'24 conference, held at MIT, Manipal, India, for research on patent information retrieval.",
  },
  {
    image: "semtech4stld.png",
    alt: "Paper presentation at the SemTech4STLD workshop, ESWC 2024, Greece",
    eyebrow: "2024 \u00b7 ESWC, Greece",
    title: "Paper Presentation, SemTech4STLD",
    caption:
      "Presented \u201cChatGPT vs. Google Gemini: Assessing AI Frontiers for Patent Prior Art Search Using European Search Reports\u201d at the SemTech4STLD workshop, ESWC 2024.",
  },
  {
    image: "sigir2023.png",
    alt: "Presenting a workshop paper at PatentSemTech 2023, SIGIR, Taipei",
    eyebrow: "2023 \u00b7 SIGIR, Taipei",
    title: "Workshop Paper, PatentSemTech 2023",
    caption:
      "Presented a workshop paper at PatentSemTech 2023, part of SIGIR 2023 in Taipei, Taiwan \u2014 a rare and rewarding crowd to be part of.",
  },
  {
    image: "best-presentation-mlnlp.png",
    alt: "Best presenter award at MLNLP 2022",
    eyebrow: "2022 \u00b7 MLNLP",
    title: "Best Presenter Award",
    caption:
      "Recognized for the best presentation at MLNLP 2022, for research on domain-specific pre-trained language models for patent classification, published by ACM.",
  },
  {
    image: "unipassau-msc-award.png",
    alt: "Graduation ceremony at the University of Passau, 2019",
    eyebrow: "2019 \u00b7 University of Passau",
    title: "M.Sc. Graduation",
    caption:
      "A moment from the graduation ceremony at the University of Passau, completing an M.Sc. in Computer Science.",
  },
  {
    image: "atgoogle-2019.png",
    alt: "Speaking at a Google event in Munich",
    eyebrow: "2019 \u00b7 Google, Munich",
    title: "Invited Talk at Google",
    caption:
      "Invited to present a fake-news detection prototype, developed at the Digital Product School, at a Google event in Munich.",
  },
  {
    image: "presentation-ibm-watson-munich.png",
    alt: "Team presentation at IBM Watson, Munich",
    eyebrow: "2018 \u00b7 IBM Watson, Munich",
    title: "Project Presentation at IBM Watson",
    caption:
      "Presenting with team WilderKaiser from the Digital Product School (UnternehmerTUM) at IBM Watson, Munich.",
  },
  {
    image: "kiit-presentation-2016.png",
    alt: "Presenting a paper at an IEEE conference, KIIT University, Bhubaneswar",
    eyebrow: "2016 \u00b7 IEEE, KIIT University",
    title: "Conference Paper Presentation",
    caption:
      "Presented research from the Robert Bosch Research and Technology Centre, Bangalore, at an IEEE conference hosted by KIIT University, Bhubaneswar.",
  },
]

// Duplicate the list so the marquee loops seamlessly at -50% translation.
const track = [...achievements, ...achievements]

export default function AwardsMarquee() {
  return (
    <section className="border-y border-line bg-mist py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
          Recognition
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Achievements &amp; milestones
        </h2>
      </div>

      <div className="marquee mt-10">
        <div className="marquee-track flex gap-6 px-6">
          {track.map((item, i) => (
            <figure
              key={`${item.image}-${i}`}
              aria-hidden={i >= achievements.length ? "true" : undefined}
              className="w-72 shrink-0 overflow-hidden rounded-2xl border border-line bg-paper sm:w-80"
            >
              <div className="relative h-44 bg-paper">
                <Image
                  src={`/awards/${item.image}`}
                  alt={item.alt}
                  fill
                  sizes="320px"
                  className="object-contain p-3"
                />
              </div>
              <figcaption className="border-t border-line p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {item.eyebrow}
                </p>
                <p className="mt-1.5 font-display text-sm font-semibold leading-snug text-ink">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-slate">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
