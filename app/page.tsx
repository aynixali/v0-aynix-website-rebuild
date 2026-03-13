import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </main>
  )
}
