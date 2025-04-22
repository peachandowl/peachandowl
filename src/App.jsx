// App.jsx

import { Button } from "./components/ui/button"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Products from "./components/Products"
import Contact from "./components/Contact"
import LimitedOffer from "./components/LimitedOffer"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
     
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Products />
        <Contact />
        <LimitedOffer />
      </main>
      <Footer />
    </div>
  )
}

export default App
