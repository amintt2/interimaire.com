import { Header } from "@/components/landing/Header"
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero"
import { Footer } from "@/components/landing/Footer"
import { Features } from "@/components/landing/Features"
import { RoadmapCalculator } from "@/components/landing/RoadmapCalculator"
import { Pricing } from "@/components/landing/Pricing"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

// Unified Color Palette - Black, Grey, Violet
const colors = {
  base: "#030303",      // Pure black
  deep: "#0a0a0a",      // Slightly lighter black
  surface: "#111111",   // Dark grey surface
  card: "#161616",      // Card background
  border: "#262626",    // Border grey
  glow: "#8b5cf6",      // Violet glow
  accent: "#a855f7",    // Purple accent
}

// Section Transition Component - creates smooth gradient transitions between sections
function SectionTransition({
  id,
  from = colors.base,
  to = colors.base,
  height = "200px",
}: {
  id: string;
  from?: string;
  to?: string;
  height?: string;
}) {
  const gradientId = `gradient-${id}`

  return (
    <div
      className="w-full relative pointer-events-none"
      style={{ height, marginTop: '-1px' }}
    >
      {/* Wave SVG for organic transition */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        {/* Multiple wave layers for organic feel */}
        <path
          d="M0,80 C360,120 540,40 900,80 C1260,120 1380,40 1440,80 L1440,200 L0,200 Z"
          fill={to}
          opacity="0.4"
        />
        <path
          d="M0,100 C320,150 420,50 720,100 C1020,150 1120,50 1440,100 L1440,200 L0,200 Z"
          fill={to}
          opacity="0.6"
        />
        <path
          d="M0,120 C280,170 380,70 680,120 C980,170 1080,70 1440,120 L1440,200 L0,200 Z"
          fill={to}
          opacity="0.8"
        />
        <path
          d="M0,140 C240,190 340,90 640,140 C940,190 1040,90 1440,140 L1440,200 L0,200 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}

// Simple CTA Section for Contact
function ContactCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: colors.accent }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent pointer-events-none" />
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: `radial-gradient(circle, ${colors.glow}, transparent)` }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <MessageCircle className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-400 font-medium">Nous sommes à votre écoute</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Des questions ?
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
          Notre équipe de fondateurs est disponible pour vous expliquer la vision
          en détail et répondre à toutes vos questions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group"
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
    <div className="flex min-h-screen flex-col relative" style={{ backgroundColor: colors.base }}>
      {/* Subtle gradient background like other pages */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.08), transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(168, 85, 247, 0.05), transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(192, 132, 252, 0.05), transparent 50%)
          `,
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

          {/* Transition from Hero to Features */}
          <SectionTransition id="hero-to-features" from={colors.base} to={colors.base} height="150px" />

          {/* Features Section */}
          <div style={{ backgroundColor: colors.base }} className="relative">
            <Features showLink={true} />
          </div>

          {/* Transition from Features to Roadmap */}
          <SectionTransition id="features-to-roadmap" from={colors.base} to={colors.base} height="120px" />

          <div style={{ backgroundColor: colors.base }} className="relative">
            <RoadmapCalculator showLink={true} />
          </div>

          {/* Transition to Pricing */}
          <SectionTransition id="roadmap-to-pricing" from={colors.base} to={colors.base} height="120px" />

          {/* Pricing Section */}
          <div className="relative overflow-hidden" style={{ backgroundColor: colors.base }}>
            {/* Subtle radial glow for depth */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(ellipse 70% 50% at 50% 30%, ${colors.glow}20, transparent 70%)`
              }}
            />
            <div className="relative z-10">
              <Pricing />
            </div>
          </div>

          {/* Transition to Contact */}
          <SectionTransition id="pricing-to-contact" from={colors.base} to={colors.base} height="80px" />

          <ContactCTA />

          {/* Transition to Footer */}
          <SectionTransition id="contact-to-footer" from={colors.base} to="#0a0e1a" height="80px" />
        </main>
        <Footer />
      </div>
    </div>
  )
}

