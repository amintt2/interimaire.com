import { Header } from "@/components/landing/Header"
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero"
import { Footer } from "@/components/landing/Footer"
import { Features } from "@/components/landing/Features"
import { RoadmapCalculator } from "@/components/landing/RoadmapCalculator"
import { Pricing } from "@/components/landing/Pricing"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

// Floating Gradient Bubbles Component
function FloatingBubbles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large blue bubble - top left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl animate-pulse"
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent 70%)",
          animationDuration: "8s"
        }}
      />

      {/* Cyan bubble - top right */}
      <div
        className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          animation: "pulse 10s ease-in-out infinite"
        }}
      />

      {/* Amber bubble - middle */}
      <div
        className="absolute top-[40%] -left-20 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl"
        style={{
          background: "radial-gradient(circle, #f59e0b, transparent 70%)",
          animation: "pulse 12s ease-in-out infinite"
        }}
      />

      {/* Violet bubble - bottom right */}
      <div
        className="absolute top-[60%] -right-40 w-[550px] h-[550px] rounded-full opacity-[0.04] blur-3xl"
        style={{
          background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
          animation: "pulse 9s ease-in-out infinite"
        }}
      />

      {/* Deep purple bubble - bottom */}
      <div
        className="absolute -bottom-32 left-1/3 w-[600px] h-[400px] rounded-full opacity-[0.03] blur-3xl"
        style={{
          background: "radial-gradient(ellipse, #7c3aed, transparent 70%)",
          animation: "pulse 11s ease-in-out infinite"
        }}
      />
    </div>
  )
}

// Simple CTA Section for Contact - Blue theme
function ContactCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#030303]">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <MessageCircle className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-400 font-medium">Nous sommes à votre écoute</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Des questions ?
        </h2>
        <p className="text-lg text-white/50 max-w-xl mx-auto mb-8">
          Notre équipe de fondateurs est disponible pour vous expliquer la vision
          en détail et répondre à toutes vos questions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all group"
        >
          Nous contacter
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative bg-[#030303]">
      {/* Floating gradient bubbles for visual interest */}
      <FloatingBubbles />

      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroGeometric
            badge="Campagne de Crowdfunding active • Phase 1"
            title1="L'intérim réinventé."
            title2="Open Source & IA."
            description="La première plateforme de gestion d'intérim construite par la communauté, pour la communauté. 100% Transparent. 100% Automatisé."
          />

          {/* Features Section - Blue theme */}
          <section className="relative bg-[#030303]">
            <Features showLink={true} />
          </section>

          {/* Roadmap Section - Gold/Amber theme */}
          <section className="relative bg-[#030303]">
            <RoadmapCalculator showLink={true} />
          </section>

          {/* Pricing Section - Violet theme */}
          <section className="relative bg-[#030303]">
            <Pricing />
          </section>

          {/* Contact CTA */}
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
