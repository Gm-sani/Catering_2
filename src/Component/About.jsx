import React from 'react'
import about_2 from './About_2.jpg'
export default function About() {
  return (
    <div className='maincontainer h-[93vh] p-3'>
        <div className=' flex justify-center rounded-2xl h-[89vh] '>

        <div className='img h-[85vh] w-[45vw]'>
        <img src={about_2} alt="" className='h-[89vh] w-[40vw]'/>
    </div>

    <div className='textsection h-[85vh] w-[45vw] text-center pt-3'>
        <p className='font-serif text-4xl p-7'>About Catering</p>
        <p className='font-sans text-lg font-light p-3'>Tradition since 1889</p>
        <p className='font-sans'>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
   <p className='font-sans text-lg font-light p-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

        </div>
    
    </div>
  )
}
