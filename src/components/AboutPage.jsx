import { useEffect, useState } from "react";
import MenuButton1 from "./UI/MenuButton1"
import Table from "./UI/Table"
import "./customStyles/textGradient.css"
import ArrowButtonBlue from "./UI/ArrowButtonBlue";
import GoingPage from "./UI/GoingPage"
import DotGrid from "./UI/DotGrid";
import ArrowButtonWhite from "./UI/ArrowButtonWhite";
import Footer from "./UI/Footer";

function AboutPage() {
    // State to manage loading
    const [loading, setLoading] = useState(true);

    // Scroll to top when component mounts and handle loading animation
    useEffect(() => {
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Simulate loading time (you can replace this with actual content loading logic)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        
        return () => clearTimeout(timer);
    }, []);

    // Loading animation component
    const LoadingAnimation = () => {
        return (
            <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
                <img src="logo.png" alt="Wisetree" className="w-24 sm:w-28 md:w-32 animate-pulse" />
                <div className="mt-4 sm:mt-5 md:mt-6 flex space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">Loading Wisetree...</p>
            </div>
        );
    };

    return (
        <>
            {loading && <LoadingAnimation />}
            
            <main className="max-w-full lg:max-w-[1366px] mx-auto relative overflow-hidden">
                <section className='p-2 sm:p-4 md:p-6 relative overflow-hidden pb-20 sm:pb-24 md:pb-30'>
                    <div className="relative">
                        <img src="Subtract.png" alt="" className='w-full h-auto sm:h-120 md:h-150' />
                        <img src="logo.png" alt="Wisetree" className="absolute top-[1%] left-[2%] max-w-[15%] sm:max-w-[13%] md:max-w-[12.5%]" />
                    </div>

                    <div className='absolute top-0 w-full h-full text-white'>
                        <div className='text-right text-xl sm:text-2xl md:text-3xl p-2 sm:p-3 md:p-4'>
                            <i className="ri-corner-down-right-fill text-xs sm:text-sm md:text-lg absolute top-[15%] left-[42%] transform -translate-x-1/2 -translate-y-1/2 font-light text-center"></i>
                            <h1 className='text-sm sm:text-base md:text-lg absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center'>Discover Wisetree</h1>
                        </div>

                        <img className='max-w-40 sm:max-w-60 md:max-w-80 lg:max-w-96 absolute left-1/12 top-50 -translate-y-1/2' src="left.png" alt="" />
                        <img className='max-w-40 sm:max-w-60 md:max-w-80 lg:max-w-96 absolute right-1/12 top-7/12 -translate-y-10/12' src="right.png" alt="" />
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase whitespace-nowrap absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
                            Attract ,
                        </h1>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase whitespace-nowrap absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            Don't Chase
                        </h1>

                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center px-4 sm:px-6 md:px-8 lg:px-0 w-full sm:w-4/5 md:w-3/4 lg:w-full">
                            We are redefining success in the B2B marketing space through sustainable, brand-centric strategies..
                        </p>

                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white absolute top-[70%] left-[5%] font-light">
                            Home <span className="text-blue-500"> / </span>
                            <span className="text-gray-500 font-extralight">Discover Wisetre</span>
                        </p>

                        <MenuButton1 />
                    </div>
                </section>

                <section className="px-4 sm:px-6 md:px-8 lg:px-10 bg-white relative z-10 rounded-b-[3rem] sm:rounded-b-[4rem] md:rounded-b-[5rem]">
                    <h1 className="font-base uppercase text-sm sm:text-base md:text-lg lg:text-xl">our philosophy</h1>
                    <hr className="my-3 sm:my-4 opacity-30" />

                    <div className="font-medium h-auto px-2 sm:px-4 md:px-6 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-15">
                        <Table Nos={"01"} title={"Organic Growth Engineering"} sub={"Unlike conventional methods, Wisetree uses a tailored approach that focuses on sustainable, long-term growth, specifically adapted for the post-digital landscape. This method integrates brand-building with a strategic emphasis on Marketing Operations."} />
                        <Table Nos={"02"} title={"Brand-First Philosophy and Future-Proofing Approach"} sub={"The company's strategies are brand-first, ensuring that every action reinforces and builds a solid brand foundation. This approach is designed to not only address immediate needs, but also to future-proof businesses against market changes.   "} img={"tableRec.png"} />
                        <Table Nos={"03"} title={"Agile and Innovative Solutions"} sub={"Wisetree employs agile methodologies and original design thinking, allowing for rapid adaptation and creative problem-solving. This flexibility ensures that marketing solutions are not only effective, but also adaptable to evolving industry dynamics."} />
                        <Table Nos={"04"} title={"Experienced and Passionate Team"} sub={"The company boasts a team of seasoned professionals with a track record of shaping successful, integrated marketing strategies across various industries. Their passion for content, communication, and innovative marketing drives a culture of creativity and deep thinking, ensuring that brands don't just grow—they thrive."} />
                    </div>
                </section>

                <section className="mb-20 sm:mb-24 md:mb-30">
                    <div className="-mt-10 sm:-mt-14 md:-mt-18 relative">
                        <img src="secondRectangle.png" alt="" className="w-full" />

                        <div className="absolute left-2 sm:left-4 md:left-6 lg:left-10 top-2 sm:top-4 md:top-8 text-white font-serif text-xs sm:text-sm md:text-base lg:text-lg p-1 sm:p-2 md:p-4 lg:p-6">
                            <img className="left-8 sm:left-12 md:left-16 -mb-2 sm:-mb-3 md:-mb-4 w-4 sm:w-6 md:w-8 lg:w-auto" src="coma.png" alt="" />
                            <p className="indent-5 sm:indent-10 md:indent-20 lg:indent-50 w-full sm:w-[80%] md:w-[70%] lg:w-[50rem] text-xs sm:text-sm md:text-base">As a business owner, I understand the complexities of achieving sustainable growth and profitability. With over two decades of experience in leading marketing teams, I've witnessed the common gaps organisations face. At Wisetree Brands, we bridge those gaps by offering comprehensive solutions, including smart digital marketing, intelligent marketing operations, contemporary content strategies, discerning brand strategies and press distribution. My passion lies in leveraging my expertise and that of our exceptional team to redefine what success looks like for brands in an increasingly digital world.</p>
                        </div>
                        <div className="flex w-fit items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 absolute right-2 sm:right-6 md:right-10 lg:left-[80%] bottom-2 sm:bottom-6 md:bottom-10 lg:top-[85%] transform lg:-translate-x-1/2">
                            <div className="-ml-10 sm:-ml-20 md:-ml-40 lg:-ml-90">
                                <img src="line.png" alt="" className="w-8 sm:w-12 md:w-16 lg:w-auto" />
                            </div>
                            <div>
                                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg w-20 sm:w-24 md:w-32 lg:w-70">Founder, Wisetree Brands</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-3 sm:px-4 md:px-5 lg:px-6 bg-white relative z-10 rounded-b-[3rem] sm:rounded-b-[4rem] md:rounded-b-[5rem]">
                    <h1 className="font-base text-sm sm:text-base md:text-lg lg:text-xl">MISSON</h1>
                    <hr className="my-3 sm:my-4 opacity-30" />
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-[#104386]">Fuelling Business Brilliancer</h1>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl light_gradient w-fit"> Is Our Mission</h1>
                    <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                        <div className="flex items-end">
                            <ArrowButtonBlue>LEARN MORE</ArrowButtonBlue>
                        </div>
                        <div className="text-[#2B2A29E5] text-xs sm:text-sm md:text-base">Our mission is to be the Partner of Choice for global B2B brands to express the truest spirit of their brand, its most authentic purpose, to the ideal audience.</div>
                        <div className="text-[#2B2A29E5] text-xs sm:text-sm md:text-base">We reinforce the brand's vision that truly speaks to its Clients and Partners in the manner that expresses it in the most elevated form, inspires trust, and organically drives long-term, sustainable growth.</div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-12 sm:mt-16 md:mt-20 lg:mt-30">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold text-blue-200">
                            CORE VALUES
                        </h1>
                        <div className="-mt-4 sm:-mt-5 md:-mt-6 lg:-mt-10">
                            <img src="bublegroup.png" alt="" className="w-full md:w-auto" />
                        </div>
                    </div>
                </section>

                <section className="-mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20 relative">
                    <div>
                        <img className="w-full" src="AboutRec3.png" alt="" />
                    </div>
                    <div className="absolute top-10 sm:top-16 md:top-24 lg:top-60 text-white px-4 sm:px-6 md:px-10 lg:px-25 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-30 justify-center items-center">
                        <div className="max-w-full md:max-w-[50rem] text-xs sm:text-sm md:text-base">
                            We care deeply about the brands we work with. We focus on innovation in design, storytelling, and aesthetics, emphasising on utilising tools and technologies in novel ways, instead of traditional routes. As a strategic partner in business growth, our actions are always centered on increasing Buyer trust for brands, to establish successful and sustainable business relationships. Besides this, our proprietary methodology ensures we plug revenue leaks and optimise lead generation efforts to enhance conversion rates.
                        </div>
                        <div className="max-w-full md:max-w-[30rem] ml-0 md:ml-10 text-2xl sm:text-3xl md:text-4xl lg:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-20x font-medium dark_gradient w-fit">
                            What Sets Us Apart
                        </div>
                        <div className="text-xs sm:text-sm md:text-base">
                            As a key partner who understands the complexities of large B2B organisations, we deliver solutions that align marketing performance with the larger business growth objectives. Our proprietary 5D methodology is designed to be agile and adaptive, ensuring  brands not only grow, but thrive in an ever-evolving market. Here is how this framework guides businesses to success.
                        </div>
                    </div>
                </section>

                <GoingPage />

                <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-16 sm:pb-18 md:pb-20 lg:pb-28 bg-white relative z-10 rounded-b-[3rem] sm:rounded-b-[4rem] md:rounded-b-[5rem] px-4 sm:px-6 md:px-10 lg:px-20 mb-20 sm:mb-24 md:mb-30">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-full sm:max-w-100 mb-6 sm:mb-8 md:mb-12 lg:mb-20 font-semibold text-[#1E3A8A]">
                        Ready to plunge into the Discovery phase?
                    </h2>

                    <form className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                            <div>
                                <label className="block text-gray-600 text-xs sm:text-sm mb-1">First Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-1 sm:py-2 rounded-full px-3 sm:px-4"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-xs sm:text-sm mb-1">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-1 sm:py-2 rounded-full px-3 sm:px-4"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-xs sm:text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-1 sm:py-2 rounded-full px-3 sm:px-4"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-xs sm:text-sm mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-1 sm:py-2 rounded-full px-3 sm:px-4"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-600 text-xs sm:text-sm mb-1">Message</label>
                            <textarea
                                rows="3"
                                className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-1 sm:py-2 rounded-lg px-3 sm:px-4"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <ArrowButtonBlue>Submit</ArrowButtonBlue>
                        </div>
                    </form>
                </section>

                <section className="-mt-20 sm:-mt-30 md:-mt-40 lg:-mt-60 relative">
                    <div className="absolute top-10 sm:top-16 md:top-20 lg:top-60">
                        <DotGrid />
                        <h1 className="px-4 sm:px-6 text-gray-400 absolute text-3xl sm:text-4xl md:text-6xl lg:text-[10rem] left-0 top-1/2 -translate-y-1/2">BrandMark</h1>
                    </div>
                    <div>
                        <img src="AboutRecLarge.png" alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center absolute top-10 sm:top-20 md:top-40 lg:top-[30rem] left-1/2 transform -translate-x-1/2 px-4 sm:px-6 md:px-8 lg:px-10">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium text-white dark_gradient w-fit">Our North Star</h1>
                        <h1 className="mt-4 sm:mt-6 md:mt-8 lg:mt-15 text-xs sm:text-sm md:text-base lg:text-xl w-full sm:w-[90%] md:w-[80%] lg:w-180 text-white font-extralight text-center">
                            At the core of Wisetree Brands' identity lies its distinct and thoughtfully designed brandmark, affectionately called the 'Wowl'. Wisetree Brands, a B2B Brand and Marketing Consulting firm built on the principles of a brand-first approach, embraces the essence of creativity, wisdom and authenticity. This philosophy is reflected in every aspect of its operations, including its visual identity. The Wowl is not merely a symbol; it is a manifestation of the values and vision that drive the company forward.
                        </h1>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-8 lg:gap-[30rem] absolute top-[20rem] sm:top-[30rem] md:top-[40rem] lg:top-[60rem] px-4 sm:px-6 md:px-8 lg:px-10">
                        <div className="ml-0 md:ml-10 lg:ml-60 w-full md:w-70 flex justify-center md:justify-start">
                            <img className="w-[30%] sm:w-[35%] md:w-[40%] lg:w-[50%]" src="logo1.png" alt="" />
                        </div>
                        <div className="mt-4 md:mt-0">
                            <h1 className="w-full sm:w-[95%] md:w-[95%] lg:w-100 ml-0 md:-ml-10 lg:-ml-60 text-white font-extralight text-xs sm:text-sm md:text-base">
                                The Wowl is a combination of two fundamental elements. First, the outline of mind's nucleus – the brain, which stands for the creative core - a vital component that defines Wisetree Brands. This element symbolises the imaginative, innovative spirit that this creative enterprise brings to every client engagement. At Wisetree Brands, creativity is not just intelligent communication and design, but more about the ability to develop strategies that stand out, and craft stories that resonate deeply with target audiences. It is about marrying the transformative power of digital analytics with a keen eye for detail, to craft tactics that deliver results.
                            </h1>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-8 lg:gap-[30rem] absolute top-[30rem] sm:top-[45rem] md:top-[60rem] lg:top-[85rem] px-4 sm:px-6 md:px-8 lg:px-10 -left-0 md:-left-10">
                        <div className="ml-0 md:ml-10 lg:ml-60 w-full md:w-70 order-2 md:order-1 mt-4 md:mt-0">
                            <h1 className="w-full sm:w-[95%] md:w-[95%] lg:w-100 text-white font-extralight text-xs sm:text-sm md:text-base">
                                The second element is a pair of eyes, representing the sharp, discerning vision of the owl - an ancient and universal symbol of wisdom and insight. Because creativity and intelligence are nothing without the acumen or discernment to execute them with precision. The eyes in the Wowl symbolise this depth of understanding, the ability to see beyond the surface, and a knack for perceiving nuances that might otherwise be overlooked. This very aptly reflects one of our core values - 'Attention to Detail' that reinforces our commitment to precision and quality. For Wisetree Brands, this vision highlights the emphasis we place on thoroughness and high standards of execution.
                            </h1>
                        </div>
                        <div className="ml-0 md:-ml-5 lg:-ml-20 w-full md:w-70 flex justify-center md:justify-start order-1 md:order-2">
                            <img className="w-[30%] sm:w-[35%] md:w-[40%] lg:w-[50%]" src="logo2.png" alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-8 lg:gap-[30rem] absolute top-[40rem] sm:top-[60rem] md:top-[80rem] lg:top-[110rem] px-4 sm:px-6 md:px-8 lg:px-10">
                        <div className="ml-0 md:ml-10 lg:ml-60 w-full md:w-70 flex justify-center md:justify-start">
                            <img className="w-[30%] sm:w-[35%] md:w-[40%] lg:w-[50%]" src="logo3.png" alt="" />
                        </div>
                        <div className="mt-4 md:mt-0">
                            <h1 className="w-full sm:w-[95%] md:w-[95%] lg:w-100 ml-0 md:-ml-10 lg:-ml-60 font-extralight text-white text-xs sm:text-sm md:text-base">
                                The Wowl isn't just about these two visible elements. There's a third, invisible element, that breathes life into the brandmark: the heart. Is it a coincidence that 'Wowl' rhymes with 'vowel'? Vowels are one of the two important parts of the English language. The other being the 'consonant'. Vowels are powerful in that they clarify how the consonant sounds connect and expresse linguistic meaning, such as distinguishing between a noun and a verb. Similarly, at Wisetree Brands, our heart is the community of passionate People who constantly drive to deliver 'wow experiences', by leveraging navigational intelligence and design thinking capabilities, with advanced digital technologies. They are the silent force that fuels every action, ensuring that all efforts are driven by passion and the desire to create meaningful, lasting impact. Thus, the Wowl is not only a brandmark, but a promise of the firm's commitment to authentic relationships - both internally among team members, and externally, with clients and partners.
                            </h1>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-10 sm:bottom-20 md:bottom-30 lg:bottom-80 right-4 sm:right-6 md:right-10 lg:right-30">
                        <ArrowButtonWhite>ReadMore</ArrowButtonWhite>
                    </div>
                    
                    <div className="overflow-hidden whitespace-nowrap absolute bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-30 w-full">
                        <h1 className="animate-marquee text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-light text-white">
                            From Strong Brands To Sustainable Revenue, We Build Everything!
                        </h1>
                    </div>
                </section>
                <section className="my-4 sm:my-6 md:my-8 pb-20 sm:pb-24 md:pb-28 lg:pb-36 rounded-b-[3rem] sm:rounded-b-[4rem] md:rounded-b-[5rem] overflow-hidden bg-white relative z-10">
                    <h1 className="font-base text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10">WHAT MAKES US UNIQUE</h1>
                    <hr className="my-3 sm:my-4 opacity-30 mx-4 sm:mx-6 md:mx-8 lg:mx-10" />

                    <div className="flex flex-col md:flex-row items-center justify-between mt-10 sm:mt-14 md:mt-16 lg:mt-20 w-full relative px-4 sm:px-6 md:px-8 lg:px-10">
                        <img src="Rectangle 94280.png" alt="" className="h-auto w-full md:w-auto md:h-[20rem] lg:h-[30rem] md:-rotate-10 origin-bottom mb-6 md:mb-0" />
                        <div className="text-center mt-6 md:mt-0 px-4 sm:px-6 md:px-0">
                            <p className="text-[#2B2A29BF] text-xs sm:text-sm md:text-base"><span className="pr-2 sm:pr-3 md:pr-4 border-r">Oct 15, 2024</span><span className="border-l pl-2 sm:pl-3 md:pl-4">Brand Identity</span></p>
                            <h3 className="my-6 sm:my-8 md:my-10 lg:my-12 text-xl sm:text-2xl md:text-3xl px-2 sm:px-4 md:px-6 font-medium text-[#144486E5]">Define a unique and clear brand identity that resonates with the relevant target audience </h3>
                            <button className="text-[#2B2A29BF] border-2 border-[#2B2A29DF] px-4 sm:px-5 md:px-6 py-2 sm:py-2 md:py-3 rounded-full cursor-pointer text-xs sm:text-sm md:text-base">VIEW BLOG</button>
                        </div>
                        <img src="Rectangle 94281.png" alt="" className="h-auto w-full md:w-auto md:h-[20rem] lg:h-[30rem] md:rotate-10 origin-bottom mt-6 md:mt-0" />

                        <i className="ri-arrow-right-line cursor-pointer absolute bottom-4 sm:bottom-5 md:bottom-6 right-4 sm:right-5 md:right-6 text-white text-xl sm:text-2xl md:text-3xl"></i>
                    </div>
                </section>

                <footer className="-mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28">
                    <Footer />
                </footer>

            </main>
        </>
    )
}

export default AboutPage