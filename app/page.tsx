import { CampNavbar } from "@/components/camp/navbar"
import { CampHero } from "@/components/camp/hero"
import { CampSports } from "@/components/camp/sports"
import { CampSchedule } from "@/components/camp/schedule"
import { CampHighlights } from "@/components/camp/highlights"
import { CampFacility } from "@/components/camp/facility"
import { CampHowItWorks } from "@/components/camp/how-it-works"
import { CampPricing } from "@/components/camp/pricing"
import { CampRegistration } from "@/components/camp/registration"
import { CampContact } from "@/components/camp/contact"
import { CampFooter } from "@/components/camp/footer"
import { FloatingCTA } from "@/components/camp/floating-cta"

export default function SummerCampPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CampNavbar />
      <CampHero />
      <CampHighlights />
      <CampSports />
      <CampSchedule />
      <CampFacility />
      <CampHowItWorks />
      <CampPricing />
      <CampRegistration />
      <CampContact />
      <CampFooter />
      <FloatingCTA />
    </main>
  )
}
