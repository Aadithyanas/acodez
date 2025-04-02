import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Menu() {

  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  return (
    <main className='max-w-[1366px] mx-auto '>
      <section className='p-6 relative '>
        <div className=" overflow-hidden">
          <div className="relative">
            <img src="Subtract.png" alt="" className='w-full' />
            <img src="logo.png" alt="Wisetree" className="absolute top-[2%] left-[2%] max-w-[12.5%]" />
          </div>
          <div className='absolute top-30 flex flex-col gap-10'>
            <div className='  text-white px-10'>
              <div className='flex gap-160 justify-between px-10'>
                <div className='text-5xl'>Discover wisetree</div>
                <div>01</div>
              </div>
              <hr className="my-4 opacity-30" />


            </div>
            <div className='  text-white px-10  h-60'>
              <div className='flex gap-160 justify-between px-10'>
                <div className='text-5xl'>Solutions </div>
                <div>02</div>
              </div>
              <hr className="my-4 opacity-30" />


            </div>
            <div className='  text-white px-10'>
              <div className="flex justify-between items-center px-10 relative gap-16">
                <div className="absolute -top-42 text-5xl">
                  <i className="ri-corner-down-right-fill"></i>   Wisehub
                </div>
                <div className=" absolute flex flex-col right-30 -top-40 items-center">
                  <div>
                    <h2>Thoughtflow</h2>
                    <p className='pl-2 text-sm font-extralight'>Insights on Brand & Marketing</p>
                  </div>
                  <div>
                    <h2>The Wise Collective</h2>
                    <p className='pl-2 text-sm font-extralight'>A Library of our Success Stories</p>
                  </div>
                  <div>
                    <h2>WiseWins</h2>
                    <p className='pl-2 text-sm font-extralight'>Our Real-world Inspiring Work</p>
                  </div>
                </div>
                <div className='absolute right-10 bottom-10'>03</div>
              </div>

              <hr className="my-4 opacity-30" />


            </div>
            <div className='  text-white px-10'>
              <div className='flex gap-160 justify-between px-10'>
                <div className='text-5xl'>Grow with us</div>
                <div>04</div>
              </div>
              <hr className="my-4 opacity-30" />


            </div>
          </div>
        </div>
        <button
          className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 bg-white text-white p-2 rounded-full transition-all duration-200"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? (
            <div className="flex items-center gap-2">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center bg-[#84C08A] cursor-pointer"
                onClick={() => navigate('/')}  // Navigate to home page
              >
                X
              </div>
              <div className="h-10 w-fit rounded-full bg-[#187EB4] px-4 flex items-center justify-center"
               onClick={() => navigate('/')}>
                Home
              </div>
            </div>
          ) : (
            <img src="button_logo.png" alt="" className="max-w-8 mx-4" />
          )}
        </button>
      </section>
    </main>
  )
}

export default Menu
