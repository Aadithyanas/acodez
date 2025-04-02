import React from 'react';

function Table({ Nos, title, sub, img }) {
  return (
    <div className='flex flex-col md:flex-row gap-6 md:gap-20 h-auto md:h-48 justify-between items-center p-4 md:p-6 w-full'>
      {/* Number Section */}
      <div className={`text-2xl text-center font-bold ${img ? 'text-white' : 'text-black'}`}>
        <h1 className='lg:text-black'>{Nos}</h1>
      </div>

      {/* Image or Title Section */}
      <div className='relative flex items-center justify-center w-full md:w-auto'>
        {img ? (
          <>
             <img className='w-full max-h-50 absolute inset-0 lg:w-full lg:h-40 sm:max-h-32' src={img} alt="" />
            <img className='absolute w-auto max-h-50 top-20 left-10' src="Elipse.png" alt="" />
            <div className='relative text-2xl text-white text-center md:text-left  w-full md:w-[25rem] p-2'>
              {title}
            </div>
          </>
        ) : (
          <div className='text-2xl text-center md:text-left w-full md:w-[25rem]'>
            {title}
          </div>
        )}
      </div>

      {/* Subtitle Section */}
      <div className={`text-sm text-center md:text-left max-w-[300px] ${img ? 'text-white' : 'text-black'}`}>
        <p className='lg:text-black' >{sub}</p>
      </div>
    </div>
  );
}

export default Table;
