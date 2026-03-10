"use client"

import { useState } from "react"

const faqs = [
  { q: "What age groups can join?", a: "Open to all young athletes. Designed for beginners through advanced players looking to develop their skills." },
  { q: "Do I need my own equipment?", a: "Basketball: shoes required, personal ball recommended. Skating: skates & safety gear required. Futsal: non-marking shoes required, ball purchased from Flowternity." },
  { q: "Can my child join multiple camps?", a: "Yes! Register for 2+ camps and get Rs 500 off per camp with the multi-camp discount." },
  { q: "What happens at the end?", a: "Final tournament with trophies & goodies for winners. All participants receive certificates of completion." },
  { q: "What are the payment options?", a: "UPI, credit/debit cards, and net banking. Payment processed securely at registration." },
]

export function CampContact() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section id="contact" className="relative bg-card/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - Location */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Find Us</span>
            </div>
            <h2 className="mb-8 font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Visit Our<br />Facility
            </h2>

            {/* Address card */}
            <div className="mb-6 rounded-xl border border-border bg-background p-5">
              <h3 className="mb-1 text-sm font-bold text-foreground">Flowternity Sports</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                1456, Old Flour Mill Road, Dodda Kempaih Layout,<br />
                Kalkere, Horamavu, Bengaluru - 560043
              </p>
              <a
                href="https://www.google.com/maps/place/Flowternity+Sports+-+Multi+Sport+Facility/@13.0353296,77.6703963,975m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1185e1327d47:0xc21f974f50d32d2a!8m2!3d13.0353296!4d77.6703963!16s%2Fg%2F11w_y1m6vk?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline"
              >
                Get Directions
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
            </div>

            {/* Phone */}
            <div className="mb-8 flex gap-4">
              <a href="tel:9886696155" className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                +91 98866 96155
              </a>
              <a href="tel:7795310645" className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                +91 77953 10645
              </a>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3!2d77.6703963!3d13.0353296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1185e1327d47:0xc21f974f50d32d2a!2zMTPCsDAyJzEyLjYiTiA3N8KwNDAnMTQuNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(1) brightness(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flowternity Sports location"
              />
            </div>
          </div>

          {/* Right - FAQ */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">FAQ</span>
            </div>
            <h2 className="mb-8 font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Got<br />Questions?
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={faq.q} className={`overflow-hidden rounded-lg border transition-colors ${openFaq === idx ? "border-primary/30 bg-background" : "border-border bg-background"}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-[14px] font-semibold text-foreground">{faq.q}</span>
                    <svg
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all ${openFaq === idx ? "max-h-40 pb-4" : "max-h-0"}`}>
                    <p className="px-5 text-[13px] leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
