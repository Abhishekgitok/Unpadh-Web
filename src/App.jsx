// App.js
import React from 'react';

// import Nav from './components/Navbar/Menubar';
import HeroSection from './components/HeroSection';
import Heading from './components/Heading';
import Program from './components/Program';
import Course from './components/Course';
import Chooseprogram from './components/Chooseprogram';
import Student from './components/Student';




function App() {
  return (
    
      <main className=" bg-white mx-auto overflow-hidden   ">
       {/* <Nav/> */}
      <HeroSection/>
      <Heading/>
      <Program/>
      <Course/>
      <Chooseprogram/>
      <Student/>


     
      
     
      
      
    </main>
      
   
  );
}

export default App;

