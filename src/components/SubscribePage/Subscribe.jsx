import React from 'react'
import Button from './Button';

function Subscribe  ()  {
  return (
    <>
     <section className=' h-[350px] bg-teal-100 '>
      <div className='justify-center items-center pt-10 capitalize '>
        <h1 className='text-center text-4xl font-semibold tracking-wide'>Subscribe to our <span className='text-teal-600'>unpadh</span></h1>
        <p className='text-center text-black font-medium py-8 tracking-wide'>Get notification about course, new product and exclusive tranding course just for you.</p>
      </div>
      <div className='py-8 flex mx-auto items-center justify-center'> 
      <Button/>
      </div>


    </section>
      
    </>
  )
}

export default Subscribe;
