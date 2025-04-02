import ArrowButtonBlue from "./UI/ArrowButtonBlue";
import ArrowButtonWhite from "./UI/ArrowButtonWhite";
import DotGrid from "./UI/DotGrid";
import LookingCard from "./UI/LookingCard";
import MenuButton1 from "./UI/MenuButton1";
import "./customStyles/textGradient.css"
import "./customStyles/scrollbar.css"
import Footer from "./UI/Footer";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [sliderExpand, setSliderExpand] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(1);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  ///////////
  
 

  // Check viewport size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to navigate to next card on mobile
  const nextCard = () => {
    setActiveCard((prev) => (prev === 4 ? 1 : prev + 1));
  };

  // Function to navigate to previous card on mobile
  const prevCard = () => {
    setActiveCard((prev) => (prev === 1 ? 4 : prev - 1));
  };






  // Loading animation component
  const LoadingAnimation = () => (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <img src="logo.png" alt="Wisetree" className="max-w-xs w-2/3 mb-8 animate-pulse" />
      <div className="flex space-x-2">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#052842] to-[#2A5EA5] animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#2A5EA5] to-[#7BB885] animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#7BB885] to-[#052842] animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );

  return (
    <>
      {loading && <LoadingAnimation />}
      
      <main className={`max-w-[1366px] mx-auto relative ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        {/* Hero Section */}
        <section className='p-3 md:p-6'>
          <div className="relative overflow-hidden">
            <div className="relative">
              <img src="Subtract.png" alt="" className='w-full' />
              <img src="logo.png" alt="Wisetree" className="absolute top-[2%] left-[2%] max-w-[12.5%] min-w-[80px]" />
            </div>

            <div className='absolute top-0 w-full h-full text-white'>
              <img className='max-w-xs md:max-w-96 absolute left-[5%] md:left-1/12 top-1/2 -translate-y-1/2 hidden md:block' src="left.png" alt="" />
              <img className='max-w-xs md:max-w-96 absolute right-[5%] md:right-1/12 top-1/2 -translate-y-10/12 hidden md:block' src="right.png" alt="" />
              
              {/* Responsive headings */}
              <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-bold uppercase whitespace-nowrap absolute top-5/12 left-1/2 -translate-x-1/2 md:left-1/3 md:translate-x-0 text-center md:text-left'>
                Don't Just Keep Up, OutRun
              </h1>
              <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-bold uppercase whitespace-nowrap absolute top-7/12 left-1/2 -translate-x-1/2 md:-left-[54%] md:translate-x-0 hidden md:block'>
                Don't Just Keep Up, OutRun
              </h1>
              
              {/* Center button */}
              <div className='w-28 h-28 md:w-44 md:h-44 rounded-full flex items-center justify-center bg-gradient-to-br from-[#052842] via-[#2A5EA5] to-[#7BB885] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                <h2 className="text-xl md:text-4xl font-medium uppercase text-center">Let's <br />Talk</h2>
              </div>
              
              {/* Description paragraph */}
              <p className="max-w-60 absolute bottom-[10%] md:top-3/5 left-1/2 -translate-x-1/2 md:left-4/6 md:translate-x-0 font-light text-sm md:text-base text-center md:text-left">
                Wisetree Brands is your trusted partner to help you stand out, craft sustainable Brand strategies, and create a lasting impression.
              </p>
            </div>
            <MenuButton1 />
          </div>
        </section>

        {/* What Makes Us Unique Section */}
        <section className="pt-8 md:pt-16 pb-16 md:pb-28 px-4 md:px-6 bg-white relative z-10 rounded-b-[3rem] md:rounded-b-[5rem]">
          <h1 className="font-base text-sm md:text-base">WHAT MAKES US UNIQUE</h1>
          <hr className="my-2 md:my-4 opacity-30" />
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-[#104386]">Redefining success for</h1>
          <h1 className="text-3xl sm:text-5xl md:text-7xl light_gradient w-fit">B2B Brands</h1>
          
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="flex items-end justify-center md:justify-start mb-6 md:mb-0">
              <ArrowButtonBlue>LEARN MORE</ArrowButtonBlue>
            </div>
            <div className="text-[#2B2A29E5] text-sm md:text-base">
              Wisetree Brands stands out for its commitment to deliver sustainable and high-performance growth for B2B organisations, through a unique, proprietary organic growth engineering methodology. A brand-first philosophy, and an agile, experienced team sets Wisetree Brands apart in the B2B marketing landscape.
              Distinct from conventional methods, Wisetree uses a <strong>Brand-First Philosophy</strong> that focuses on sustainable, long-term growth, specifically adapted for the post-digital landscape.
            </div>
            <div className="text-[#2B2A29E5] text-sm md:text-base mt-4 md:mt-0">
              Our strategies are designed to be an efficient investment, relative to revenue, delivering substantial returns such as increased ROI and enhanced customer loyalty. We focus on optimising Per Customer Spend by increasing the Lifetime Value (LTV) of the Client, through our brand-first approach. By building strong brand foundations and strengthening Marketing Operations, using our unique, proprietary <strong>5D framework</strong>, we create long-term value that significantly reduces marketing costs. Learn how we apply this framework to guide businesses to success.
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="-mt-10 md:-mt-20 relative rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
          <img src="bg2.png" alt="" className="relative max-h-[30rem] md:max-h-[62rem] w-full object-cover" />

          <div className="p-4 md:p-6 absolute top-10 md:top-40 text-[#FCFFF9D9]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              <p className="text-sm md:text-base">We are the B2B branding experts who create long-term value for brands, which ultimately translates into deeper connections with Prospects and Clients. Our sustainable, integrated marketing, communication, and partnership strategies drive substantial ROI growth and significantly enhance trust and client loyalty, which are critical</p>
              
              <h2 className="text-4xl md:text-7xl dark_gradient font-bold w-fit mx-auto my-6 md:my-0 text-center">Who <br /> We <br /> Are</h2>
              
              <p className="text-sm md:text-base">for long-term business relationships and sustained success​. As a B2B Brand and Marketing Consulting Firm we are at the forefront of redefining success metrics that we achieve through consistent, and customised engineered efforts.</p>
              
              <div className="flex items-end justify-center md:justify-start md:mb-8 md:ml-8 my-6 md:my-0">
                <ArrowButtonWhite>Learn More</ArrowButtonWhite>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-16">
              <div className="hidden md:block"></div>
              <img src="who1.png" alt="" className="rounded-2xl max-w-full md:max-w-68 mx-auto" />
              <img src="who2.png" alt="" className="rounded-2xl max-w-full md:max-w-68 mx-auto" />
              <img src="who3.png" alt="" className="rounded-2xl max-w-full md:max-w-68 mx-auto hidden sm:block" />
            </div>

            <div className="text-right text-3xl p-4 md:p-6">
              <i className="ri-arrow-right-line cursor-pointer"></i>
            </div>
          </div>
        </section>

        {/* Looking Section */}
        <section className="p-4 sm:p-6 my-10 sm:my-16 md:my-20">
      <div className="text-3xl sm:text-5xl md:text-7xl text-center h-fit">
        <h1 className="text-[#144486]">If you're looking at us,</h1>
        <h1 className="light_gradient leading-normal -mt-1 sm:-mt-2">You're looking to</h1>
      </div>
      
      {/* Mobile view - carousel/slider */}
      {isMobile && (
        <div className="relative mt-8 min-h-[24rem]">
          <div className="absolute inset-0 flex items-center justify-center">
            {activeCard === 1 && <LookingCard url="looking1.png" c={1} head="GAIN" para="Gain Buyer's Trust" />}
            {activeCard === 2 && <LookingCard url="looking2.png" c={2} head="ENHANCE" para="Enhance Sales Quota Attainment" />}
            {activeCard === 3 && <LookingCard url="looking3.png" c={3} head="GENERATE" para="Generate Demand" />}
            {activeCard === 4 && <LookingCard url="looking4.png" c={4} head="BUILD" para="Build A Distintive Brand" />}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num} 
                className={`w-3 h-3 rounded-full cursor-pointer ${activeCard === num ? 'bg-[#144486]' : 'bg-gray-300'}`}
                onClick={() => setActiveCard(num)}
              />
            ))}
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full"
            onClick={prevCard}
            aria-label="Previous card"
          >
            <i className="ri-arrow-left-s-line text-2xl text-[#144486]"></i>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full"
            onClick={nextCard}
            aria-label="Next card"
          >
            <i className="ri-arrow-right-s-line text-2xl text-[#144486]"></i>
          </button>
        </div>
      )}
      
      {/* Desktop view - original layout */}
      {!isMobile && (
        <div className="relative min-h-[30rem]">
          {/* Card 1 - Primary focus */}
          <div className="absolute left-10 md:left-20 -top-12 z-[8]">
            <LookingCard url="looking1.png" c={1} head="GAIN" para="Gain Buyer's Trust" />
          </div>
          
          {/* Card 2 - Secondary */}
          <div className="absolute right-0 blur-[1px] md:blur-[2px] scale-75 md:scale-70 z-[6]">
            <LookingCard url="looking2.png" c={2} head="ENHANCE" para="Enhance Sales Quota Attainment" />
          </div>
          
          {/* Card 3 - Further back */}
          <div className="absolute right-40 md:right-60 -bottom-20 blur-[3px] md:blur-[4px] scale-50 md:scale-40 z-[4]">
            <LookingCard url="looking3.png" c={3} head="GENERATE" para="Generate Demand" />
          </div>
          
          {/* Card 4 - Most distant */}
          <div className="absolute left-24 md:left-44 -bottom-32 scale-45 md:scale-35 blur-[5px] md:blur-[6px] z-[2]">
            <LookingCard url="looking4.png" c={4} head="BUILD" para="Build A Distintive Brand" />
          </div>
        </div>
      )}
    </section>

        {/* Services Section */}
        <section className="overflow-hidden mb-8 md:mb-12">
          <div className="relative">
            <DotGrid />

            <h1 className="px-4 md:px-6 absolute text-5xl md:text-[10rem] left-0 top-1/2 -translate-y-1/2 opacity-40 md:opacity-100">Services</h1>
          </div>

          <h1 className="px-4 md:px-6 text-3xl sm:text-5xl md:text-7xl text-[#104386] mt-6 md:mt-0">Empowering B2B Leaders to</h1>
          <h1 className="px-4 md:px-6 text-3xl sm:text-5xl md:text-7xl light_gradient w-fit leading-normal">Scale Organically</h1>

          <div className="overflow-x-auto px-4 md:px-6 h-[12rem] md:h-[20rem] flex items-center gap-4 mt-4 md:mt-8 image_slider transition-all duration-100 hide-scrollbar">
            {sliderExpand ?
              <img src="sliderCards1_enlarge.png" alt="" className="h-full cursor-pointer" onClick={() => setSliderExpand(false)} /> :
              <img src="sliderCards1.png" alt="" className="h-full cursor-pointer" onClick={() => setSliderExpand(true)} />
            }
            <img src="sliderCards2.png" alt="" className="h-full" />
            <img src="sliderCards3.png" alt="" className="h-full" />
            <img src="sliderCards4.png" alt="" className="h-full" />
            <img src="sliderCards5.png" alt="" className="h-full" />
            <img src="sliderCards6.png" alt="" className="h-full" />
            <img src="sliderCards7.png" alt="" className="h-full" />
          </div>
        </section>

        {/* Blog Section */}
        <section className="my-6 md:my-8 pb-20 md:pb-36 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden bg-white relative z-10">
          <h1 className="font-base text-sm md:text-base px-4 md:px-6">WHAT MAKES US UNIQUE</h1>
          <hr className="my-2 md:my-4 opacity-30 mx-4 md:mx-6" />

          <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-20 w-full relative px-4 md:px-0">
            {/* Left image - hide on small screens */}
            <img src="Rectangle 94280.png" alt="" className="h-auto md:h-[30rem] -rotate-10 origin-bottom hidden md:block" />
            
            {/* Center content */}
            <div className="text-center max-w-full md:max-w-md mx-auto my-8 md:my-0">
              <p className="text-[#2B2A29BF] text-sm md:text-base">
                <span className="pr-2 md:pr-4 border-r">Oct 15, 2024</span>
                <span className="border-l pl-2 md:pl-4">Brand Identity</span>
              </p>
              <h3 className="my-6 md:my-12 text-xl md:text-3xl px-2 md:px-6 font-medium text-[#144486E5]">
                Define a unique and clear brand identity that resonates with the relevant target audience 
              </h3>
              <button className="text-[#2B2A29BF] border-2 border-[#2B2A29DF] px-4 md:px-6 py-2 md:py-3 rounded-full cursor-pointer text-sm md:text-base">
                VIEW BLOG
              </button>
            </div>
            
            {/* Right image - hide on small screens */}
            <img src="Rectangle 94281.png" alt="" className="h-auto md:h-[30rem] rotate-10 origin-bottom hidden md:block" />

            <i className="ri-arrow-right-line cursor-pointer absolute bottom-6 right-6 text-[#144486] md:text-white text-2xl md:text-3xl"></i>
          </div>
        </section>

        {/* Footer */}
        <footer className="-mt-16 md:-mt-28">
          <Footer />
        </footer>
      </main>

      {/* Add responsive styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 768px) {
          .scale-70, .scale-40, .scale-35 {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default LandingPage;