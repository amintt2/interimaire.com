"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (path: string) => pathname === path

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const navLinks = [
        { href: "/features", label: "Fonctionnalités", activeColor: "text-blue-400", hoverColor: "hover:text-blue-400" },
        { href: "/roadmap", label: "Roadmap", activeColor: "text-amber-400", hoverColor: "hover:text-amber-400" },
        { href: "/pricing", label: "Tarifs", activeColor: "text-violet-400", hoverColor: "hover:text-violet-400" },
        { href: "/contact", label: "Contact", activeColor: "text-white", hoverColor: "hover:text-white" },
    ]

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#030303]/80 backdrop-blur-xl">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-white">
                                intérimaire.com
                            </span>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "transition-colors",
                                        link.hoverColor,
                                        isActive(link.href) ? link.activeColor : "text-white/50"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-white/50 hover:text-white hover:bg-white/[0.05]">
                            <Link href="https://github.com/interimaire-com" target="_blank">
                                <Github className="mr-2 h-4 w-4" /> GitHub
                            </Link>
                        </Button>
                        <Button asChild className="hidden md:inline-flex bg-white text-black hover:bg-white/90 font-semibold">
                            <Link href="/roadmap">
                                Contribuer
                            </Link>
                        </Button>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] transition-colors"
                            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="fixed top-16 left-0 right-0 z-50 md:hidden"
                        >
                            <div className="mx-4 mt-2 p-4 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-2xl">
                                <nav className="flex flex-col space-y-1">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={cn(
                                                    "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                                                    isActive(link.href)
                                                        ? cn(link.activeColor, "bg-white/[0.05]")
                                                        : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                                    <Link
                                        href="https://github.com/interimaire-com"
                                        target="_blank"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-2 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.05] transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="font-medium">GitHub</span>
                                    </Link>
                                    <Link
                                        href="/roadmap"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block w-full px-4 py-3 rounded-xl bg-white text-black font-semibold text-center hover:bg-white/90 transition-colors"
                                    >
                                        Contribuer
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
