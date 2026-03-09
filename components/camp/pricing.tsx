export function CampPricing() {
  return (
    <section id="pricing" className="relative bg-card/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Pricing</span>
        </div>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Invest In Their Game
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Choose one camp or bundle multiple for the ultimate training experience with exclusive savings.
          </p>
        </div>

        {/* Two pricing columns */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Single */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-background p-8">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Single Camp</span>
            <h3 className="mt-1 font-[var(--font-heading)] text-xl font-bold uppercase text-foreground">One Sport Focus</h3>
            <p className="mt-2 text-[13px] text-muted-foreground">12 sessions over 3 weeks. Go deep on one discipline.</p>

            <div className="my-6 flex items-baseline gap-1">
              <span className="font-[var(--font-heading)] text-5xl font-bold text-foreground">&#x20B9;3,999</span>
              <span className="text-sm text-muted-foreground">/camp</span>
            </div>

            <ul className="mb-8 space-y-2.5">
              {["12 training sessions (Mon-Thu)", "Professional coaching staff", "End-of-camp tournament entry", "Certificate of completion", "Facility amenities access"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-foreground">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#register" className="block w-full rounded-md border border-primary py-3 text-center text-[13px] font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
              Select Camp
            </a>
          </div>

          {/* Multi - highlighted */}
          <div className="relative overflow-hidden rounded-xl border-2 border-primary bg-background p-8">
            {/* Badge */}
            <div className="absolute right-4 top-4 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
              Best Value
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">Multi Camp</span>
            <h3 className="mt-1 font-[var(--font-heading)] text-xl font-bold uppercase text-foreground">Multi Sport Bundle</h3>
            <p className="mt-2 text-[13px] text-muted-foreground">Train across sports. Save more when you register for 2+ camps.</p>

            <div className="my-6">
              <div className="flex items-baseline gap-1">
                <span className="font-[var(--font-heading)] text-5xl font-bold text-foreground">&#x20B9;3,499</span>
                <span className="text-sm text-muted-foreground">/camp</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1">
                <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-[11px] font-semibold text-primary">Save &#x20B9;500 per camp</span>
              </div>
            </div>

            <ul className="mb-8 space-y-2.5">
              {["Everything in Single Camp", "Multi-sport training variety", "Priority slot selection", "Trophies & goodies for top performers", "Exclusive tournament access", "Recovery corner access"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-foreground">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#register" className="block w-full rounded-md bg-primary py-3 text-center text-[13px] font-semibold text-primary-foreground transition-all hover:bg-primary/90">
              Get Multi Camp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
