import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[#0a0e1a] overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            <div className="container relative z-10 py-16">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* OpenInterim Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">OpenInterim</h3>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Nous construisons l&apos;avenir de l&apos;intérim, ligne de code après ligne de code. Rejoignez le mouvement open source.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                            >
                                <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                            >
                                <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                            >
                                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Projet Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Projet</h3>
                        <nav className="flex flex-col space-y-3">
                            <Link
                                href="/features"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 w-fit"
                            >
                                Fonctionnalités
                            </Link>
                            <Link
                                href="/roadmap"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 w-fit"
                            >
                                Roadmap
                            </Link>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 w-fit"
                            >
                                GitHub
                            </a>
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="mailto:contact@openinterim.fr"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group w-fit"
                            >
                                <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                <span>contact@openinterim.fr</span>
                            </a>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span>Paris, France</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © 2025 OpenInterim Project • Licence MIT
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/legal"
                            className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                        >
                            Mentions légales
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                        >
                            Confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
