import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  return (
    <main className='max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8'>
      <section className='p-4 sm:p-6 relative'>
        <div className="overflow-hidden">
          <div className="relative">
            <img src="Subtract.png" alt="" className='w-full' />
            <img src="logo.png" alt="Wisetree" className="absolute top-[2%] left-[2%] max-w-[15%] sm:max-w-[12.5%]" />
          </div>
          <div className='absolute top-20 sm:top-30 flex flex-col gap-6 sm:gap-10 w-full'>
            {['Discover Wisetree', 'Solutions', 'Wisehub', 'Grow with us'].map((item, index) => (
              <div key={index} className='text-white px-4 sm:px-10'>
                <div className='flex justify-between items-center px-4 sm:px-10'>
                  <div className='text-2xl sm:text-5xl'>{item}</div>
                  <div className='text-lg sm:text-xl'>{`0${index + 1}`}</div>
                </div>
                <hr className="my-2 sm:my-4 opacity-30" />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute z-20 bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-white p-2 rounded-full transition-all duration-200"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? (
            <div className="flex items-center gap-2">
              <div
                className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center bg-[#84C08A] cursor-pointer"
                onClick={() => navigate('/')}
              >
                X
              </div>
              <div className="h-8 sm:h-10 w-fit rounded-full bg-[#187EB4] px-3 sm:px-4 flex items-center justify-center"
                onClick={() => navigate('/')}
              >
                Home
              </div>
            </div>
          ) : (
            <img src="button_logo.png" alt="" className="max-w-6 sm:max-w-8 mx-2 sm:mx-4" />
          )}
        </button>
      </section>
    </main>
  );
}

export default Menu;
