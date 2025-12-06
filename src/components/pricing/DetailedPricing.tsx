"use client"

import { Check, Heart, Rocket, Shield, Star, Zap, Crown, Gift, Users, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

const founderTiers = [
    {
        id: "supporter",
        name: "Supporter",
        price: "25€",
        period: "/mois",
        description: "Soutenez le projet et accédez aux coulisses du développement.",
        color: "blue",
        popular: false,
        benefits: [
            { text: "Accès Discord privé", icon: Users },
            { text: "Mises à jour exclusives", icon: Zap },
            { text: "Nom dans les crédits", icon: Star },
            { text: "Badge Supporter", icon: Heart }
        ],
        futureAccess: "6 mois gratuits à la sortie"
    },
    {
        id: "founder",
        name: "Fondateur",
        price: "75€",
        period: "/mois",
        description: "Participez activement aux décisions et bénéficiez d'avantages exclusifs à vie.",
        color: "indigo",
        popular: true,
        benefits: [
            { text: "Tout Supporter inclus", icon: Check },
            { text: "Vote sur les fonctionnalités", icon: Crown },
            { text: "Accès beta prioritaire", icon: Rocket },
            { text: "Support prioritaire à vie", icon: Shield },
            { text: "Réductions permanentes -30%", icon: Gift }
        ],
        futureAccess: "12 mois gratuits à la sortie"
    },
    {
        id: "partner",
        name: "Partenaire",
        price: "200€",
        period: "/mois",
        description: "Devenez un partenaire stratégique et façonnez l'avenir de la plateforme.",
        color: "amber",
        popular: false,
        benefits: [
            { text: "Tout Fondateur inclus", icon: Check },
            { text: "Ateliers de conception", icon: Users },
            { text: "Logo sur le site", icon: Star },
            { text: "API accès anticipé", icon: Zap },
            { text: "Support dédié", icon: Crown },
            { text: "Réductions permanentes -50%", icon: Gift }
        ],
        futureAccess: "24 mois gratuits à la sortie"
    }
]

const postLaunchPlans = [
    {
        name: "Open Source",
        price: "Gratuit",
        description: "Auto-hébergement",
        features: ["Code source complet", "Communauté Discord", "Documentation"]
    },
    {
        name: "Cloud",
        price: "10€",
        period: "/utilisateur/mois",
        description: "Hébergement géré",
        features: ["Tout l'Open Source", "Hébergement sécurisé", "Mises à jour auto", "Support email"]
    },
    {
        name: "Entreprise",
        price: "Sur devis",
        description: "Solutions sur mesure",
        features: ["Tout Cloud inclus", "SLA garantie", "Intégrations custom", "Account manager"]
    }
]

const colorVariants: Record<string, { border: string; bg: string; text: string; button: string }> = {
    blue: {
        border: "border-blue-500/30",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        button: "bg-blue-600 hover:bg-blue-500"
    },
    indigo: {
        border: "border-indigo-500/50",
        bg: "bg-indigo-500/10",
        text: "text-indigo-400",
        button: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
    },
    amber: {
        border: "border-amber-500/30",
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        button: "bg-amber-600 hover:bg-amber-500"
    }
}

export function DetailedPricing() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                            <Heart className="w-4 h-4 text-indigo-400" />
                            <span className="text-sm text-indigo-400 font-medium">Campagne Fondateurs en cours</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="text-white">Devenez </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500">
                                Fondateur
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                            Rejoignez les pionniers qui construisent l'avenir de l'intérim.
                            <br />
                            <span className="text-indigo-400">Avantages exclusifs à vie pour les premiers supporters.</span>
                        </p>

                        {/* Urgency Banner */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-white/70">
                                <span className="text-white font-medium">12 places restantes</span> au tarif Fondateur
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Gradient Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            </section>

            {/* Founder Tiers */}
            <section className="relative py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Offres Fondateur
                        </h2>
                        <p className="text-white/40 max-w-xl mx-auto">
                            Choisissez votre niveau d'engagement et recevez des avantages à vie.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {founderTiers.map((tier, index) => (
                            <FounderCard key={tier.id} tier={tier} index={index} />
                        ))}
                    </div>

                    {/* Guarantee */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-4 max-w-2xl mx-auto"
                    >
                        <Shield className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                            <div className="font-medium text-emerald-400 mb-1">Garantie Satisfait ou Remboursé</div>
                            <p className="text-sm text-white/50">
                                Annulez à tout moment avant le lancement de la v1.0 pour un remboursement intégral.
                                Aucun risque, que des avantages.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Become a Founder */}
            <section className="relative py-16 md:py-24 border-t border-white/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Pourquoi devenir Fondateur ?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                                    <Crown className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Influencez le produit</h3>
                                <p className="text-white/50 text-sm">
                                    Votez sur les fonctionnalités prioritaires et participez aux ateliers de conception.
                                    Votre agence façonne la plateforme.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                                    <Gift className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Économies à vie</h3>
                                <p className="text-white/50 text-sm">
                                    Jusqu'à 50% de réduction permanente sur tous les abonnements futurs.
                                    Plus vous soutenez tôt, plus vous économisez.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <Rocket className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Accès anticipé</h3>
                                <p className="text-white/50 text-sm">
                                    Soyez les premiers à tester chaque nouvelle fonctionnalité.
                                    Formez votre équipe avant vos concurrents.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                                    <Star className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Reconnaissance</h3>
                                <p className="text-white/50 text-sm">
                                    Votre nom (ou logo) dans les crédits et sur le site.
                                    Vous faites partie de l'histoire d'intérimaire.com.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Post-Launch Plans Preview */}
            <section className="relative py-16 md:py-24 border-t border-white/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                                <Sparkles className="w-4 h-4 text-white/40" />
                                <span className="text-xs text-white/40 font-medium uppercase tracking-wider">Après lancement</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Tarifs post-lancement
                            </h2>
                            <p className="text-white/40 max-w-xl mx-auto">
                                Aperçu des tarifs prévus après la sortie de la v1.0.
                                Les Fondateurs bénéficient de réductions permanentes.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {postLaunchPlans.map((plan, index) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10"
                                >
                                    <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-2xl font-bold text-white">{plan.price}</span>
                                        {plan.period && <span className="text-sm text-white/40">{plan.period}</span>}
                                    </div>
                                    <p className="text-sm text-white/40 mb-4">{plan.description}</p>
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                                <Check className="w-4 h-4 text-blue-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-24">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Des questions ?
                        </h2>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">
                            Notre équipe est disponible pour vous expliquer le projet en détail
                            et répondre à toutes vos questions.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all group"
                            >
                                Nous contacter
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/roadmap"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors"
                            >
                                Voir la roadmap
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

function FounderCard({ tier, index }: { tier: typeof founderTiers[0]; index: number }) {
    const colors = colorVariants[tier.color]

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={cn(
                "group relative rounded-2xl border bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 transition-all duration-500",
                colors.border,
                tier.popular && "shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]"
            )}
        >
            {/* Popular Badge */}
            {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-xs font-bold text-white">
                    Le plus populaire
                </div>
            )}

            {/* Header */}
            <div className="mb-6">
                <h3 className={cn("text-xl font-bold mb-2", colors.text)}>{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-white/40">{tier.period}</span>
                </div>
                <p className="text-sm text-white/40 mt-2">{tier.description}</p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                        <div className={cn("w-6 h-6 rounded-md flex items-center justify-center", colors.bg)}>
                            <benefit.icon className={cn("w-3.5 h-3.5", colors.text)} />
                        </div>
                        <span className="text-white/70">{benefit.text}</span>
                    </li>
                ))}
            </ul>

            {/* Future Access */}
            <div className={cn("p-3 rounded-lg mb-6", colors.bg)}>
                <div className="flex items-center gap-2">
                    <Gift className={cn("w-4 h-4", colors.text)} />
                    <span className={cn("text-sm font-medium", colors.text)}>{tier.futureAccess}</span>
                </div>
            </div>

            {/* CTA Button */}
            <button className={cn(
                "w-full py-3 rounded-xl font-medium text-white transition-all",
                colors.button
            )}>
                Choisir {tier.name}
            </button>
        </motion.div>
    )
}
