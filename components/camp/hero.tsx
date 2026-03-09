"use client"

import { useEffect, useRef } from "react"

export function CampHero() {
  const countRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple countdown to camp start (April 6, 2026)
    const target = new Date("2026-04-06T00:00:00+05:30").getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = target - now
      if (diff <= 0 || !countRef.current) return
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      countRef.current.innerHTML = `
        <div class="flex items-center gap-4 sm:gap-6">
          <div class="text-center"><span class="font-[var(--font-heading)] text-3xl sm:text-5xl font-bold text-foreground">${days}</span><span class="block text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Days</span></div>
          <span class="text-2xl text-primary/40 font-light">:</span>
          <div class="text-center"><span class="font-[var(--font-heading)] text-3xl sm:text-5xl font-bold text-foreground">${String(hours).padStart(2, '0')}</span><span class="block text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Hours</span></div>
          <span class="text-2xl text-primary/40 font-light">:</span>
          <div class="text-center"><span class="font-[var(--font-heading)] text-3xl sm:text-5xl font-bold text-foreground">${String(mins).padStart(2, '0')}</span><span class="block text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Mins</span></div>
        </div>
      `
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Split layout: left text, right image */}
      <div className="relative mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        {/* Left Panel */}
        <div className="flex flex-col justify-center px-6 pb-12 pt-28 lg:pr-12 lg:pt-0">
          {/* Top tag */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Summer Camp 2026
            </span>
          </div>

          {/* Main heading - oversized editorial style */}
          <h1 className="font-[var(--font-heading)] text-5xl font-bold uppercase leading-[0.9] tracking-tight text-foreground sm:text-7xl xl:text-[5.5rem]">
            Train<br />
            Like A<br />
            <span className="text-primary">Pro.</span>
          </h1>

          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Basketball. Skating. Futsal. Join Bengaluru&apos;s premier multi-sport
            camp at our 22,000 sq ft world-class facility.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-[13px] font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Book Your Spot
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#sports"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore Camps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </a>
          </div>

          {/* Countdown */}
          <div className="mt-12 border-t border-border pt-8">
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Camp starts in
            </span>
            <div ref={countRef} className="flex items-center gap-6">
              <div className="text-center">
                <span className="font-[var(--font-heading)] text-3xl font-bold text-foreground sm:text-5xl">--</span>
                <span className="mt-1 block text-[10px] uppercase tracking-widest text-muted-foreground">Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image Collage */}
        <div className="relative hidden lg:block">
          {/* Main big image */}
          <div className="absolute inset-0">
            <img
              src="/images/hero-basketball.jpg"
              alt="Young athletes training at Flowternity Sports"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          </div>

          {/* Floating badges over the image */}
          <div className="absolute bottom-12 left-8 flex flex-col gap-3">
            <div className="rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm px-5 py-3">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Camp 1</span>
              <span className="text-sm font-bold text-foreground">6 Apr - 23 Apr</span>
            </div>
            <div className="rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm px-5 py-3">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Camp 2</span>
              <span className="text-sm font-bold text-foreground">27 Apr - 14 May</span>
            </div>
          </div>

          {/* Price floating badge */}
          <div className="absolute right-8 top-28 rounded-lg border border-primary/20 bg-background/80 backdrop-blur-sm px-5 py-3">
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Starting at</span>
            <span className="font-[var(--font-heading)] text-2xl font-bold text-primary">&#x20B9;3,999</span>
          </div>
        </div>
      </div>

      {/* Mobile hero image */}
      <div className="relative -mt-4 h-72 overflow-hidden lg:hidden">
        <img
          src="/images/hero-basketball.jpg"
          alt="Young athletes training at Flowternity Sports"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-6 flex gap-2">
          <div className="rounded-md border border-primary/20 bg-background/80 backdrop-blur-sm px-3 py-2">
            <span className="text-[10px] text-muted-foreground">Camp 1: </span>
            <span className="text-xs font-bold text-foreground">6 Apr - 23 Apr</span>
          </div>
          <div className="rounded-md border border-primary/20 bg-background/80 backdrop-blur-sm px-3 py-2">
            <span className="text-[10px] text-muted-foreground">Camp 2: </span>
            <span className="text-xs font-bold text-foreground">27 Apr - 14 May</span>
          </div>
        </div>
      </div>

      {/* Stats bar at very bottom */}
      <div className="border-t border-border bg-card/50">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-border">
          {[
            { value: "22K", unit: "sq ft", label: "Facility" },
            { value: "3", unit: "", label: "Sports" },
            { value: "12", unit: "", label: "Sessions / Camp" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-5 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-[var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</span>
                {stat.unit && <span className="text-xs text-muted-foreground">{stat.unit}</span>}
              </div>
              <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
