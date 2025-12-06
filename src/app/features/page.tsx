import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { DetailedFeatures } from "@/components/features/DetailedFeatures"

export default function FeaturesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#030303]">
            {/* Subtle gradient background */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.08), transparent 50%),
                        radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.05), transparent 50%),
                        radial-gradient(ellipse 50% 30% at 20% 80%, rgba(6, 182, 212, 0.05), transparent 50%)
                    `
                }}
            />

            <Header />
            <main className="flex-1 pt-20 relative">
                <DetailedFeatures />
            </main>
            <Footer />
        </div>
    )
}
