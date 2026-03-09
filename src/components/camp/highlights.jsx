const highlights = [
  {
    num: "01",
    title: "Expert Coaching",
    desc: "Professional coaches with structured, game-based training programs for all levels.",
  },
  {
    num: "02",
    title: "End-of-Camp Tournament",
    desc: "Compete in finals. Certificates, trophies & goodies for all participants.",
  },
  {
    num: "03",
    title: "Skill-Focused Training",
    desc: "Progressive curriculum from fundamentals to advanced techniques over 12 sessions.",
  },
  {
    num: "04",
    title: "Confidence Building",
    desc: "Develop discipline, teamwork, and competitive spirit through structured athletics.",
  },
]

export function CampHighlights() {
  return (
    <section className="relative bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Why Flowternity</span>
        </div>

        {/* Bento-like grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.num}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <span className="mb-4 block font-[var(--font-heading)] text-4xl font-bold text-primary/15 transition-colors group-hover:text-primary/25">
                {item.num}
              </span>
              <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">{item.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
