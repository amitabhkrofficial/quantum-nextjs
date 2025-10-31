import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F8F8]">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
