// App.js
import React, { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

import Nav from './components/Navbar/Menubar';
import HeroSection from './components/HeroSection';
import Header from './components/Heading/Heading';
import Program from './components/OurProgram/Program';
import Course from './components/Course/Course';
import Chooseprogram from './components/ChooseProgram/Chooseprogram';  
import StudentRevies from './components/Testimonials/StudentRevies';
import Subscribe from './components/SubscribePage/Subscribe';
import Footer from './components/Footer';



// import Card from './components/Course/card';




function App() {
  useEffect(() =>{
    AOS.init({
      offset:100,
      duration:400,
      easing:"ease-in-sine",
      
    });
    AOS.refresh();
  }, []);
  return (
    
      <main className=" bg-white dark:bg-zinc-900 mx-auto overflow-hidden   ">
       <Nav/>
      <HeroSection/>
      <Header/>
      <Program/>
      <Course/>
      <Chooseprogram/>
     <StudentRevies/>
     <Subscribe/>
     <Footer/>
     
     
     {/* <Card/> */}


     
      
     
      
      
    </main>
      
   
  );
}

export default App;

