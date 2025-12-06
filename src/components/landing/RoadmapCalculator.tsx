"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Lock } from "lucide-react"

export function RoadmapCalculator({ showLink = false }: { showLink?: boolean }) {
    const [funding, setFunding] = React.useState([1500])
    const amount = funding[0]
    const isLocked = amount < 1500

    const calculateStats = (amt: number) => {
        if (amt < 1500) return { duration: 0, date: "", speed: "" }
        const t = (amt - 1500) / (6000 - 1500)
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
        <section className="container py-24 relative overflow-hidden">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                    Roadmap <span className="text-amber-400">Interactive</span>
                </h2>
                <p className="text-white/50 md:text-xl max-w-2xl mx-auto">
                    La vitesse de développement dépend de la puissance de la communauté.
                    <br />
                    <span className="text-amber-400">Simulez l'impact de votre soutien.</span>
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Left Column: Controls & Stats */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-amber-500/30">
                    <div className="space-y-6">
                        <div>
                            <span className="text-sm font-medium text-white/40 uppercase tracking-wider">
                                Contribution Mensuelle
                            </span>
                        </div>

                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-amber-400">{amount}€</span>
                            <span className="text-xl text-white/40">/ mois</span>
                        </div>

                        <div className="pt-4 pb-2">
                            <Slider
                                defaultValue={[1500]}
                                max={6000}
                                min={500}
                                step={100}
                                value={funding}
                                onValueChange={setFunding}
                                className="[&>.relative>.absolute]:bg-gradient-to-r [&>.relative>.absolute]:from-amber-500 [&>.relative>.absolute]:to-orange-500"
                            />
                            <div className="flex justify-between text-xs text-white/30 mt-2 font-mono">
                                <span>500€</span>
                                <span>Seuil: 1500€</span>
                                <span>6000€</span>
                            </div>
                        </div>
                    </div>

                    {/* Projection */}
                    <div className="mt-8 pt-6 border-t border-white/[0.06]">
                        <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">Projection</h3>

                        {isLocked ? (
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Lock className="w-5 h-5 text-white/30" />
                                    <span className="text-white/50">Seuil minimum non atteint</span>
                                </div>
                                <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 flex gap-3 items-start">
                                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-medium text-amber-400 text-sm">Garantie 0 Risque</div>
                                        <div className="text-xs text-white/40 mt-1">
                                            Aucun prélèvement tant que l'objectif n'est pas atteint.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-white/40">Durée estimée</span>
                                    <span className="text-xl font-bold text-white">{stats.duration} mois</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white/40">Livraison V1.0</span>
                                    <span className="text-lg font-medium text-amber-400">{stats.date}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white/40">Vitesse</span>
                                    <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-sm font-bold border border-amber-500/20">
                                        {stats.speed}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Timeline */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-amber-500/30">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 border border-amber-500/20">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white">Séquençage</h3>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative mb-6">
                        <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: isLocked ? "0%" : `${Math.min(100, ((amount - 1500) / 4500) * 100)}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-white/30 mt-2 font-mono">
                            <span>T0</span>
                            <span>Lancement</span>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-6 relative pl-2">
                        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-amber-500/30 via-amber-500/10 to-transparent" />

                        {[
                            { num: 1, title: "Analyse & Design", desc: "Définition des specs IA avec les fondateurs.", active: true },
                            { num: 2, title: "Développement Sprint", desc: "Cycles courts. Livraisons toutes les 2 semaines." },
                            { num: 3, title: "Production", desc: "Audit de sécurité et déploiement final." }
                        ].map((step) => (
                            <div key={step.num} className="flex gap-4 group">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold z-10 transition-colors
                                    ${step.active
                                        ? "bg-amber-500/20 border border-amber-500/40 text-amber-400"
                                        : "bg-white/[0.03] border border-white/10 text-white/40 group-hover:border-amber-500/30 group-hover:text-amber-400"
                                    }`}>
                                    {step.num}
                                </div>
                                <div className="pt-0.5">
                                    <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors">{step.title}</h4>
                                    <p className="text-sm text-white/40">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {showLink && (
                        <div className="mt-8 pt-6 border-t border-white/[0.06]">
                            <a
                                href="/roadmap"
                                className="group inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-amber-600 hover:bg-amber-500 rounded-full transition-all duration-200"
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
