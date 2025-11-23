"use client"

import { FileText, Clock, Bot, ShieldCheck, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const features = [
    {
        title: "Gestion Administrative",
        description: "DPAE, Contrats de mission, et signatures électroniques intégrées.",
        icon: FileText,
        className: "md:col-span-2",
    },
    {
        title: "IA Avancée",
        description: "Matching prédictif et parsing de CVs instantané.",
        icon: Bot,
        className: "md:col-span-1",
    },
    {
        title: "Gestion des Heures",
        description: "Relevés automatisés et validation client simplifiée.",
        icon: Clock,
        className: "md:col-span-1",
    },
    {
        title: "Open Source",
        description: "Auditabilité totale et sécurité maximale.",
        icon: ShieldCheck,
        className: "md:col-span-2",
    },
]

export function Features() {
    return (
        <section className="container py-24 space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Tout ce dont vous avez besoin.
                    <br />
                    <span className="text-blue-500">Rien de superflu.</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Une suite complète d&apos;outils conçus pour moderniser votre agence d&apos;intérim.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10",
                            feature.className
                        )}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                        <feature.icon className="h-10 w-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
