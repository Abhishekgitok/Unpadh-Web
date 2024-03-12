// App.js
import React from 'react';
import Nabar from './components/Navbar';
import Header from './components/Header';
import Heading from './components/Heading';
import Program from './components/Program';
import Course from './components/Course';
import Chooseprogram from './components/Chooseprogram';



function App() {
  return (
    
      <main className="max-w-[1920px] bg-white mx-auto overflow-hidden  ">
      <Nabar/>
      <Header/>
      <Heading/>
      <Program/>
      <Course/>
      <Chooseprogram/>

     
      
     
      
      
    </main>
      
   
  );
}

export default App;

