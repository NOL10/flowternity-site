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
              className="group relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/[0.02] p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <span className="mb-4 block font-[var(--font-heading)] text-4xl font-bold text-primary/30 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-primary group-hover:via-primary/80 group-hover:to-primary/60 group-hover:bg-clip-text group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-lg group-hover:drop-shadow-primary/25">
                {item.num}
              </span>
              <h3 className="mb-2 text-base font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">{item.desc}</p>

              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.primary/0.1),transparent_70%)]" />
              </div>

              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-primary/5 group-hover:to-primary/10" />

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 group-hover:w-full" />

              {/* Corner accent */}
              <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary/0 transition-all duration-500 group-hover:bg-primary/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
