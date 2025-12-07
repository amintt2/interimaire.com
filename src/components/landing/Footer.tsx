"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Heart, ExternalLink } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t border-white/[0.06] bg-[#030303]">
            <div className="container py-16">
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <h3 className="text-xl font-bold text-white">intérimaire.com</h3>
                        <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                            L'intérim réinventé. Open Source & alimenté par l'IA.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://github.com/interimaire-com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 group"
                            >
                                <Github className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com/interimaire_com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 group"
                            >
                                <Twitter className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://linkedin.com/company/interimaire-com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 group"
                            >
                                <Linkedin className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Produit */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Produit</h4>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/features" className="text-sm text-white/40 hover:text-white transition-colors w-fit">
                                Fonctionnalités
                            </Link>
                            <Link href="/roadmap" className="text-sm text-white/40 hover:text-white transition-colors w-fit">
                                Roadmap
                            </Link>
                            <Link href="/pricing" className="text-sm text-white/40 hover:text-white transition-colors w-fit">
                                Tarifs
                            </Link>
                            <a
                                href="https://github.com/interimaire-com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/40 hover:text-white transition-colors w-fit inline-flex items-center gap-1"
                            >
                                GitHub <ExternalLink className="w-3 h-3" />
                            </a>
                        </nav>
                    </div>

                    {/* Ressources */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Ressources</h4>
                        <nav className="flex flex-col space-y-3">
                            <a
                                href="https://docs.intérimaire.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/40 hover:text-white transition-colors w-fit inline-flex items-center gap-1"
                            >
                                Documentation <ExternalLink className="w-3 h-3" />
                            </a>
                            <a
                                href="https://github.com/interimaire-com/interimaire/blob/main/CONTRIBUTING.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/40 hover:text-white transition-colors w-fit inline-flex items-center gap-1"
                            >
                                Contribuer <ExternalLink className="w-3 h-3" />
                            </a>
                            <a
                                href="https://github.com/interimaire-com/interimaire/blob/main/releases"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/40 hover:text-white transition-colors w-fit inline-flex items-center gap-1"
                            >
                                Changelog <ExternalLink className="w-3 h-3" />
                            </a>
                            <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors w-fit">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="mailto:contact@intérimaire.com"
                                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors w-fit group"
                            >
                                <Mail className="w-4 h-4" />
                                <span>contact@intérimaire.com</span>
                            </a>
                            <div className="flex items-center gap-2 text-sm text-white/40">
                                <MapPin className="w-4 h-4" />
                                <span>Paris, France</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/[0.06] flex flex-col items-center gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/30 text-center">
                        <span>© {currentYear} intérimaire.com</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                            Développé par
                            <a href="https://french-web.fr" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors font-medium">French-Web</a>
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                            Fait avec
                            <Heart className="w-3 h-3 text-red-500" />
                            en France
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <Link href="/legal" className="text-sm text-white/30 hover:text-white/60 transition-colors">
                            Mentions légales
                        </Link>
                        <Link href="/privacy" className="text-sm text-white/30 hover:text-white/60 transition-colors">
                            Confidentialité
                        </Link>
                        <a
                            href="https://github.com/interimaire-com/interimaire/blob/main/LICENSE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/30 hover:text-white/60 transition-colors"
                        >
                            Licence MIT
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
