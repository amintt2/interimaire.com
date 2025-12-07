"use client"

import { useState } from "react"
import { Phone, Mail, Send, MapPin, Clock, MessageCircle, Sparkles, ArrowRight, CheckCircle2, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "fondateurs@intérimaire.com",
        href: "mailto:fondateurs@intérimaire.com",
        description: "Réponse sous 24h",
        color: "blue"
    },
    {
        icon: Phone,
        label: "Téléphone",
        value: "+33 07 80 58 82 85",
        href: "tel:+33780588285",
        description: "Lun-Ven, 9h-18h",
        color: "emerald"
    }
]

const faqItems = [
    {
        question: "Quand le produit sera-t-il disponible ?",
        answer: "La date de livraison dépend du financement. Avec le seuil minimum (1500€/mois), comptez environ 24 mois. Consultez notre roadmap interactive pour simuler différents scénarios."
    },
    {
        question: "Que se passe-t-il si l'objectif n'est pas atteint ?",
        answer: "Vous êtes intégralement remboursé. Aucun prélèvement n'est effectué tant que le seuil de 1500€/mois n'est pas atteint."
    },
    {
        question: "Puis-je annuler ma contribution ?",
        answer: "Oui, vous pouvez annuler à tout moment avant le lancement de la v1.0 pour un remboursement intégral."
    },
    {
        question: "Le code sera-t-il vraiment open source ?",
        answer: "Oui, 100% du code sera disponible sous licence open source. Vous pourrez l'héberger vous-même gratuitement ou opter pour notre offre cloud."
    }
]

const colorVariants: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
    indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" }
}

export function DetailedContact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                            <MessageCircle className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-400 font-medium">Nous sommes à votre écoute</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="text-white">Parlons de </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                                votre projet
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                            Une question sur le projet ? Envie de devenir partenaire fondateur ?
                            <br />
                            Notre équipe vous répond sous 24h.
                        </p>
                    </motion.div>
                </div>

                {/* Gradient Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            </section>

            {/* Contact Methods */}
            <section className="relative py-8">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {contactMethods.map((method, index) => {
                            const colors = colorVariants[method.color]
                            return (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    target={method.href.startsWith("http") ? "_blank" : undefined}
                                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "group p-6 rounded-2xl border bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.04]",
                                        colors.border
                                    )}
                                >
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", colors.bg)}>
                                        <method.icon className={cn("w-6 h-6", colors.text)} />
                                    </div>
                                    <p className="text-sm text-white/40 uppercase tracking-wider mb-1">{method.label}</p>
                                    <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                                        {method.value}
                                    </p>
                                    <p className="text-sm text-white/40 mt-1">{method.description}</p>
                                </motion.a>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Main Content - Form & FAQ */}
            <section className="relative py-16 md:py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                        <Send className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Envoyez-nous un message</h2>
                                        <p className="text-sm text-white/40">Nous vous répondons sous 24h</p>
                                    </div>
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                                        <p className="text-white/50">Nous vous répondrons dans les plus brefs délais.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="text-sm text-white/60 block">Prénom</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="Thomas"
                                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="text-sm text-white/60 block">Nom</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Durand"
                                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm text-white/60 block">Email professionnel</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="thomas@agence-interim.com"
                                                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm text-white/60 block">Agence / Entreprise</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Mon Agence Intérim"
                                                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm text-white/60 block">Sujet</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                required
                                            >
                                                <option value="" className="bg-[#0a0e1a]">Sélectionnez un sujet</option>
                                                <option value="founder" className="bg-[#0a0e1a]">Devenir Fondateur</option>
                                                <option value="partnership" className="bg-[#0a0e1a]">Partenariat</option>
                                                <option value="question" className="bg-[#0a0e1a]">Question sur le projet</option>
                                                <option value="demo" className="bg-[#0a0e1a]">Demande de démo</option>
                                                <option value="other" className="bg-[#0a0e1a]">Autre</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm text-white/60 block">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Je souhaiterais en savoir plus sur..."
                                                rows={4}
                                                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                                        >
                                            <Send className="w-5 h-5" />
                                            Envoyer le message
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>

                                        <p className="text-xs text-white/30 text-center">
                                            Vos données sont traitées conformément à notre politique de confidentialité.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* FAQ Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                                    <Sparkles className="w-4 h-4 text-white/40" />
                                    <span className="text-xs text-white/40 font-medium uppercase tracking-wider">Questions fréquentes</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Réponses rapides
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {faqItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-blue-500/20 transition-colors"
                                    >
                                        <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                                        <p className="text-sm text-white/50 leading-relaxed">{item.answer}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/10">
                                <p className="text-sm text-white/40 mb-4">Suivez-nous</p>
                                <div className="flex gap-3">
                                    <a
                                        href="https://linkedin.com/company/interimaire-com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-colors group"
                                    >
                                        <Linkedin className="w-5 h-5 text-white/40 group-hover:text-blue-400 transition-colors" />
                                    </a>
                                    <a
                                        href="https://twitter.com/interimaire_com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-colors group"
                                    >
                                        <Twitter className="w-5 h-5 text-white/40 group-hover:text-blue-400 transition-colors" />
                                    </a>
                                    <a
                                        href="https://github.com/interimaire-com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                                    >
                                        <svg className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
