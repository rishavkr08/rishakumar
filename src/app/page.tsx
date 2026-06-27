import CustomCursor from '@/components/CustomCursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stack from '@/components/Stack'
import Work from '@/components/Work'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleCanvas from '@/components/ParticleCanvas'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ParticleCanvas />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
