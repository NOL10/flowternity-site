const steps = [
  { title: "Pick Your Sport", desc: "Choose Basketball, Skating, or Futsal. Or go for all three." },
  { title: "Select Your Batch", desc: "Camp 1 (6 Apr - 23 Apr), Camp 2 (27 Apr - 14 May), or both." },
  { title: "Register & Pay", desc: "Fill in details, pay online, and lock in your spot instantly." },
  { title: "Start Training", desc: "Show up, train hard, compete in the end-of-camp tournament." },
]

export function CampHowItWorks() {
  return (
    <section className="relative bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">How It Works</span>
        </div>

        {/* Horizontal steps with connecting line */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative">
                {/* Step number */}
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="font-[var(--font-heading)] text-lg font-bold text-primary">{idx + 1}</span>
                </div>
                <h3 className="mb-1.5 text-base font-bold text-foreground">{step.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
