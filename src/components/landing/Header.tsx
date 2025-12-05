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
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">
                            OpenInterim
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/features"
                            className={cn(
                                "transition-colors hover:text-primary",
                                isActive("/features") ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            Fonctionnalités
                        </Link>
                        <Link
                            href="/roadmap"
                            className={cn(
                                "transition-colors hover:text-primary",
                                isActive("/roadmap") ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            Roadmap
                        </Link>
                        <Link
                            href="/pricing"
                            className={cn(
                                "transition-colors hover:text-primary",
                                isActive("/pricing") ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            Tarifs
                        </Link>
                        <Link
                            href="/contact"
                            className={cn(
                                "transition-colors hover:text-primary",
                                isActive("/contact") ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
                        <Link href="https://github.com/openinterim" target="_blank">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </Link>
                    </Button>
                    <Button asChild className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0 shadow-lg shadow-violet-500/20">
                        <Link href="/roadmap">
                            Contribuer
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
