"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

export function RoadmapCalculator({ showLink = false }: { showLink?: boolean }) {
    const [funding, setFunding] = React.useState([1500])
    const amount = funding[0]
    const isLocked = amount < 1500

    // Calculate dates and duration based on funding
    // Base: 1500€ -> 24 months, Nov 2027
    // Max: 6000€ -> 6 months? (Just an example logic, adjusting to be reasonable)
    // Let's say:
    // 1500€ -> 24 months
    // 3000€ -> 12 months
    // 6000€ -> 6 months
    const calculateStats = (amt: number) => {
        if (amt < 1500) return { duration: 0, date: "", speed: "" }

        // Simple linear interpolation for demo
        // Max duration 24 months at 1500
        // Min duration 6 months at 6000
        const t = (amt - 1500) / (6000 - 1500) // 0 to 1
        const months = Math.round(24 - t * (24 - 6))

        const date = new Date()
        date.setMonth(date.getMonth() + months)
        const dateStr = date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

        let speed = "STANDARD"
        if (amt >= 4500) speed = "ULTRA"
        else if (amt >= 3000) speed = "RAPIDE"

        return { duration: months, date: dateStr, speed }
    }

    const stats = calculateStats(amount)

    return (
        <section className="container py-12 md:py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[120px] -z-10" />

            <div className="text-center space-y-4 mb-16 relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                    Roadmap <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500">Interactive</span>
                </h1>
                <p className="text-white/50 md:text-xl max-w-2xl mx-auto">
                    La vitesse de développement dépend de la puissance de la communauté.
                    <br />
                    <span className="text-violet-400">Simulez l'impact de votre soutien.</span>
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
                {/* Left Column: Controls & Stats */}
                <div className="space-y-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-violet-500/20 transition-colors duration-300 shadow-2xl shadow-black/50">
                    {/* Slider Section */}
                    <div className="space-y-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                Contribution Mensuelle Totale
                            </span>
                        </div>

                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">{amount}€</span>
                            <span className="text-xl text-muted-foreground">/ mois</span>
                        </div>

                        <div className="pt-6 pb-2">
                            <Slider
                                defaultValue={[1500]}
                                max={6000}
                                min={500}
                                step={100}
                                value={funding}
                                onValueChange={setFunding}
                                className="[&>.relative>.absolute]:bg-gradient-to-r [&>.relative>.absolute]:from-violet-600 [&>.relative>.absolute]:to-fuchsia-500"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-2 font-mono">
                                <span>500€</span>
                                <span>Seuil: 1500€</span>
                                <span>6000€</span>
                            </div>
                        </div>
                    </div>

                    {/* Projection Card */}
                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5 min-h-[200px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="text-lg font-medium text-white/50 mb-6 relative z-10">Projection</h3>

                        {isLocked ? (
                            <div className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <div className="text-2xl font-bold text-white">Projet en attente</div>
                                    <div className="text-red-400 flex items-center gap-2">
                                        <Lock className="w-4 h-4" />
                                        Le seuil de 1500€ n'est pas atteint.
                                    </div>
                                </div>

                                <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 flex gap-4 items-start">
                                    <ShieldCheck className="w-6 h-6 text-violet-400 shrink-0 mt-1" />
                                    <div className="space-y-1">
                                        <div className="font-medium text-violet-400">Garantie 0 Risque</div>
                                        <div className="text-sm text-white/50 leading-relaxed">
                                            Aucun prélèvement n'est effectué tant que l'objectif n'est pas atteint.
                                            Si vous avez contribué, vous êtes intégralement remboursé.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-white/50">Durée estimée</span>
                                    <span className="text-2xl font-bold text-white">{stats.duration} mois</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-white/50">Livraison V1.0</span>
                                    <span className="text-xl font-bold text-violet-400">{stats.date}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white/50">Vitesse</span>
                                    <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm font-bold border border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                        {stats.speed}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Sequencing */}
                <div className="relative space-y-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden flex flex-col hover:border-violet-500/20 transition-colors duration-300 shadow-2xl shadow-black/50">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 border border-violet-500/30">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-white">Séquencement</h2>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-[10px] font-mono text-green-400 uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Live Preview
                        </div>
                    </div>

                    {/* Phase Bar */}
                    <div className="relative h-16 w-full flex rounded-xl overflow-hidden mb-2 shadow-lg">
                        <div className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 flex items-center justify-center text-xs font-bold text-white border-r border-white/10 relative group">
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Phase 1
                        </div>
                        <div className="flex-[1.5] bg-gradient-to-r from-indigo-600 to-indigo-500 flex items-center justify-center text-xs font-bold text-white border-r border-white/10 relative group">
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Phase 2
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white relative group">
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Phase 3
                        </div>

                        {/* Locked Overlay */}
                        {isLocked && (
                            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10">
                                <div className="flex items-center gap-2 text-white/80 font-medium px-4 py-2 rounded-full border border-white/10 bg-white/5">
                                    <Lock className="w-4 h-4" />
                                    <span>Roadmap verrouillée</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between text-xs text-violet-400 font-mono mb-12 px-1">
                        <span>T0 (Maintenant)</span>
                        <span>Lancement</span>
                    </div>

                    {/* Steps List */}
                    <div className="space-y-8 relative flex-1 pl-2">
                        {/* Vertical Line */}
                        <div className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-violet-500/50 via-violet-500/10 to-transparent -z-10" />

                        <div className="flex gap-6 relative group">
                            <div className="w-10 h-10 rounded-full bg-black/40 border border-violet-500/50 flex items-center justify-center shrink-0 text-violet-400 font-bold z-10 shadow-[0_0_10px_rgba(139,92,246,0.2)] group-hover:scale-110 transition-transform duration-300">
                                1
                            </div>
                            <div className="space-y-1 pt-1">
                                <h3 className="font-bold text-white group-hover:text-violet-400 transition-colors">Analyse & Design</h3>
                                <p className="text-sm text-white/50">
                                    Définition des specs IA avec les partenaires fondateurs.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 relative group">
                            <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center shrink-0 text-white/50 font-bold z-10 group-hover:border-violet-500/50 group-hover:text-violet-400 transition-colors duration-300">
                                2
                            </div>
                            <div className="space-y-1 pt-1">
                                <h3 className="font-bold text-white group-hover:text-violet-400 transition-colors">Développement Sprint</h3>
                                <p className="text-sm text-white/50">
                                    Cycles courts. Livraisons toutes les 2 semaines.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 relative group">
                            <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center shrink-0 text-white/50 font-bold z-10 group-hover:border-violet-500/50 group-hover:text-violet-400 transition-colors duration-300">
                                3
                            </div>
                            <div className="space-y-1 pt-1">
                                <h3 className="font-bold text-white group-hover:text-violet-400 transition-colors">Production</h3>
                                <p className="text-sm text-white/50">
                                    Audit de sécurité et déploiement final.
                                </p>
                            </div>
                        </div>
                    </div>

                    {showLink && (
                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
                            <a
                                href="/roadmap"
                                className="group inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
                            >
                                Découvrir la Roadmap Détaillée
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
