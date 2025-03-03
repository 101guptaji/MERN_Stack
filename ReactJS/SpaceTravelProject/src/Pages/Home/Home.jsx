import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Hero'
import './Home.css'
import About from './About'
import CallToAction from './Modal/CallToAction'
import FAQ from './FAQ'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About heading="About Us"/>
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home