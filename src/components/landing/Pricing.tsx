"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Pricing() {
    return (
        <section className="container py-24">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Tarification <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500">Transparente</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-white/50 md:text-xl">
                    Commencez gratuitement, évoluez avec nous.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Open Source Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-violet-500/20 transition-colors"
                >
                    <h3 className="text-xl font-bold text-white">Open Source</h3>
                    <div className="mt-4 text-4xl font-bold text-white">0€</div>
                    <p className="text-sm text-white/50 mt-2">Auto-hébergement</p>
                    <ul className="mt-8 space-y-4">
                        {["Code source complet", "Illimité", "Communauté"].map((item) => (
                            <li key={item} className="flex items-center text-sm text-white/70">
                                <Check className="mr-2 h-4 w-4 text-violet-400" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8 border-white/10 hover:bg-violet-500/10 hover:border-violet-500/30" variant="outline" asChild>
                        <Link href="https://github.com/openinterim" target="_blank">Voir le code</Link>
                    </Button>
                </motion.div>

                {/* Managed Hosting Card - Highlighted */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl border border-violet-500/40 bg-violet-500/10 p-8 shadow-[0_0_60px_-15px_rgba(139,92,246,0.4)]"
                >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                        Recommandé
                    </div>
                    <h3 className="text-xl font-bold text-violet-400">Hébergé</h3>
                    <div className="mt-4 text-4xl font-bold text-white">10€</div>
                    <p className="text-sm text-white/50 mt-2">/ utilisateur / mois</p>
                    <ul className="mt-8 space-y-4">
                        {["Tout l'Open Source", "Mises à jour auto", "Support prioritaire", "Sauvegardes quotidiennes"].map((item) => (
                            <li key={item} className="flex items-center text-sm text-white/70">
                                <Check className="mr-2 h-4 w-4 text-violet-400" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-500/25" asChild>
                        <Link href="/roadmap">Pré-commander</Link>
                    </Button>
                </motion.div>

                {/* Mobile App Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-violet-500/20 transition-colors"
                >
                    <h3 className="text-xl font-bold text-white">App Mobile</h3>
                    <div className="mt-4 text-4xl font-bold text-white">100€</div>
                    <p className="text-sm text-white/50 mt-2">Frais unique</p>
                    <ul className="mt-8 space-y-4">
                        {["iOS & Android", "Marque Blanche", "Notifications Push"].map((item) => (
                            <li key={item} className="flex items-center text-sm text-white/70">
                                <Check className="mr-2 h-4 w-4 text-violet-400" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8 border-white/10 hover:bg-violet-500/10 hover:border-violet-500/30" variant="outline" asChild>
                        <Link href="/roadmap">Ajouter</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
