import React from 'react'

export default function Navbar() {
  return (
    <div>
     <div className='h-[7vh] bg-slate-400 text-black p-3 flex justify-between font-serif'>
        <div>
            <p>Catering</p>
        </div>
        <div className='flex gap-5'>
            <p>About</p>
            <p>Menu</p>
            <p>Contact</p>
        </div>
     </div>
    </div>
  )
}
