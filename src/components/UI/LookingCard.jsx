import React from 'react'

const LookingCard = ({ url, c, head, para }) => {
    const shadow = head[0];
    return (
        <div className='relative max-w-[35rem] rounded-[4rem] overflow-hidden text-white'>
            <img src={url} alt="" className='w-full' />

            <div className="absolute w-full top-1/2 left-0 -translate-y-1/2 flex items-center justify-center gap-13 p-8">
                <div className='relative h-fit'>
                    <h1 className='text-9xl font-medium'>{c}</h1>
                    <h1 className='text-[12rem] font-medium opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{shadow}</h1>
                </div>

                <div>
                    <h2 className='text-6xl font-medium mb-4'>{head}</h2>
                    <p className='text-4xl font-light'>{para}</p>
                </div>
            </div>
        </div>
    )
}

export default LookingCard
