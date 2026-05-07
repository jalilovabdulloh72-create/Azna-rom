import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-luxury-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
