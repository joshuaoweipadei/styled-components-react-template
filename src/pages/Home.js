import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/ServiceSection'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Investors from '../components/Investors'
import Contact from '../components/Contact'
import Testimonial from '../components/Testimonial'

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleResize = () => {
    if(window.innerWidth >= 769){
      setIsOpen(false)
    }
  }

  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} /> 
      <HeroSection />
      <AboutUs />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Investors />
      <Services />
      <InfoSection {...homeObjThree} />
      <Testimonial />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home;
