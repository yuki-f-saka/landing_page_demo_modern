import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import UnclesSection from '@/components/sections/UnclesSection'
import PricingSection from '@/components/sections/PricingSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <UnclesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}