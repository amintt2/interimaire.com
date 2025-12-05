import { Header } from "@/components/landing/Header"
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero"
import { Footer } from "@/components/landing/Footer"
import { Features } from "@/components/landing/Features"
import { RoadmapCalculator } from "@/components/landing/RoadmapCalculator"
import { Pricing } from "@/components/landing/Pricing"
import { Contact } from "@/components/landing/Contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative bg-[#030303]">
      {/* Organic Background Transition */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 100%, #0f172a, #020617 40%, #000000 100%)",
          opacity: 0.8
        }}
      />

      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroGeometric
            badge="Campagne de Crowdfunding active • Phase 1"
            title1="L'intérim réinventé."
            title2="Open Source & IA."
            description="La première plateforme de gestion d'intérim construite par la communauté, pour la communauté. 100% Transparent. 100% Automatisé."
          />
          {/* Teaser Sections - Reduced padding/content if needed, or kept full for "One Page" feel with routing options */}
          <Features showLink={true} />
          <RoadmapCalculator showLink={true} />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
