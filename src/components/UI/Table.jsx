import React from 'react';

function Table({ Nos, title, sub, img }) {
  return (
    <div className='flex gap-20 h-48 justify-between items-center'>
      
      {/* Number Section */}
      <div className={`ml-5 z-3 w-10 text-2xl text-center ${img ? 'text-white' : 'text-black'}`}>

        <h1>{Nos}</h1>
      </div>

      {/* Image or Title Section */}
      {img ? (
        <>
         <img className='w-full max-h-50 absolute -left-1 z-0' src={img} alt="" />
         <img className=' absolute w-auto max-h-50 top-110 left-35' src="Elipse.png" alt="" />
         
         <div className='w-[25rem] z-3 text-2xl text-left text-white'>
          {title}
        </div>
        </>
       
        
      ) : (
        <div className='w-[25rem] z-3 text-2xl text-left'>
          {title}
        </div>
      )}

      {/* Subtitle Section */}
      <div className={` z-2 max-w-[300px] text-sm ${img ? 'text-white' : 'text-black'}`}>
        <p>{sub}</p>
      </div>

    </div>
  );
}

export default Table;
