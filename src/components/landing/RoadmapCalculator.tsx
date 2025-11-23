"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

export function RoadmapCalculator() {
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
        <section className="container py-12 md:py-24">
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                    Roadmap Interactive
                </h1>
                <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
                    La vitesse de développement dépend de la puissance de la communauté.
                    <br />
                    <span className="text-blue-400">Simulez l'impact de votre soutien.</span>
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Left Column: Controls & Stats */}
                <div className="space-y-8 bg-card/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    {/* Slider Section */}
                    <div className="space-y-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                Contribution Mensuelle Totale
                            </span>
                        </div>

                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-white">{amount}€</span>
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
                                className="[&>.relative>.absolute]:bg-blue-600"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-2 font-mono">
                                <span>500€</span>
                                <span>Seuil: 1500€</span>
                                <span>6000€</span>
                            </div>
                        </div>
                    </div>

                    {/* Projection Card */}
                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5 min-h-[200px] flex flex-col justify-center">
                        <h3 className="text-lg font-medium text-muted-foreground mb-6">Projection</h3>

                        {isLocked ? (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="text-2xl font-bold text-white">Projet en attente</div>
                                    <div className="text-red-400">Le seuil de 1500€ n'est pas atteint.</div>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-4 items-start">
                                    <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                    <div className="space-y-1">
                                        <div className="font-medium text-blue-400">Garantie 0 Risque</div>
                                        <div className="text-sm text-muted-foreground leading-relaxed">
                                            Aucun prélèvement n'est effectué tant que l'objectif n'est pas atteint.
                                            Si vous avez contribué, vous êtes intégralement remboursé.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-muted-foreground">Durée estimée</span>
                                    <span className="text-2xl font-bold text-white">{stats.duration} mois</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-muted-foreground">Livraison V1.0</span>
                                    <span className="text-xl font-bold text-blue-400">{stats.date}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Vitesse</span>
                                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold border border-blue-500/30">
                                        {stats.speed}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Sequencing */}
                <div className="relative space-y-8 bg-card/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 text-blue-400">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-white">Séquencement</h2>
                        </div>
                        <div className="px-2 py-1 rounded border border-white/10 text-[10px] font-mono text-muted-foreground uppercase">
                            Live Preview
                        </div>
                    </div>

                    {/* Phase Bar */}
                    <div className="relative h-16 w-full flex rounded-lg overflow-hidden mb-2">
                        <div className="flex-1 bg-green-600/80 flex items-center justify-center text-xs font-bold text-white/90 border-r border-white/10">
                            Phase 1: Architecture
                        </div>
                        <div className="flex-[1.5] bg-indigo-500/80 flex items-center justify-center text-xs font-bold text-white/90 border-r border-white/10">
                            Phase 2: Core Dev
                        </div>
                        <div className="flex-1 bg-teal-500/80 flex items-center justify-center text-xs font-bold text-white/90">
                            Phase 3: Beta
                        </div>

                        {/* Locked Overlay */}
                        {isLocked && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                                <div className="flex items-center gap-2 text-white/80 font-medium">
                                    <Lock className="w-4 h-4" />
                                    <span>Roadmap verrouillée</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between text-xs text-blue-400 font-mono mb-12">
                        <span>T0 (Maintenant)</span>
                        <span>Lancement</span>
                    </div>

                    {/* Steps List */}
                    <div className="space-y-8 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-white/10 -z-10" />

                        <div className="flex gap-6 relative">
                            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-blue-400 font-bold z-10">
                                1
                            </div>
                            <div className="space-y-1 pt-1">
                                <h3 className="font-bold text-white">Analyse & Design</h3>
                                <p className="text-sm text-muted-foreground">
                                    Définition des specs IA avec les partenaires fondateurs.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 relative">
                            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-blue-400 font-bold z-10">
                                2
                            </div>
                            <div className="space-y-1 pt-1">
                                <h3 className="font-bold text-white">Développement Sprint</h3>
                                <p className="text-sm text-muted-foreground">
                                    Cycles courts. Livraisons toutes les 2 semaines.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 relative">
                            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-blue-400 font-bold z-10">
                                3
                            </div>
                            <div className="space-y-1 pt-1">
                                <h3 className="font-bold text-white">Production</h3>
                                <p className="text-sm text-muted-foreground">
                                    Audit de sécurité et déploiement final.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
