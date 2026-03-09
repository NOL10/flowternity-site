const scheduleData = [
  { sport: "Skating", camp1: "7:00 - 8:00 AM", camp2: "7:00 - 8:00 AM" },
  { sport: "Basketball (AM)", camp1: "8:00 - 9:00 AM", camp2: "8:00 - 9:00 AM" },
  { sport: "Futsal", camp1: "9:00 - 10:00 AM", camp2: "9:00 - 10:00 AM" },
  { sport: "Basketball (PM)", camp1: "4:00 - 5:00 PM", camp2: "4:00 - 5:00 PM" },
]

export function CampSchedule() {
  return (
    <section id="schedule" className="relative bg-card/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left label column */}
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Schedule</span>
            </div>
            <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Pick Your<br />Batch
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              All camps run Monday to Thursday each week. Choose Camp 1, Camp 2, or register for both and never miss a beat.
            </p>

            {/* Camp date chips */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="inline-flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 px-5 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-primary">Camp 1</span>
                  <span className="text-sm font-bold text-foreground">6 April - 23 April 2026</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-5 py-3">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-transparent" />
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Camp 2</span>
                  <span className="text-sm font-bold text-foreground">27 April - 14 May 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right schedule table */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-xl border border-border">
              {/* Header */}
              <div className="grid grid-cols-3 bg-secondary/70 px-5 py-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Sport</span>
                <span className="text-center text-[11px] font-semibold uppercase tracking-widest text-primary">Camp 1</span>
                <span className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Camp 2</span>
              </div>

              {/* Rows */}
              {scheduleData.map((item, index) => (
                <div
                  key={item.sport}
                  className={`grid grid-cols-3 items-center px-5 py-4 transition-colors hover:bg-primary/[0.03] ${
                    index < scheduleData.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-sm font-semibold text-foreground">{item.sport}</span>
                  <span className="text-center text-sm text-foreground">{item.camp1}</span>
                  <span className="text-center text-sm text-muted-foreground">{item.camp2}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[13px] text-muted-foreground">
              Mon - Thu each week. Participants may register for one or multiple sports & camps.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
