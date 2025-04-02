import React from 'react'
import FooterDotGrid from './FooterDotGrid'
import ArrowButtonWhite from './ArrowButtonWhite'
import "../customStyles/textGradient.css"
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate=useNavigate()

    return (
        <div className='relative max-h-[50rem] overflow-hidden'>
            <img src="footer_bg.png" alt="" className='w-full object-cover' />

            <div className="absolute z-10 top-0 mt-40">
                <div className="relative">
                    <FooterDotGrid />
                    <div className="absolute flex items-center justify-between w-full px-12 top-1/2 -translate-y-1/2">
                        <h2 className='text-white text-4xl'>Achieve your business goals today. <br />
                            Book a discovery call now!</h2>

                        <ArrowButtonWhite>CONNECT</ArrowButtonWhite>
                    </div>
                </div>

                <div className="relative">
                    <img src="logo_icon.png" alt="" className='w-[20rem] mx-auto opacity-30' />
                    <h1 className='text-[12.5rem] font-semibold absolute top-4 left-1/2 w-fit -translate-x-1/2 main_gradient'>Wisetree</h1>
                </div>
                <hr className='border-t border-t-white my-6 mx-6 opacity-40' />
                <div className='flex items-center justify-between px-6 text-white'>
                    <div className="flex items-center gap-4 text-xl">
                        <i className="ri-facebook-fill cursor-pointer hover:scale-105"></i>
                        <i className="ri-instagram-line cursor-pointer hover:scale-105"></i>
                        <i className="ri-twitter-x-line cursor-pointer hover:scale-105"></i>
                        <i className="ri-youtube-line cursor-pointer hover:scale-105"></i>
                        <i className="ri-linkedin-fill cursor-pointer hover:scale-105"></i>
                    </div>

                    <div className="flex items-center gap-4">
                        <p className='cursor-pointer hover:scale-105' 
                        onClick={() => navigate('/about')}
                        >About</p>
                        <p className='cursor-pointer hover:scale-105'>Service</p>
                        <p className='cursor-pointer hover:scale-105'>Blog</p>
                        <p className='cursor-pointer hover:scale-105'>Case Study</p>
                        <p className='cursor-pointer hover:scale-105'>Work</p>
                        <p className='cursor-pointer hover:scale-105'>Career</p>
                    </div>

                    <p>© 2024 wisetree. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
