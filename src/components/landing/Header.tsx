"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"

export function Header() {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#030303]/80 backdrop-blur-xl">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-white">
                            OpenInterim
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/features"
                            className={cn(
                                "transition-colors hover:text-blue-400",
                                isActive("/features") ? "text-blue-400" : "text-white/50"
                            )}
                        >
                            Fonctionnalités
                        </Link>
                        <Link
                            href="/roadmap"
                            className={cn(
                                "transition-colors hover:text-amber-400",
                                isActive("/roadmap") ? "text-amber-400" : "text-white/50"
                            )}
                        >
                            Roadmap
                        </Link>
                        <Link
                            href="/pricing"
                            className={cn(
                                "transition-colors hover:text-violet-400",
                                isActive("/pricing") ? "text-violet-400" : "text-white/50"
                            )}
                        >
                            Tarifs
                        </Link>
                        <Link
                            href="/contact"
                            className={cn(
                                "transition-colors hover:text-white",
                                isActive("/contact") ? "text-white" : "text-white/50"
                            )}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-white/50 hover:text-white hover:bg-white/[0.05]">
                        <Link href="https://github.com/openinterim" target="_blank">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </Link>
                    </Button>
                    <Button asChild className="bg-white text-black hover:bg-white/90 font-semibold">
                        <Link href="/roadmap">
                            Contribuer
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
