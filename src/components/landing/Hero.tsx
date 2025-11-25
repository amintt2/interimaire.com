"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Github } from "lucide-react"
import { motion } from "framer-motion"
import { BubbleBackground } from "@/components/ui/shadcn-io/bubble-background"
import TextPressure from "@/components/ui/shadcn-io/text-pressure"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full bg-background">
                <BubbleBackground
                    interactive
                    className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/10 via-violet-500/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center gap-8 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/roadmap"
                        className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Le futur de l&apos;intérim est ici
                    </Link>
                </motion.div>

                <motion.div
                    className="w-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <TextPressure
                        text="L'intérim réinventé."
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={false}
                        weight={true}
                        italic={false}
                        textColor="white"
                        minFontSize={48}
                        className="text-white font-bold"
                    />
                </motion.div>

                <motion.h2
                    className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 animate-gradient-x">
                        Open Source & IA
                    </span>
                </motion.h2>

                <motion.p
                    className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Une plateforme moderne, transparente et propulsée par l&apos;intelligence artificielle.
                    Gérez vos contrats, vos heures et vos talents sans frais de licence exorbitants.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button asChild size="lg" className="h-12 px-8 text-lg bg-white text-black hover:bg-gray-200 border-0">
                        <Link href="/roadmap">
                            Devenir Fondateur
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg border-white/10 hover:bg-white/5 hover:text-white">
                        <Link href="/features">
                            Découvrir <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg border-white/10 hover:bg-white/5 hover:text-white">
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" /> Github
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
