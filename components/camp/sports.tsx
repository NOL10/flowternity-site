"use client"

import { useRef } from "react"

const sports = [
  {
    name: "Basketball",
    image: "/images/hero-basketball.jpg",
    tag: "Court Sport",
    times: ["8 AM - 9 AM", "4 PM - 5 PM"],
    timeLabels: ["Morning", "Evening"],
    skills: ["Ball handling & dribbling", "Shooting mechanics", "Offensive & defensive strategies", "Game awareness & match play"],
    gear: "Basketball shoes required. Personal basketball recommended.",
  },
  {
    name: "Skating",
    image: "/images/skating-action.jpg",
    tag: "Rink Sport",
    times: ["7 AM - 8 AM"],
    timeLabels: ["Morning"],
    skills: ["Balance and control techniques", "Speed and maneuvering drills", "Safety and braking methods", "Advanced skating movements"],
    gear: "Skates required. Safety gear required (helmet, guards).",
  },
  {
    name: "Futsal",
    image: "/images/futsal-action.jpg",
    tag: "Field Sport",
    times: ["9 AM - 10 AM"],
    timeLabels: ["Morning"],
    skills: ["Ball control & footwork", "Passing combinations", "Small sided gameplay", "Tactical understanding"],
    gear: "Non-marking futsal shoes required. Futsal ball must be purchased from Flowternity Sports.",
  },
]

export function CampSports() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = direction === "left" ? -400 : 400
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="sports" className="relative bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header with arrows */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Our Camps</span>
            </div>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Choose Your<br />Sport
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide snap-x snap-mandatory lg:mx-auto lg:max-w-7xl"
        style={{ scrollbarWidth: "none" }}
      >
        {sports.map((sport, idx) => (
          <div
            key={sport.name}
            className="group min-w-[340px] max-w-[400px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 sm:min-w-[380px]"
          >
            {/* Image with number overlay */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={sport.image}
                alt={`${sport.name} training at Flowternity`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <span className="absolute left-5 top-4 font-[var(--font-heading)] text-7xl font-bold leading-none text-foreground/10">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="absolute right-4 top-4 rounded-md bg-primary/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                {sport.tag}
              </div>
              <h3 className="absolute bottom-4 left-5 font-[var(--font-heading)] text-3xl font-bold uppercase text-foreground">
                {sport.name}
              </h3>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Times */}
              <div className="mb-4 flex flex-wrap gap-2">
                {sport.times.map((time, i) => (
                  <div key={time} className="flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{sport.timeLabels[i]}</span>
                    <span className="text-xs font-semibold text-foreground">{time}</span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <ul className="mb-4 space-y-1.5">
                {sport.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-[13px] text-card-foreground">
                    <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Gear note */}
              <div className="flex items-start gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2.5">
                <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p className="text-[11px] leading-relaxed text-muted-foreground">{sport.gear}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
