import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { DetailedFeatures } from "@/components/features/DetailedFeatures"
import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern"
import { cn } from "@/lib/utils"

export default function FeaturesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <Header />
            <main className="flex-1 pt-20 relative overflow-hidden">
                <InteractiveGridPattern
                    className={cn(
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-10"
                    )}
                />
                <div className="relative z-10">
                    <DetailedFeatures />
                </div>
            </main>
            <Footer />
        </div>
    )
}
