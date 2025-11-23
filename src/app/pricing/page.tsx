import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { Pricing } from "@/components/landing/Pricing"
import { Contact } from "@/components/landing/Contact"
import { EtheralShadow } from "@/components/ui/shadcn-io/etheral-shadow"

export default function PricingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-20 relative">
                <div className="absolute inset-0 -z-10">
                    <EtheralShadow
                        color="rgba(128, 128, 128, 1)"
                        animation={{ scale: 100, speed: 90 }}
                        noise={{ opacity: 1, scale: 1.2 }}
                        sizing="fill"
                    />
                </div>
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
