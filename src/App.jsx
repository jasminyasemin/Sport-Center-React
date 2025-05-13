import { useEffect, useState } from "react"
import './styles/main.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SectionOne from './components/SectionOne/SectionOne'
import Classes from './components/Classes/Classes'
import Bmi from './components/Bmi/Bmi'
import Trainers from './components/Trainers/Trainers'
import Purchase from './components/Purchase/Purchase'
import Review from './components/Review/Review'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div id="hero-wrapper">
        <Header />
        <Hero />
      </div>
      <SectionOne />
      <Classes />
      <Bmi />
      <Trainers />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </>
  )
}

export default App