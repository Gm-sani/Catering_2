import React from 'react'
import { useNavigate } from 'react-router';

export default function Navbar() {
  const navigate =useNavigate();
  return (
    <div>
     <div className='h-[7vh] bg-slate-400 text-black p-3 flex justify-between font-serif'>
        <div>
            <button onClick={()=>{navigate("/")}} >Catering</button>
        </div>
        <div className='flex gap-5'>
            <button onClick={()=>{navigate("about")}} >About</button>
            <button onClick={()=>{navigate("menu")}} >Menu</button>
            <button onClick={()=>{navigate("cont")}} >Contact</button>
            
        </div>
     </div>
    </div>
  )
}
