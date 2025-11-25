import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { DetailedRoadmap } from "@/components/roadmap/DetailedRoadmap"
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid"

export default function RoadmapPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-20 relative">
                <div className="absolute inset-0 -z-10">
                    <FlickeringGrid
                        className="w-full h-full"
                        squareSize={4}
                        gridGap={6}
                        color="#6B7280"
                        maxOpacity={0.2}
                        flickerChance={0.1}
                    />
                </div>
                <DetailedRoadmap />
            </main>
            <Footer />
        </div>
    )
}
