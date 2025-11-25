"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle, Clock, Code2, Database, Layout, Lock, Server, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const phases = [
    {
        id: 1,
        title: "Phase 1: Architecture & Fondation",
        status: "completed",
        date: "Q4 2024",
        description: "Mise en place du socle technique et des infrastructures de base.",
        items: [
            { icon: Layout, text: "Design System & UI Kit (Shadcn/ui)" },
            { icon: Code2, text: "Architecture Frontend (Next.js 14)" },
            { icon: Database, text: "Schéma de base de données (PostgreSQL)" },
            { icon: Shield, text: "Authentification (NextAuth.js)" }
        ]
    },
    {
        id: 2,
        title: "Phase 2: Core Development",
        status: "in-progress",
        date: "Q1 2025",
        description: "Développement des fonctionnalités cœur de métier pour l'intérim.",
        items: [
            { icon: Server, text: "API Routes & Server Actions" },
            { icon: Zap, text: "Moteur de matching Candidat/Mission" },
            { icon: Clock, text: "Gestion des temps et activités" },
            { icon: Lock, text: "Module de contrats intelligents" }
        ]
    },
    {
        id: 3,
        title: "Phase 3: Beta & Community",
        status: "planned",
        date: "Q2 2025",
        description: "Ouverture à la communauté et tests en conditions réelles.",
        items: [
            { icon: CheckCircle2, text: "Programme Beta Testeurs" },
            { icon: Code2, text: "API Publique pour développeurs" },
            { icon: Database, text: "Optimisation des performances" },
            { icon: Shield, text: "Audit de sécurité externe" }
        ]
    }
]

export function DetailedRoadmap() {
    return (
        <section className="container py-24 relative">
            <div className="text-center space-y-4 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
                >
                    Roadmap Technique
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground md:text-xl max-w-2xl mx-auto"
                >
                    Une vision claire et transparente de notre développement.
                    <br />
                    <span className="text-blue-400">Construit étape par étape avec la communauté.</span>
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:left-1/2 md:-ml-px" />

                <div className="space-y-12">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={cn(
                                "relative flex flex-col md:flex-row gap-8",
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-8 -translate-x-1/2 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-blue-500 z-10 mt-6">
                                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                            </div>

                            {/* Content Card */}
                            <div className="ml-16 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className={cn(
                                                "px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider border",
                                                phase.status === "completed" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                                                    phase.status === "in-progress" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                                                        "bg-slate-500/10 text-slate-400 border-slate-500/20"
                                            )}>
                                                {phase.status}
                                            </span>
                                            <span className="text-sm text-muted-foreground font-mono">{phase.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 text-sm">
                                    {phase.description}
                                </p>

                                <div className="grid grid-cols-1 gap-3">
                                    {phase.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-2 rounded-lg border border-white/5">
                                            <item.icon className="w-4 h-4 text-blue-400" />
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
