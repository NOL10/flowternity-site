import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const locations = [
  "BTM Layout",
  "Hennur - Byrathi",
  "Horamavu",
  "Jakkur",
  "Jalahalli",
  "Kadugodi",
  "Mysore Road",
  "Sahakar Nagar",
  "Sarjapur",
  "CVR",
  "Yelahanka RT"
];

export function OtherLocations() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">More Locations</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl mb-4">
            Camps Across<br />Bengaluru
          </h2>
          <p className="max-w-2xl mx-auto text-[15px] leading-relaxed text-muted-foreground">
            Besides our main facility, we conduct summer camps in schools across these locations.
            Join the fun at a location near you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Locations Grid */}
          <div>
            <div className="bg-card/50 rounded-xl p-8 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Camp Locations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{location}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Note:</strong> These camps are conducted in partnership with schools across Bengaluru.
                </p>
                <p className="text-sm text-muted-foreground">
                  Programs may vary by location. Contact us for specific details.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-card/50 rounded-xl p-8 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-6">Get Camp Information</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Interested in our camps at any of these locations? Get in touch with us for details about schedules, programs, and registration.
              </p>

              <div className="space-y-6">
                {/* Phone Contact */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Speak directly with our camp coordinators
                    </p>
                    <div className="space-y-1">
                      <a href="tel:9886696155" className="block text-sm text-primary hover:underline">
                        +91 98866 96155
                      </a>
                      <a href="tel:7795310645" className="block text-sm text-primary hover:underline">
                        +91 77953 10645
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Send us your questions and requirements
                    </p>
                    <a href="mailto:info@flowternity.com" className="block text-sm text-primary hover:underline">
                      info@flowternity.com
                    </a>
                  </div>
                </div>

                {/* Timing Information */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Quick Response Guaranteed
                  </p>
                  <p className="text-xs text-muted-foreground">
                    We typically respond within 2-4 hours during business hours. For urgent inquiries, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
