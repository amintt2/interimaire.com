import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { DetailedRoadmap } from "@/components/roadmap/DetailedRoadmap"

export default function RoadmapPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#030303]">
            {/* Subtle gradient background */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 50%),
                        radial-gradient(ellipse 60% 40% at 20% 60%, rgba(16, 185, 129, 0.05), transparent 50%),
                        radial-gradient(ellipse 50% 30% at 80% 80%, rgba(139, 92, 246, 0.05), transparent 50%)
                    `
                }}
            />

            <Header />
            <main className="flex-1 pt-20 relative">
                <DetailedRoadmap />
            </main>
            <Footer />
        </div>
    )
}
