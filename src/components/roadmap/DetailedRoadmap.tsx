"use client"

import { motion } from "framer-motion"
import { Circle, Clock, Code2, FileSearch, Rocket, Shield, Target, Users, Sparkles, ArrowRight, DollarSign, Heart, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const phases = [
    {
        id: 1,
        title: "Analyse & Design",
        status: "waiting",
        duration: "~3 mois",
        description: "Définition des spécifications techniques et fonctionnelles avec les partenaires fondateurs. Conception de l'architecture IA et des workflows métier.",
        color: "blue",
        items: [
            { icon: FileSearch, text: "Analyse des besoins métier intérim" },
            { icon: Users, text: "Ateliers avec partenaires fondateurs" },
            { icon: Target, text: "Spécifications fonctionnelles détaillées" },
            { icon: Code2, text: "Architecture technique & choix IA" }
        ]
    },
    {
        id: 2,
        title: "Développement Sprint",
        status: "waiting",
        duration: "~15 mois",
        description: "Développement agile en cycles courts. Livraisons toutes les 2 semaines pour validation continue par la communauté.",
        color: "indigo",
        items: [
            { icon: Zap, text: "Sprints de 2 semaines" },
            { icon: Code2, text: "Développement modules core" },
            { icon: Users, text: "Tests avec beta-testeurs" },
            { icon: Rocket, text: "Déploiement continu" }
        ]
    },
    {
        id: 3,
        title: "Production",
        status: "waiting",
        duration: "~6 mois",
        description: "Audit de sécurité externe, optimisation des performances, et déploiement final de la version 1.0.",
        color: "emerald",
        items: [
            { icon: Shield, text: "Audit sécurité externe" },
            { icon: Zap, text: "Optimisation performances" },
            { icon: Target, text: "Tests de charge" },
            { icon: Rocket, text: "Lancement v1.0" }
        ]
    }
]

const colorVariants: Record<string, { gradient: string; border: string; bg: string; text: string }> = {
    blue: {
        gradient: "from-blue-500/20 to-transparent",
        border: "border-blue-500/20",
        bg: "bg-blue-500/10",
        text: "text-blue-400"
    },
    indigo: {
        gradient: "from-indigo-500/20 to-transparent",
        border: "border-indigo-500/20",
        bg: "bg-indigo-500/10",
        text: "text-indigo-400"
    },
    emerald: {
        gradient: "from-emerald-500/20 to-transparent",
        border: "border-emerald-500/20",
        bg: "bg-emerald-500/10",
        text: "text-emerald-400"
    }
}

export function DetailedRoadmap() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                            <DollarSign className="w-4 h-4 text-amber-400" />
                            <span className="text-sm text-amber-400 font-medium">Campagne de Crowdfunding en cours</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="text-white">Roadmap </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                                Projet
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                            Le développement démarrera dès que le seuil de financement sera atteint.
                            <br />
                            <span className="text-blue-400">La vitesse dépend de la puissance de la communauté.</span>
                        </p>

                        {/* Current Status */}
                        <div className="pt-8">
                            <div className="max-w-xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                                    </span>
                                    <span className="text-lg font-medium text-white">Statut actuel : Levée de fonds</span>
                                </div>
                                <p className="text-white/40 text-sm">
                                    Nous recherchons des partenaires fondateurs pour financer le développement.
                                    <br />
                                    Le projet démarrera dès que le seuil de 1500€/mois sera atteint.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Gradient Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            </section>

            {/* Timeline Visual */}
            <section className="relative py-16 md:py-24 border-t border-white/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Timeline estimée
                            </h2>
                            <p className="text-white/40">
                                Basé sur une contribution mensuelle de 1500€ → Livraison v1.0 en <span className="text-blue-400 font-medium">~24 mois</span>
                            </p>
                        </div>

                        {/* Timeline Bar */}
                        <div className="relative mb-16">
                            <div className="flex items-center justify-between relative">
                                {/* Line */}
                                <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2" />

                                {/* T0 - Now */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-[#030303] mb-2" />
                                    <span className="text-xs text-amber-400 font-medium">T0</span>
                                    <span className="text-xs text-white/40">Maintenant</span>
                                </div>

                                {/* Phase 1 */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-white/20 border-4 border-[#030303] mb-2" />
                                    <span className="text-xs text-white/60 font-medium">Phase 1</span>
                                    <span className="text-xs text-white/40">~3 mois</span>
                                </div>

                                {/* Phase 2 */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-white/20 border-4 border-[#030303] mb-2" />
                                    <span className="text-xs text-white/60 font-medium">Phase 2</span>
                                    <span className="text-xs text-white/40">~18 mois</span>
                                </div>

                                {/* Phase 3 / Launch */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-white/20 border-4 border-[#030303] mb-2" />
                                    <span className="text-xs text-white/60 font-medium">v1.0</span>
                                    <span className="text-xs text-white/40">~24 mois</span>
                                </div>
                            </div>
                        </div>

                        {/* Phases Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {phases.map((phase, index) => (
                                <PhaseCard key={phase.id} phase={phase} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Funding Impact Section */}
            <section className="relative py-16 md:py-24 border-t border-white/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                                <Zap className="w-4 h-4 text-blue-400" />
                                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">Impact du financement</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Plus de soutien = Plus de vitesse
                            </h2>
                            <p className="text-white/50 max-w-xl mx-auto">
                                La durée de développement est directement liée aux contributions mensuelles de la communauté.
                            </p>
                        </div>

                        {/* Funding Tiers */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                                <div className="text-3xl font-bold text-white mb-1">1500€</div>
                                <div className="text-sm text-white/40 mb-4">/ mois</div>
                                <div className="text-2xl font-bold text-amber-400 mb-1">24 mois</div>
                                <div className="text-xs text-white/40 uppercase tracking-wider">Standard</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-center relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-500 text-xs font-medium text-white">
                                    Recommandé
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">3000€</div>
                                <div className="text-sm text-white/40 mb-4">/ mois</div>
                                <div className="text-2xl font-bold text-blue-400 mb-1">12 mois</div>
                                <div className="text-xs text-white/40 uppercase tracking-wider">Rapide</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                                <div className="text-3xl font-bold text-white mb-1">6000€</div>
                                <div className="text-sm text-white/40 mb-4">/ mois</div>
                                <div className="text-2xl font-bold text-emerald-400 mb-1">6 mois</div>
                                <div className="text-xs text-white/40 uppercase tracking-wider">Ultra</div>
                            </div>
                        </div>

                        {/* Guarantee */}
                        <div className="mt-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-4 max-w-2xl mx-auto">
                            <Shield className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <div className="font-medium text-emerald-400 mb-1">Garantie 0 Risque</div>
                                <p className="text-sm text-white/50">
                                    Aucun prélèvement n'est effectué tant que le seuil de 1500€/mois n'est pas atteint.
                                    Si l'objectif n'est pas atteint, vous êtes intégralement remboursé.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 md:py-24">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <Heart className="w-4 h-4 text-rose-400" />
                            <span className="text-sm text-white/70">Devenez partenaire fondateur</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Participez à la création
                        </h2>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">
                            En tant que fondateur, vous contribuez au financement et vous bénéficiez
                            d'avantages exclusifs à vie sur la plateforme.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="/pricing"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all group"
                            >
                                Voir les offres Fondateur
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://github.com/interimaire-com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors group"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Voir sur GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
    const colors = colorVariants[phase.color]

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={cn(
                "group relative rounded-2xl border bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-500 hover:bg-white/[0.04]",
                colors.border
            )}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-white/40 font-medium uppercase tracking-wider border border-white/10">
                            En attente
                        </span>
                        <span className="text-xs text-white/30 font-mono">{phase.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Phase {phase.id}</h3>
                    <p className={cn("text-base font-medium", colors.text)}>{phase.title}</p>
                </div>
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    colors.bg
                )}>
                    <Circle className={cn("w-5 h-5", colors.text)} />
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-white/40 mb-5 leading-relaxed">
                {phase.description}
            </p>

            {/* Items */}
            <div className="space-y-2">
                {phase.items.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 text-sm p-2 rounded-lg bg-white/[0.02] border border-white/5"
                    >
                        <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-white/5">
                            <item.icon className="w-3.5 h-3.5 text-white/40" />
                        </div>
                        <span className="text-white/50">{item.text}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
