// App.js
import React from 'react';

import Nav from './components/Navbar/Menubar';
import HeroSection from './components/HeroSection';
import Header from './components/Heading/Heading';
// import Program from './components/OurProgram/Program';
// import Course from './components/Course/Course';
// import Chooseprogram from './components/ChooseProgram/Chooseprogram';  
// import StudentRevies from './components/Testimonials/StudentRevies';
// import Card from './components/Course/card';




function App() {
  return (
    
      <main className=" bg-white mx-auto overflow-hidden   ">
       <Nav/>
      <HeroSection/>
      <Header/>
      {/* <Program/> */}
      {/* <Course/> */}
      {/* <Chooseprogram/> */}
     {/* <StudentRevies/> */}
     {/* <Card/> */}


     
      
     
      
      
    </main>
      
   
  );
}

export default App;

