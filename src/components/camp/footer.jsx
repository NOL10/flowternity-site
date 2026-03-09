import { Link } from 'react-router-dom'

export function CampFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="font-[var(--font-heading)] text-lg font-bold uppercase tracking-[0.75rem] text-foreground">
                FLOWTERNITY
              </span>
              <span className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Sports
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Bengaluru&apos;s premier multi-sport facility. 22,000 sq ft of world-class training infrastructure.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-1.5">
              {["Sports", "Schedule", "Pricing", "Register", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-[13px] text-muted-foreground transition-colors hover:text-primary">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Contact</h4>
            <div className="flex flex-col gap-1.5 text-[13px] text-muted-foreground">
              <a href="tel:9886696155" className="hover:text-primary">+91 98866 96155</a>
              <a href="tel:7795310645" className="hover:text-primary">+91 77953 10645</a>
              <p className="mt-2">Horamavu Kalkere Main Road, Bengaluru - 560043</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://www.flowternity.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:underline">
                flowternity.com
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
              <a href="https://www.instagram.com/flowternity_sports" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-[12px] text-muted-foreground md:flex-row">
          <span>&copy; 2026 Flowternity Sports. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://www.flowternity.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Website</a>
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
