import React from 'react'
import FooterDotGrid from './FooterDotGrid'
import ArrowButtonWhite from './ArrowButtonWhite'
import "../customStyles/textGradient.css"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    
    return (
        <div className='relative overflow-hidden'>
            <img src="footer_bg.png" alt="" className='w-full object-cover min-h-[40rem]' />
            
            <div className="absolute z-10 top-0 w-full px-4 md:px-6 lg:px-8 mt-16 md:mt-28 lg:mt-40">
                <div className="relative">
                    <FooterDotGrid />
                    <div className="absolute flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-8 lg:px-12 top-1/2 -translate-y-1/2 gap-6 md:gap-4">
                        <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left'>
                            Achieve your business goals today. <br className="hidden md:block" />
                            Book a discovery call now!
                        </h2>
                        
                        <ArrowButtonWhite>CONNECT</ArrowButtonWhite>
                    </div>
                </div>
                
                <div className="relative mt-12 md:mt-16">
                    <img src="logo_icon.png" alt="" className='w-[10rem] sm:w-[12rem] md:w-[16rem] lg:w-[20rem] mx-auto opacity-30' />
                    <h1 className='text-5xl sm:text-7xl md:text-9xl lg:text-[12.5rem] font-semibold absolute top-4 left-1/2 w-fit -translate-x-1/2 main_gradient'>Wisetree</h1>
                </div>
                
                <hr className='border-t border-t-white my-4 md:my-6 mx-4 md:mx-6 opacity-40' />
                
                <div className='flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6 text-white gap-6 md:gap-0 pb-8'>
                    <div className="flex items-center gap-4 md:gap-6 text-lg md:text-xl">
                        <i className="ri-facebook-fill cursor-pointer hover:scale-105"></i>
                        <i className="ri-instagram-line cursor-pointer hover:scale-105"></i>
                        <i className="ri-twitter-x-line cursor-pointer hover:scale-105"></i>
                        <i className="ri-youtube-line cursor-pointer hover:scale-105"></i>
                        <i className="ri-linkedin-fill cursor-pointer hover:scale-105"></i>
                    </div>
                    
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                        <p className='cursor-pointer hover:scale-105 text-sm md:text-base'
                            onClick={() => navigate('/about')}
                        >About</p>
                        <p className='cursor-pointer hover:scale-105 text-sm md:text-base'>Service</p>
                        <p className='cursor-pointer hover:scale-105 text-sm md:text-base'>Blog</p>
                        <p className='cursor-pointer hover:scale-105 text-sm md:text-base'>Case Study</p>
                        <p className='cursor-pointer hover:scale-105 text-sm md:text-base'>Work</p>
                        <p className='cursor-pointer hover:scale-105 text-sm md:text-base'>Career</p>
                    </div>
                    
                    <p className="text-sm md:text-base mt-4 md:mt-0">© 2024 wisetree. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer