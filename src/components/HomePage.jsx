import React from 'react'
import Nav from './Navbar/Menubar'
import HeroSection from './HeroSection'
import Header from './Heading/Heading'
import Program from './OurProgram/Program'
import CourseCard from './Course/CourseCard'
import Chooseprogram from './ChooseProgram/Chooseprogram'
import StudentRevies from './Testimonials/StudentRevies'
import Subscribe from './SubscribePage/Subscribe'
import Footer from './Footer'




function HomePage () {
  return (
    <>
    <Nav/>
    <HeroSection/>
    <Header/>
    <Program/>
    <CourseCard/>
    <Chooseprogram/>
    <StudentRevies/>
    <Subscribe/>
    <Footer/>

    
      
    </>
  )
}

export default HomePage
