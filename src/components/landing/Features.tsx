"use client"

import { FileText, Clock, Bot, Users, Briefcase, Calculator } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern"
import { BackgroundGradient } from "@/components/ui/shadcn-io/background-gradient"

const features = [
    {
        title: "Module Candidats",
        description: "Parsing CV automatique et gestion des disponibilités.",
        icon: Users,
        gradient: "from-blue-500 via-cyan-500 to-blue-500"
    },
    {
        title: "CRM Client",
        description: "Gestion centralisée des clients et commandes.",
        icon: Briefcase,
        gradient: "from-indigo-500 via-purple-500 to-indigo-500"
    },
    {
        title: "Admin & Légal",
        description: "Contrats automatiques et DPAE intégrée.",
        icon: FileText,
        gradient: "from-emerald-500 via-teal-500 to-emerald-500"
    },
    {
        title: "Gestion Temps",
        description: "Relevés d'heures et validation simplifiée.",
        icon: Clock,
        gradient: "from-orange-500 via-amber-500 to-orange-500"
    },
    {
        title: "Paie & Facturation",
        description: "Calcul auto IFM/CP et facturation client.",
        icon: Calculator,
        gradient: "from-pink-500 via-rose-500 to-pink-500"
    },
    {
        title: "IA & Innovation",
        description: "Matching LLM et parsing intelligent.",
        icon: Bot,
        gradient: "from-violet-600 via-fuchsia-600 to-violet-600"
    }
]

export function Features({ showLink = false }: { showLink?: boolean }) {
    return (
        <section className="container py-24 space-y-16 relative overflow-hidden">
            {/* Interactive Grid Background */}
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-10"
                )}
            />

            <div className="text-center space-y-4 relative z-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Une Suite <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tout-en-Un</span>
                </h2>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                    De la candidature à la facturation, pilotez votre agence avec une précision chirurgicale.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <BackgroundGradient className="rounded-3xl p-[1px] h-full" containerClassName="h-full">
                            <div className="rounded-3xl bg-zinc-950 p-8 h-full flex flex-col">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                                    <feature.icon className="h-7 w-7 text-blue-400" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed flex-1">
                                    {feature.description}
                                </p>
                            </div>
                        </BackgroundGradient>
                    </motion.div>
                ))}
            </div>

            {showLink && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center relative z-10 mt-12"
                >
                    <a
                        href="/features"
                        className="group inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
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
