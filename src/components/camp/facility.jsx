const facilities = [
  "International Standard Basketball Courts (x2)",
  "Pickleball Courts (x2)",
  "Skating & Skateboarding Arena",
  "Calisthenics & Strength Zone",
  "Athlete Recovery Corner",
  "Player Lounge & Cafe",
]

export function CampFacility() {
  return (
    <section id="facility" className="relative overflow-hidden bg-card/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Facility</span>
            </div>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Built For<br />Performance
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              22,000 sq ft of premium, multi-sport infrastructure in the heart of Bengaluru. Every surface, every corner -- designed for athletes.
            </p>

            {/* Facility list */}
            <ul className="mt-8 space-y-3">
              {facilities.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Big stat callout */}
            <div className="mt-10 inline-flex items-baseline gap-2">
              <span className="font-[var(--font-heading)] text-6xl font-bold text-primary">22K</span>
              <span className="text-sm uppercase tracking-wider text-muted-foreground">sq ft</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/images/facility.jpeg"
                alt="Flowternity Sports multi-sport facility interior"
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Overlapping card */}
            <div className="absolute -bottom-4 -left-4 rounded-lg border border-primary/20 bg-background/90 backdrop-blur-sm p-5 sm:left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-bold text-foreground">Horamavu, Bengaluru</span>
                  <span className="text-[11px] text-muted-foreground">Kalkere Main Road</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
