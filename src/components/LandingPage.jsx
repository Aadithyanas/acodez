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

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <img src="logo.png" alt="Wisetree" className="max-w-xs mb-8 animate-pulse" />
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
        <section className='p-6'>
          <div className="relative overflow-hidden">
            <div className="relative">
              <img src="Subtract.png" alt="" className='w-full' />
              <img src="logo.png" alt="Wisetree" className="absolute top-[2%] left-[2%] max-w-[12.5%]" />
            </div>

            <div className='absolute top-0 w-full h-full text-white'>
              <img className='max-w-96 absolute left-1/12 top-1/2 -translate-y-1/2' src="left.png" alt="" />
              <img className='max-w-96 absolute right-1/12 top-1/2 -translate-y-10/12' src="right.png" alt="" />
              <h1 className='text-8xl font-bold uppercase whitespace-nowrap absolute top-5/12 left-1/3'>Don't Just Keep Up, OutRun</h1>
              <h1 className='text-8xl font-bold uppercase whitespace-nowrap absolute top-7/12 -left-[54%]'>Don't Just Keep Up, OutRun</h1>
              <div className='bg-red-50 w-44 h-44 rounded-full flex items-center justify-center bg-gradient-to-br from-[#052842] via-[#2A5EA5] to-[#7BB885] absolute left-1/2 top-1/2 z-10'>
                <h2 className="text-4xl font-medium uppercase">Let's <br />Talk</h2>
              </div>
              <p className="max-w-60 absolute top-3/5 left-4/6 font-light">Wisetree Brands is your trusted partner to help you stand out, craft sustainable Brand strategies, and create a lasting impression.</p>
            </div>
            <MenuButton1 />
          </div>
        </section>

        <section className="pt-16 pb-28 px-6 bg-white relative z-10 rounded-b-[5rem]">
          <h1 className="font-base">WHAT MAKES US UNIQUE</h1>
          <hr className="my-4 opacity-30" />
          <h1 className="text-7xl text-[#104386]">Redefining success for</h1>
          <h1 className="text-7xl light_gradient w-fit">B2B Brands</h1>
          <div className=" mt-8 grid grid-cols-3 gap-8">
            <div className="flex items-end">
              <ArrowButtonBlue>LEARN MORE</ArrowButtonBlue>
            </div>
            <div className="text-[#2B2A29E5]">Wisetree Brands stands out for its commitment to deliver sustainable and high-performance growth for B2B organisations, through a unique, proprietary organic growth engineering methodology. A brand-first philosophy, and an agile, experienced team sets Wisetree Brands apart in the B2B marketing landscape.
              Distinct from conventional methods, Wisetree uses a <strong>Brand-First Philosophy</strong> that focuses on sustainable, long-term growth, specifically adapted for the post-digital landscape.</div>
            <div className="text-[#2B2A29E5]">Our strategies are designed to be an efficient investment, relative to revenue, delivering substantial returns such as increased ROI and enhanced customer loyalty. We focus on optimising Per Customer Spend by increasing the Lifetime Value (LTV) of the Client, through our brand-first approach. By building strong brand foundations and strengthening Marketing Operations, using our unique, proprietary <strong>5D framework</strong>, we create long-term value that significantly reduces marketing costs. Learn how we apply this framework to guide businesses to success.</div>
          </div>
        </section>

        <section className="-mt-20 relative rounded-b-[5rem] overflow-hidden">
          <img src="bg2.png" alt="" className="relative max-h-[62rem] w-full object-cover" />

          <div className="p-6 absolute top-40 text-[#FCFFF9D9]">
            <div className="grid grid-cols-4 gap-8">
              <p>We are the B2B branding experts who create long-term value for brands, which ultimately translates into deeper connections with Prospects and Clients. Our sustainable, integrated marketing, communication, and partnership strategies drive substantial ROI growth and significantly enhance trust and client loyalty, which are critical</p>
              <h2 className="text-7xl dark_gradient font-bold w-fit mx-auto">Who <br /> We <br /> Are</h2>
              <p>for long-term business relationships and sustained success​. As a B2B Brand and Marketing Consulting Firm we are at the forefront of redefining success metrics that we achieve through consistent, and customised engineered efforts.</p>
              <div className="flex items-end mb-8 ml-8"><ArrowButtonWhite>Learn More</ArrowButtonWhite></div>
            </div>

            <div className="grid grid-cols-4 gap-8 mt-16">
              <div></div>
              <img src="who1.png" alt="" className="rounded-2xl max-w-68 mx-auto" />
              <img src="who2.png" alt="" className="rounded-2xl max-w-68 mx-auto" />
              <img src="who3.png" alt="" className="rounded-2xl max-w-68 mx-auto" />
            </div>

            <div className="text-right text-3xl p-6">
              <i className="ri-arrow-right-line cursor-pointer"></i>
            </div>
          </div>
        </section>

        <section className="p-6 my-20">
          <div className="text-7xl text-center h-fit">
            <h1 className="text-[#144486]">If you're looking at us,</h1>
            <h1 className="light_gradient leading-normal -mt-2">You're looking to</h1>
          </div>

          <div className="relative min-h-[30rem]">
            <div className="absolute left-20 -top-12 z-[8]">
              <LookingCard url="looking1.png" c={1} head="GAIN" para="Gain Buyer's Trust" />
            </div>
            <div className="absolute right-0 blur-[2px] scale-70 z-[6]">
              <LookingCard url="looking2.png" c={2} head="ENHANCE" para="Enhance Sales Quota Attainment" />
            </div>
            <div className="absolute right-60 -bottom-20 blur-[4px] scale-40 z-[4]">
              <LookingCard url="looking3.png" c={3} head="GENERATE" para="Generate Demand" />
            </div>
            <div className="absolute left-44 -bottom-32 scale-35 blur-[6px]">
              <LookingCard url="looking4.png" c={4} head="BUILD" para="Build A Distintive Brand" />
            </div>
          </div>
        </section>

        <section className="overflow-hidden mb-12">
          <div className="relative">
            <DotGrid />

            <h1 className="px-6 absolute text-[10rem] left-0 top-1/2 -translate-y-1/2">Services</h1>
          </div>

          <h1 className="px-6 text-7xl text-[#104386]">Empowering B2B Leaders to</h1>
          <h1 className="px-6 text-7xl light_gradient w-fit leading-normal">Scale Organically</h1>

          <div className="overflow-auto px-6 h-[20rem] flex items-center gap-4 mt-8 image_slider transition-all duration-100">
            {sliderExpand ?
              <img src="sliderCards1_enlarge.png" alt="" className="h-full" onClick={() => setSliderExpand(false)} /> :
              <img src="sliderCards1.png" alt="" className="h-full" onClick={() => setSliderExpand(true)} />
            }
            <img src="sliderCards2.png" alt="" className="h-full" />
            <img src="sliderCards3.png" alt="" className="h-full" />
            <img src="sliderCards4.png" alt="" className="h-full" />
            <img src="sliderCards5.png" alt="" className="h-full" />
            <img src="sliderCards6.png" alt="" className="h-full" />
            <img src="sliderCards7.png" alt="" className="h-full" />
          </div>
        </section>

        <section className="my-8 pb-36 rounded-b-[5rem] overflow-hidden bg-white relative z-10">
          <h1 className="font-base">WHAT MAKES US UNIQUE</h1>
          <hr className="my-4 opacity-30" />

          <div className="flex items-center justify-between mt-20 w-full relative">
            <img src="Rectangle 94280.png" alt="" className="h-[30rem] -rotate-10 origin-bottom" />
            <div className="text-center">
              <p className="text-[#2B2A29BF]"><span className="pr-4 border-r">Oct 15, 2024</span><span className="border-l pl-4">Brand Identity</span></p>
              <h3 className="my-12 text-3xl px-6 font-medium text-[#144486E5]">Define a unique and clear brand identity that resonates with the relevant target audience </h3>
              <button className="text-[#2B2A29BF] border-2 border-[#2B2A29DF] px-6 py-3 rounded-full cursor-pointer">VIEW BLOG</button>
            </div>
            <img src="Rectangle 94281.png" alt="" className="h-[30rem] rotate-10 origin-bottom" />

            <i className="ri-arrow-right-line cursor-pointer absolute bottom-6 right-6 text-white text-3xl"></i>
          </div>
        </section>

        <footer className="-mt-28">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default LandingPage;