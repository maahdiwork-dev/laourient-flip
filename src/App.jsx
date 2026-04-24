import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Restaurant from './components/Restaurant'
import Appartements from './components/Appartements'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Restaurant />
      <Appartements />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
