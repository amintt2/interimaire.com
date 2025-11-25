"use client"

import { FileText, Clock, Bot, Users, Briefcase, Calculator, Database, Calendar, Zap, Shield, Lock } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import CircularText from "@/components/ui/shadcn-io/circular-text"
import { ColourfulText } from "@/components/ui/shadcn-io/colourful-text"
import DecryptedText from "@/components/ui/shadcn-io/decrypted-text"
import { FlipWords } from "@/components/ui/shadcn-io/flip-words"
import { RollingText } from "@/components/ui/shadcn-io/rolling-text"
import ScrollVelocity from "@/components/ui/shadcn-io/scroll-velocity"
import { ShimmeringText } from "@/components/ui/shadcn-io/shimmering-text"
import { useRef } from "react"

const features = [
    {
        title: "Module Candidats",
        subtitle: "ATS Intelligent",
        description: "Système complet de gestion des candidats et intérimaires avec parsing automatique et intelligence artificielle",
        icon: Users,
        gradient: "from-blue-500 via-cyan-500 to-blue-500",
        flipWords: ["intelligent", "automatisé", "moderne", "puissant"],
        keywords: [
            { text: "Parsing automatique des CVs avec IA", highlight: "automatique", secure: false },
            { text: "Base de données candidats centralisée", highlight: "Base de données", secure: false, icon: Database },
            { text: "Calendrier de disponibilités en temps réel", highlight: "Calendrier", secure: false, icon: Calendar },
            { text: "Recherche avancée multi-critères", highlight: "Recherche", secure: false },
            { text: "Historique complet et évaluations", highlight: "Historique", secure: false }
        ]
    },
    {
        title: "CRM Client",
        subtitle: "Gestion Commerciale",
        description: "Pilotage commercial et gestion des missions avec suivi en temps réel",
        icon: Briefcase,
        gradient: "from-indigo-500 via-purple-500 to-indigo-500",
        flipWords: ["efficace", "centralisé", "intuitif", "complet"],
        keywords: [
            { text: "Base de données clients sécurisée", highlight: "Base de données", secure: false, icon: Database },
            { text: "Gestion des commandes de mission", highlight: "Gestion", secure: false },
            { text: "Calcul automatique des marges", highlight: "automatique", secure: false, icon: Calculator },
            { text: "Suivi en temps réel des coefficients", highlight: "temps réel", secure: false },
            { text: "Tableau de bord commercial dynamique", highlight: "Tableau de bord", secure: false }
        ]
    },
    {
        title: "Admin & Légal",
        subtitle: "Automatisation Sécurisée",
        description: "Génération automatique des contrats et déclarations avec signature électronique certifiée",
        icon: FileText,
        gradient: "from-emerald-500 via-teal-500 to-emerald-500",
        flipWords: ["sécurisé", "automatisé", "certifié", "conforme"],
        keywords: [
            { text: "Génération automatique des contrats CMD/CM", highlight: "automatique", secure: false },
            { text: "Signature électronique eIDAS certifiée", highlight: "Signature électronique", secure: true, icon: Shield },
            { text: "DPAE automatisée vers URSSAF", highlight: "DPAE", secure: true },
            { text: "Alertes de sécurité automatiques", highlight: "sécurité", secure: true, icon: Shield },
            { text: "Archivage sécurisé des documents", highlight: "sécurisé", secure: true, icon: Lock }
        ]
    },
    {
        title: "Gestion Temps",
        subtitle: "Workflow Optimisé",
        description: "Suivi précis des heures avec validation workflow et export automatique",
        icon: Clock,
        gradient: "from-orange-500 via-amber-500 to-orange-500",
        flipWords: ["précis", "rapide", "fiable", "automatique"],
        keywords: [
            { text: "Calendrier de saisie intelligent", highlight: "Calendrier", secure: false, icon: Calendar },
            { text: "Gestion heures normales et supplémentaires", highlight: "Gestion", secure: false },
            { text: "Workflow de validation automatique", highlight: "automatique", secure: false, icon: Zap },
            { text: "Gestion des absences et arrêts", highlight: "absences", secure: false },
            { text: "Export automatisé vers logiciels de paie", highlight: "Export", secure: false }
        ]
    },
    {
        title: "Paie & Facturation",
        subtitle: "Automatisation Financière",
        description: "Pré-paie et facturation automatisée avec calculs intelligents et sécurisés",
        icon: Calculator,
        gradient: "from-pink-500 via-rose-500 to-pink-500",
        flipWords: ["automatique", "précis", "sécurisé", "intelligent"],
        keywords: [
            { text: "Calcul automatique IFM et CP", highlight: "automatique", secure: false, icon: Calculator },
            { text: "Export sécurisé des variables de paie", highlight: "sécurisé", secure: true },
            { text: "Gestion sécurisée des acomptes", highlight: "sécurisée", secure: true },
            { text: "Facturation client automatique", highlight: "automatique", secure: false, icon: Zap },
            { text: "Suivi des paiements en temps réel", highlight: "temps réel", secure: false }
        ]
    },
    {
        title: "IA & Innovation",
        subtitle: "Intelligence Artificielle",
        description: "Intelligence artificielle au service de l'intérim avec matching prédictif et automatisation avancée",
        icon: Bot,
        gradient: "from-violet-600 via-fuchsia-600 to-violet-600",
        flipWords: ["intelligent", "prédictif", "innovant", "révolutionnaire"],
        keywords: [
            { text: "Matching prédictif par IA avancée", highlight: "IA", secure: false, icon: Bot },
            { text: "Rédaction automatique d'annonces", highlight: "automatique", secure: false },
            { text: "Parsing intelligent de documents", highlight: "intelligent", secure: false },
            { text: "Chatbot candidats WhatsApp/SMS", highlight: "Chatbot", secure: false, icon: Bot },
            { text: "Analyse prédictive des besoins", highlight: "prédictive", secure: false }
        ]
    }
]

export function DetailedFeatures() {
    return (
        <>
            <section className="relative py-24 space-y-16 overflow-hidden">
                {/* Hero Section with Circular Text */}
                <div className="container">
                    <div className="text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <CircularText
                                text="INNOVATION • AUTOMATISATION • INTELLIGENCE • "
                                onHover="speedUp"
                                spinDuration={20}
                                className="text-blue-400 tracking-widest text-sm"
                            />

                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                                    Découvrez nos{" "}
                                    <ColourfulText
                                        text="Fonctionnalités"
                                        className="inline"
                                    />
                                </h1>
                                <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl">
                                    Une plateforme tout-en-un qui révolutionne la gestion d'agence d'intérim
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Scroll Velocity Divider - Reduced size */}
            <ScrollVelocity
                texts={['ATS • CRM • ADMIN • TEMPS • PAIE • IA', 'ATS • CRM • ADMIN • TEMPS • PAIE • IA']}
                velocity={100}
                className="text-white/20 text-5xl md:text-6xl font-bold"
            />

            <section className="relative py-24 space-y-48 overflow-hidden">
                {/* Feature Sections - Centered */}
                <div className="space-y-48">
                    {features.map((feature, index) => (
                        <FeatureSection key={index} feature={feature} index={index} />
                    ))}
                </div>
            </section>

            {/* Bottom Scroll Velocity - Reduced size */}
            <ScrollVelocity
                texts={['INNOVATION • AUTOMATISATION • INTELLIGENCE', 'INNOVATION • AUTOMATISATION • INTELLIGENCE']}
                velocity={80}
                className="text-white/20 text-5xl md:text-6xl font-bold"
            />

            <section className="relative py-24 overflow-hidden">
                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="container text-center space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                        <Zap className="w-5 h-5 text-blue-400" />
                        <ShimmeringText
                            className="text-blue-400 font-medium text-base"
                            text="Besoin de fonctionnalités spécifiques ? Nous développons vos modules sur-mesure en 3 mois."
                            wave
                        />
                    </div>
                </motion.div>
            </section>
        </>
    )
}

function FeatureSection({ feature, index }: { feature: typeof features[0]; index: number }) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

    return (
        <motion.div
            ref={sectionRef}
            style={{ opacity, y }}
            className="container relative"
        >
            {/* Gradient background under text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={cn(
                    "w-full max-w-4xl h-96 rounded-full blur-3xl opacity-10",
                    `bg-gradient-to-br ${feature.gradient}`
                )} />
            </div>

            {/* Centered Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className={cn(
                            "h-20 w-20 rounded-2xl flex items-center justify-center",
                            "bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm"
                        )}>
                            <feature.icon className="h-10 w-10 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-sm text-blue-400 font-medium uppercase tracking-wider">{feature.subtitle}</p>
                            <RollingText className="text-4xl md:text-5xl font-bold text-white" text={feature.title} />
                        </div>
                    </div>

                    <div className="text-2xl md:text-3xl text-muted-foreground font-light">
                        <FlipWords
                            words={feature.flipWords}
                            duration={2500}
                            className="text-blue-400 font-semibold"
                        />{" "}
                        <span className="text-white">pour votre agence</span>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        {feature.description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-5"
                >
                    {feature.keywords.map((keyword, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:from-white/10 hover:border-blue-500/30 transition-all duration-300 max-w-2xl mx-auto">
                                {keyword.icon && (
                                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <keyword.icon className="h-6 w-6 text-blue-400" />
                                    </div>
                                )}
                                <div className="flex-1 pt-1 text-left">
                                    {keyword.secure ? (
                                        <div className="text-slate-300 text-lg leading-relaxed">
                                            {keyword.text.split(keyword.highlight).map((part, i, arr) => (
                                                <span key={i}>
                                                    {part}
                                                    {i < arr.length - 1 && (
                                                        <DecryptedText
                                                            text={keyword.highlight}
                                                            speed={50}
                                                            maxIterations={10}
                                                            sequential={true}
                                                            className="font-semibold text-emerald-400 inline"
                                                            encryptedClassName="font-semibold text-muted-foreground inline"
                                                            animateOn="hover"
                                                        />
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-slate-300 text-lg leading-relaxed">
                                            {keyword.text.split(keyword.highlight).map((part, i, arr) => (
                                                <span key={i}>
                                                    {part}
                                                    {i < arr.length - 1 && (
                                                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                                            {keyword.highlight}
                                                        </span>
                                                    )}
                                                </span>
                                            ))}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}
