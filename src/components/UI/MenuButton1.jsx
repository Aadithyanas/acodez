

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuButton1 = () => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate(); 

  return (
    <button 
      className='absolute z-20 bottom-6 left-1/2 -translate-x-1/2 bg-white text-white p-2 rounded-full transition-all duration-200'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? (
        <div className='flex items-center gap-2'>
          <div className='h-10 w-10 rounded-full flex items-center justify-center bg-[#84C08A] cursor-pointer'>
            <i className="ri-bar-chart-horizontal-line"></i>
          </div>
          <div 
            className='h-10 w-fit rounded-full bg-[#187EB4] px-4 flex items-center justify-center cursor-pointer'
            onClick={() => navigate('/menu')} // Navigate to Menu Page
          >
            Contact Us
          </div>
        </div>
      ) : (
        <img src="button_logo.png" alt="" className='max-w-8 mx-4' />
      )}
    </button>
  );
}

export default MenuButton1;


