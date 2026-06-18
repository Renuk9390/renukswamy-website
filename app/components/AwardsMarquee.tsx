"use client"

import Image from "next/image"
import { useEffect, useRef, type KeyboardEvent, type PointerEvent } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons"

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
    eyebrow: "2024 \u00b7 EPO CodeFest, Germany",
    title: "Finalist, EPO CodeFest 2024",
    caption:
      "Received a finalist certificate from the European Patent Office at CodeFest 2024, presented at the Patent Knowledge Forum.",
  },
  {
    image: "manipa-best-paper.png",
    alt: "Best paper award at the HINT'24 conference, MIT Manipal",
    eyebrow: "2024 \u00b7 HINT'24, MIT Manipal, India",
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
    eyebrow: "2023 \u00b7 SIGIR, Taipei, Taiwan",
    title: "Workshop Paper, PatentSemTech 2023",
    caption:
      "Presented a workshop paper at PatentSemTech 2023, part of SIGIR 2023 in Taipei, Taiwan \u2014 a rare and rewarding crowd to be part of.",
  },
  {
    image: "best-presentation-mlnlp.png",
    alt: "Best presenter award at MLNLP 2022",
    eyebrow: "2022 \u00b7 MLNLP, China",
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

// Duplicated so the auto-scroll can loop seamlessly; the second
// half is hidden from assistive tech so nothing is announced twice.
const track = [...achievements, ...achievements]

const AUTO_SCROLL_PX_PER_SECOND = 42
const RESUME_DELAY_MS = 1200

export default function AwardsMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const draggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollRef = useRef(0)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Auto-scroll loop (frame-rate independent, pauses on any interaction).
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) return

    let frameId: number
    let lastTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp
      const deltaSeconds = (timestamp - lastTimestamp) / 1000
      lastTimestamp = timestamp

      if (!pausedRef.current && !draggingRef.current) {
        el.scrollLeft += AUTO_SCROLL_PX_PER_SECOND * deltaSeconds

        const halfWidth = el.scrollWidth / 2
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth
        }
      }

      frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [])

  const pause = () => {
    pausedRef.current = true
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
  }

  const scheduleResume = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false
    }, RESUME_DELAY_MS)
  }

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    // Only hijack plain mouse drags; let touch/pen use native scrolling.
    if (e.pointerType !== "mouse") return
    const el = scrollerRef.current
    if (!el) return
    draggingRef.current = true
    pause()
    dragStartXRef.current = e.clientX
    dragStartScrollRef.current = el.scrollLeft
    el.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    const el = scrollerRef.current
    if (!el) return
    const delta = e.clientX - dragStartXRef.current
    el.scrollLeft = dragStartScrollRef.current - delta
  }

  const endDrag = () => {
    if (!draggingRef.current) return
    draggingRef.current = false
    scheduleResume()
  }

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    pause()
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" })
    scheduleResume()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      scrollByPage(1)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      scrollByPage(-1)
    }
  }

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

      <div className="relative mt-10">
        <div
          ref={scrollerRef}
          role="region"
          aria-label="Achievements and milestones. Use the left and right arrow keys, drag, or the buttons to browse."
          tabIndex={0}
          onMouseEnter={pause}
          onMouseLeave={() => {
            if (!draggingRef.current) scheduleResume()
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onFocus={pause}
          onBlur={scheduleResume}
          onKeyDown={handleKeyDown}
          className="flex cursor-grab gap-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {track.map((item, i) => (
            <figure
              key={`${item.image}-${i}`}
              aria-hidden={i >= achievements.length ? "true" : undefined}
              className="w-72 shrink-0 select-none overflow-hidden rounded-2xl border border-line bg-paper sm:w-80"
            >
              <div className="relative h-44 bg-paper">
                <Image
                  src={`/awards/${item.image}`}
                  alt={item.alt}
                  fill
                  draggable={false}
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

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-mist to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-mist to-transparent sm:w-16" />

        {/* Manual controls */}
        <button
          type="button"
          aria-label="Show previous achievements"
          onClick={() => scrollByPage(-1)}
          className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/90 text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:left-2"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Show next achievements"
          onClick={() => scrollByPage(1)}
          className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/90 text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:right-2"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
