const testimonials = [
  {
    id: 1,
    videoUrl: "/testimonials/parent%20testmonial%201.mp4",
    thumbnail: "/testimonials/parent%20testmonial%201.mp4",
    name: "Parent Testimonial",
    sport: "Basketball Camp",
    quote: "Amazing coaching and facility! My child's skills improved dramatically."
  },
  {
    id: 2,
    videoUrl: "/testimonials/preetham%20.mp4",
    thumbnail: "/testimonials/preetham%20.mp4",
    name: "Preetham",
    sport: "skating",
    quote: "Best sports camp experience! Professional coaching and great facilities."
  },
  {
    id: 3,
    videoUrl: "/testimonials/kid%206.mp4",
    thumbnail: "/testimonials/kid%206.mp4",
    name: "Student Athlete",
    sport: "Basketball",
    quote: "Learned so much in just a few weeks. The training methods are excellent!"
  }
]

export function CampTestimonials() {
  return (
    <section className="relative bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Testimonials</span>
        </div>

        <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          Hear From<br />Our Athletes
        </h2>
        <p className="mb-12 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Real stories from young athletes and parents who have experienced the Flowternity difference.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-secondary/50">
                <video
                  src={testimonial.videoUrl}
                  className="h-full w-full object-cover"
                  controls
                  poster={testimonial.thumbnail}
                  title={`Testimonial from ${testimonial.name}`}
                  preload="metadata"
                />

                {/* Play Button Overlay - Only show when video is paused */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm">
                    <svg className="h-6 w-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-[11px] text-muted-foreground">{testimonial.sport}</p>
                  </div>
                </div>

                <blockquote className="text-[13px] leading-relaxed text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* More Testimonials - Subtle Link */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-[13px] text-muted-foreground">
            Want to see more testimonials from our athletes and parents?
          </p>
          <a
            href="https://drive.google.com/drive/folders/1LaqRKZaOnuaXHwqTdsAHd2QbIfpnb6p6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:underline"
          >
            View More Testimonials <span className="text-primary"></span>
          </a>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="mb-3 text-lg font-bold text-foreground">Share Your Experience</h3>
            <p className="mb-6 text-[14px] text-muted-foreground">
              Been part of our camps? We'd love to hear your story and feature your testimonial.
            </p>
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Join Our Camp
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
