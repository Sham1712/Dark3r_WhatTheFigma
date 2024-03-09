import React from 'react'
import { LoginPage } from './components/LoginPage'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import HeroPage from './components/HeroPage'
import { WorkFlow } from './components/WorkFlow'
import { AboutUs } from './components/AboutUs'
import { OurTracks } from './components/OurTracks'
import { LearningExp } from './components/LearningExp'
import Testimonial from './components/Testimonial'
import { Faculty } from './components/Faculty'
import { Newsletter } from './components/Newsletter'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <WorkFlow/>
      <AboutUs/>
      <OurTracks/>
      <LearningExp/>
      <Testimonial/>
      <Faculty/>
      <Newsletter/>
      <Footer/>
      

    </div>
  )
}

export default App