"use client"

import { FileText, Clock, Bot, Users, Briefcase, Calculator } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const features = [
    {
        title: "Module Candidats",
        description: "Parsing CV automatique et gestion des disponibilités.",
        icon: Users,
    },
    {
        title: "CRM Client",
        description: "Gestion centralisée des clients et commandes.",
        icon: Briefcase,
    },
    {
        title: "Admin & Légal",
        description: "Contrats automatiques et DPAE intégrée.",
        icon: FileText,
    },
    {
        title: "Gestion Temps",
        description: "Relevés d'heures et validation simplifiée.",
        icon: Clock,
    },
    {
        title: "Paie & Facturation",
        description: "Calcul auto IFM/CP et facturation client.",
        icon: Calculator,
    },
    {
        title: "IA & Innovation",
        description: "Matching LLM et parsing intelligent.",
        icon: Bot,
    }
]

export function Features({ showLink = false }: { showLink?: boolean }) {
    return (
        <section className="container py-24 space-y-16 relative">
            <div className="text-center space-y-4 relative z-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Une Suite <span className="text-blue-400">Tout-en-Un</span>
                </h2>
                <p className="mx-auto max-w-[800px] text-white/50 md:text-xl">
                    De la candidature à la facturation, pilotez votre agence avec une précision chirurgicale.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 h-full transition-all duration-300 hover:bg-white/[0.05] hover:border-blue-500/30">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-blue-400" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {showLink && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center relative z-10"
                >
                    <a
                        href="/features"
                        className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-200"
                    >
                        Découvrir Toutes les Fonctionnalités
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            )}
        </section>
    )
}
