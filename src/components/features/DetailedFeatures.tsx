"use client"

import { FileText, Clock, Bot, Users, Briefcase, Calculator, Database, Calendar, Zap, Shield, FileCheck, TrendingUp, Lock } from "lucide-react"
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
        target: sectionRef,
            offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

const isLeft = index % 2 === 0

return (
    <motion.div
        ref={sectionRef}
        style={{ opacity, y }}
        className="container"
    >
        <div className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
            isLeft ? "" : "lg:grid-flow-dense"
        )}>
            {/* Content Side */}
            <div className={cn("space-y-8", isLeft ? "lg:pr-12" : "lg:pl-12 lg:col-start-2")}>
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-4">
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

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                </div>

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
                            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:from-white/10 hover:border-blue-500/30 transition-all duration-300">
                                {keyword.icon && (
                                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <keyword.icon className="h-6 w-6 text-blue-400" />
                                    </div>
                                )}
                                <div className="flex-1 pt-1">
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

            {/* Visual Side - Decorative Blur Effects */}
            <div className={cn("relative min-h-[500px]", isLeft ? "lg:col-start-2" : "lg:col-start-1")}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative h-full"
                >
                    {/* Large blur orb */}
                    <div className={cn(
                        "absolute inset-0 rounded-full blur-3xl opacity-20",
                        `bg-gradient-to-br ${feature.gradient}`
                    )} />

                    {/* Smaller accent blur */}
                    <div className={cn(
                        "absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl opacity-30",
                        `bg-gradient-to-br ${feature.gradient}`
                    )} />

                    {/* Icon showcase */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className={cn(
                                "h-48 w-48 rounded-3xl flex items-center justify-center",
                                "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl",
                                "shadow-2xl"
                            )}>
                                <feature.icon className="h-24 w-24 text-blue-400" />
                            </div>
                            {/* Floating particles */}
                            <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-blue-500/30 blur-sm animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-cyan-500/30 blur-sm animate-pulse delay-75" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
)
}
