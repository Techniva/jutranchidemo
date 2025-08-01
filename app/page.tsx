'use client'

import {
  Header,
  HeroSection,
  FeaturesSection,
  ProgramsSection,
  NewsEventsSection,
  Footer
} from '@/components'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />      
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <NewsEventsSection />
      <Footer />
      
    </div>
  )
} 