"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Pricing() {
    return (
        <section className="container py-24">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Tarification Transparente
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Commencez gratuitement, évoluez avec nous.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Open Source Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                    <h3 className="text-xl font-bold">Open Source</h3>
                    <div className="mt-4 text-4xl font-bold">0€</div>
                    <p className="text-sm text-muted-foreground mt-2">Auto-hébergement</p>
                    <ul className="mt-8 space-y-4">
                        {["Code source complet", "Illimité", "Communauté"].map((item) => (
                            <li key={item} className="flex items-center text-sm">
                                <Check className="mr-2 h-4 w-4 text-blue-500" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8" variant="outline" asChild>
                        <Link href="https://github.com/openinterim" target="_blank">Voir le code</Link>
                    </Button>
                </motion.div>

                {/* Managed Hosting Card - Highlighted */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl border border-blue-500/50 bg-blue-500/10 p-8 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
                >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white">
                        Recommandé
                    </div>
                    <h3 className="text-xl font-bold text-blue-400">Hébergé</h3>
                    <div className="mt-4 text-4xl font-bold">10€</div>
                    <p className="text-sm text-muted-foreground mt-2">/ utilisateur / mois</p>
                    <ul className="mt-8 space-y-4">
                        {["Tout l'Open Source", "Mises à jour auto", "Support prioritaire", "Sauvegardes quotidiennes"].map((item) => (
                            <li key={item} className="flex items-center text-sm">
                                <Check className="mr-2 h-4 w-4 text-blue-500" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white border-0" asChild>
                        <Link href="/roadmap">Pré-commander</Link>
                    </Button>
                </motion.div>

                {/* Mobile App Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                    <h3 className="text-xl font-bold">App Mobile</h3>
                    <div className="mt-4 text-4xl font-bold">100€</div>
                    <p className="text-sm text-muted-foreground mt-2">Frais unique</p>
                    <ul className="mt-8 space-y-4">
                        {["iOS & Android", "Marque Blanche", "Notifications Push"].map((item) => (
                            <li key={item} className="flex items-center text-sm">
                                <Check className="mr-2 h-4 w-4 text-blue-500" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-8" variant="outline" asChild>
                        <Link href="/roadmap">Ajouter</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
