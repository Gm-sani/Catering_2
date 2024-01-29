import React from 'react'

import menu_3 from './menu_3.jpg'
export default function Menu() {
  return (
    <div className='maincontainer h-[93vh] p-3'>
        <div className=' flex justify-center rounded-2xl h-[89vh] '>

    <div className='textsection h-[85vh] w-[45vw] pl-5 pt-3'>
        <p className='font-serif text-4xl p-7 text-center '>Our Menu</p>
        <p  className='font-serif text-xl pt-3'>Bread Basket</p>
        <p className='font-sans text-sm font-light pt-3'>Assortment of fresh baked fruit breads and muffins 5.50</p>
        <p  className='font-serif text-xl pt-10'>Honey Almond Granola with Fruits</p>
        <p className='font-sans text-sm font-light pt-3'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
        <p  className='font-serif text-xl pt-10'>Belgian Waffle</p>
        <p className='font-sans text-sm font-light pt-3'>Vanilla flavored batter with malted flour 7.50</p>
        <p  className='font-serif text-xl pt-10'>Scrambled eggs</p>
        <p className='font-sans text-sm font-light pt-3'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
        <p  className='font-serif text-xl pt-10'>Blueberry Pancakes</p>
        <p className='font-sans text-sm font-light pt-3'>With syrup, butter and lots of berries 8.50</p>
    </div>

    <div className='img h-[85vh] w-[45vw] flex justify-center'>
        <img src={menu_3} alt="" className='h-[89vh] w-[35vw]'/>
    </div>

        </div>
    
    </div>
  )
}
