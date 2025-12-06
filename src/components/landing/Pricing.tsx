"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Pricing() {
    return (
        <section className="container py-24">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Tarification <span className="text-violet-400">Transparente</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-white/50 md:text-xl">
                    Commencez gratuitement, évoluez avec nous.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Open Source */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-violet-500/30"
                >
                    <h3 className="text-xl font-bold text-white">Open Source</h3>
                    <div className="mt-4 text-4xl font-bold text-white">0€</div>
                    <p className="text-sm text-white/40 mt-2">Auto-hébergement</p>
                    <ul className="mt-8 space-y-3">
                        {["Code source complet", "Illimité", "Communauté"].map((item) => (
                            <li key={item} className="flex items-center text-sm text-white/60">
                                <Check className="mr-2 h-4 w-4 text-violet-400" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8 border-white/10 hover:bg-violet-500/10 hover:border-violet-500/30 hover:text-violet-400" variant="outline" asChild>
                        <Link href="https://github.com/interimaire-com" target="_blank">Voir le code</Link>
                    </Button>
                </motion.div>

                {/* Hébergé - Highlighted */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl bg-violet-500/10 border border-violet-500/30 p-8 transition-all duration-300 hover:border-violet-400/50"
                >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1 text-xs font-bold text-white">
                        Recommandé
                    </div>
                    <h3 className="text-xl font-bold text-violet-400">Hébergé</h3>
                    <div className="mt-4 text-4xl font-bold text-white">10€</div>
                    <p className="text-sm text-white/40 mt-2">/ utilisateur / mois</p>
                    <ul className="mt-8 space-y-3">
                        {["Tout l'Open Source", "Mises à jour auto", "Support prioritaire", "Sauvegardes quotidiennes"].map((item) => (
                            <li key={item} className="flex items-center text-sm text-white/60">
                                <Check className="mr-2 h-4 w-4 text-violet-400" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8 bg-violet-600 hover:bg-violet-500 text-white border-0" asChild>
                        <Link href="/roadmap">Pré-commander</Link>
                    </Button>
                </motion.div>

                {/* App Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-violet-500/30"
                >
                    <h3 className="text-xl font-bold text-white">App Mobile</h3>
                    <div className="mt-4 text-4xl font-bold text-white">100€</div>
                    <p className="text-sm text-white/40 mt-2">Frais unique</p>
                    <ul className="mt-8 space-y-3">
                        {["iOS & Android", "Marque Blanche", "Notifications Push"].map((item) => (
                            <li key={item} className="flex items-center text-sm text-white/60">
                                <Check className="mr-2 h-4 w-4 text-violet-400" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8 border-white/10 hover:bg-violet-500/10 hover:border-violet-500/30 hover:text-violet-400" variant="outline" asChild>
                        <Link href="/roadmap">Ajouter</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
