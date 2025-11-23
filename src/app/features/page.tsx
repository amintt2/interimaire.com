import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { Features } from "@/components/landing/Features"
import { Particles } from "@/components/ui/shadcn-io/particles"

export default function FeaturesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <Header />
            <main className="flex-1 pt-20 relative">
                <div className="absolute inset-0 -z-10">
                    <Particles
                        className="w-full h-full"
                        quantity={100}
                        ease={80}
                        color="#ffffff"
                        refresh
                    />
                </div>
                <Features />
            </main>
            <Footer />
        </div>
    )
}
