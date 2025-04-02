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
                <img src="logo.png" alt="Wisetree" className="w-32 animate-pulse" />
                <div className="mt-6 flex space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
                <p className="mt-4 text-gray-600">Loading Wisetree...</p>
            </div>
        );
    };

    return (
        <>
            {loading && <LoadingAnimation />}
            
            <main className="max-w-[1366px] mx-auto relative">
                <section className='p-6 relative overflow-hidden pb-30'>
                    <div className="relative">
                        <img src="Subtract.png" alt="" className='w-full h-150' />
                        <img src="logo.png" alt="Wisetree" className="absolute top-[1%] left-[2%] max-w-[12.5%]" />
                    </div>

                    <div className='absolute top-0 w-full h-full text-white'>
                        <div className='text-right text-3xl p-4'>
                            <i className="ri-corner-down-right-fill max-w-full text-lg absolute top-[15%] left-[42%] transform -translate-x-1/2 -translate-y-1/2 font-light text-center"></i>
                            <h1 className='max-w-full text-lg absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center'>Discover Wisetree</h1>
                        </div>

                        <img className='max-w-96 absolute left-1/12 top-50 -translate-y-1/2' src="left.png" alt="" />
                        <img className='max-w-96 absolute right-1/12 top-7/12 -translate-y-10/12' src="right.png" alt="" />
                        <h1 className="text-8xl font-bold uppercase whitespace-nowrap absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
                            Attract ,
                        </h1>
                        <h1 className="text-8xl font-bold uppercase whitespace-nowrap absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            Don't Chase
                        </h1>

                        <p className="max-w-full text-lg text-gray-300 absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center">
                            We are redefining success in the B2B marketing space through sustainable, brand-centric strategies..
                        </p>

                        <p className="max-w-full text-lg text-white absolute top-[70%] left-[5%] font-light">
                            Home <span className="text-blue-500"> / </span>
                            <span className="text-gray-500 font-extralight">Discover Wisetre</span>
                        </p>

                        <MenuButton1 />
                    </div>
                </section>

                <section className="px-6 md:px-8 lg:px-10 bg-white relative z-10 rounded-b-[5rem]">
                    <h1 className="font-base uppercase text-base sm:text-lg md:text-xl">our philosophy</h1>
                    <hr className="my-4 opacity-30" />

                    <div className="font-medium h-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 md:py-15">
                        <Table Nos={"01"} title={"Organic Growth Engineering"} sub={"Unlike conventional methods, Wisetree uses a tailored approach that focuses on sustainable, long-term growth, specifically adapted for the post-digital landscape. This method integrates brand-building with a strategic emphasis on Marketing Operations."} />
                        <Table Nos={"02"} title={"Brand-First Philosophy and Future-Proofing Approach"} sub={"The company's strategies are brand-first, ensuring that every action reinforces and builds a solid brand foundation. This approach is designed to not only address immediate needs, but also to future-proof businesses against market changes.   "} img={"tableRec.png"} />
                        <Table Nos={"03"} title={"Agile and Innovative Solutions"} sub={"Wisetree employs agile methodologies and original design thinking, allowing for rapid adaptation and creative problem-solving. This flexibility ensures that marketing solutions are not only effective, but also adaptable to evolving industry dynamics."} />
                        <Table Nos={"04"} title={"Experienced and Passionate Team"} sub={"The company boasts a team of seasoned professionals with a track record of shaping successful, integrated marketing strategies across various industries. Their passion for content, communication, and innovative marketing drives a culture of creativity and deep thinking, ensuring that brands don't just grow—they thrive."} />
                    </div>
                </section>

                <section className="mb-30">
                    <div className="-mt-18 relative">
                        <img src="secondRectangle.png" alt="" className="w-full" />

                        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-4 sm:top-6 md:top-8 text-white font-serif text-sm sm:text-base md:text-lg p-2 sm:p-4 md:p-6">
                            <img className="left-16 -mb-4 w-8 sm:w-10 md:w-auto" src="coma.png" alt="" />
                            <p className="indent-10 sm:indent-20 md:indent-30 lg:indent-50 w-full sm:w-[70%] md:w-[60%] lg:w-[50rem]">As a business owner, I understand the complexities of achieving sustainable growth and profitability. With over two decades of experience in leading marketing teams, I've witnessed the common gaps organisations face. At Wisetree Brands, we bridge those gaps by offering comprehensive solutions, including smart digital marketing, intelligent marketing operations, contemporary content strategies, discerning brand strategies and press distribution. My passion lies in leveraging my expertise and that of our exceptional team to redefine what success looks like for brands in an increasingly digital world.</p>
                        </div>
                        <div className="flex w-fit items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 absolute right-4 sm:right-10 md:right-20 lg:left-[80%] bottom-4 sm:bottom-10 md:bottom-20 lg:top-[85%] transform lg:-translate-x-1/2">
                            <div className="-ml-20 sm:-ml-40 md:-ml-60 lg:-ml-90">
                                <img src="line.png" alt="" className="w-16 sm:w-20 md:w-auto" />
                            </div>
                            <div>
                                <p className="text-white text-sm sm:text-base md:text-lg w-32 sm:w-40 md:w-50 lg:w-70">Founder, Wisetree Brands</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-20 sm:pb-22 md:pb-24 lg:pb-28 px-4 sm:px-5 md:px-6 bg-white relative z-10 rounded-b-[5rem]">
                    <h1 className="font-base text-base sm:text-lg md:text-xl">MISSON</h1>
                    <hr className="my-4 opacity-30" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#104386]">Fuelling Business Brilliancer</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl light_gradient w-fit"> Is Our Mission</h1>
                    <div className="mt-10 sm:mt-15 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="flex items-end">
                            <ArrowButtonBlue>LEARN MORE</ArrowButtonBlue>
                        </div>
                        <div className="text-[#2B2A29E5] text-sm sm:text-base md:text-base">Our mission is to be the Partner of Choice for global B2B brands to express the truest spirit of their brand, its most authentic purpose, to the ideal audience.</div>
                        <div className="text-[#2B2A29E5] text-sm sm:text-base md:text-base">We reinforce the brand's vision that truly speaks to its Clients and Partners in the manner that expresses it in the most elevated form, inspires trust, and organically drives long-term, sustainable growth.</div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-20 sm:mt-24 md:mt-30">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-blue-200">
                            CORE VALUES
                        </h1>
                        <div className="-mt-6 sm:-mt-8 md:-mt-10">
                            <img src="bublegroup.png" alt="" className="w-full md:w-auto" />
                        </div>
                    </div>
                </section>

                <section className="-mt-20 relative">
                    <div>
                        <img className="w-full" src="AboutRec3.png" alt="" />
                    </div>
                    <div className="absolute top-20 sm:top-30 md:top-40 lg:top-60 text-white px-4 sm:px-10 md:px-15 lg:px-25 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-15 md:gap-20 lg:gap-30 justify-center items-center">
                        <div className="max-w-full md:max-w-[50rem] text-sm sm:text-base md:text-base">
                            We care deeply about the brands we work with. We focus on innovation in design, storytelling, and aesthetics, emphasising on utilising tools and technologies in novel ways, instead of traditional routes. As a strategic partner in business growth, our actions are always centered on increasing Buyer trust for brands, to establish successful and sustainable business relationships. Besides this, our proprietary methodology ensures we plug revenue leaks and optimise lead generation efforts to enhance conversion rates.
                        </div>
                        <div className="max-w-full md:max-w-[30rem] ml-0 md:ml-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight md:leading-20x font-medium dark_gradient w-fit">
                            What Sets Us Apart
                        </div>
                        <div className="text-sm sm:text-base md:text-base">
                            As a key partner who understands the complexities of large B2B organisations, we deliver solutions that align marketing performance with the larger business growth objectives. Our proprietary 5D methodology is designed to be agile and adaptive, ensuring  brands not only grow, but thrive in an ever-evolving market. Here is how this framework guides businesses to success.
                        </div>
                    </div>
                </section>

                <GoingPage />

                <section className="pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-20 sm:pb-22 md:pb-24 lg:pb-28 bg-white relative z-10 rounded-b-[5rem] px-6 sm:px-10 md:px-15 lg:px-20 mb-30">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl max-w-100 mb-10 sm:mb-15 md:mb-20 font-semibold text-[#1E3A8A]">
                        Ready to plunge into the Discovery phase?
                    </h2>

                    <form className="space-y-4 sm:space-y-5 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                            <div>
                                <label className="block text-gray-600 text-sm mb-1">First Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2 rounded-full px-4"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-sm mb-1">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2 rounded-full px-4"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2 rounded-full px-4"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2 rounded-full px-4"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-600 text-sm mb-1">Message</label>
                            <textarea
                                rows="3"
                                className="w-full border-b border-gray-400 focus:border-blue-600 outline-none py-2 rounded-lg px-4"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <ArrowButtonBlue>Submit</ArrowButtonBlue>
                        </div>
                    </form>
                </section>

                <section className="-mt-40 sm:-mt-50 md:-mt-60 relative">
                    <div className="absolute top-20 sm:top-40 md:top-60">
                        <DotGrid />
                        <h1 className="px-6 text-gray-400 absolute text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] left-0 top-1/2 -translate-y-1/2">BrandMark</h1>
                    </div>
                    <div>
                        <img src="AboutRecLarge.png" alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center absolute top-20 sm:top-40 md:top-60 lg:top-[30rem] left-1/2 transform -translate-x-1/2 px-4 sm:px-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white dark_gradient w-fit">Our North Star</h1>
                        <h1 className="mt-6 sm:mt-10 md:mt-15 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[70%] lg:w-180 text-white font-extralight text-center">
                            At the core of Wisetree Brands' identity lies its distinct and thoughtfully designed brandmark, affectionately called the 'Wowl'. Wisetree Brands, a B2B Brand and Marketing Consulting firm built on the principles of a brand-first approach, embraces the essence of creativity, wisdom and authenticity. This philosophy is reflected in every aspect of its operations, including its visual identity. The Wowl is not merely a symbol; it is a manifestation of the values and vision that drive the company forward.
                        </h1>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-10 lg:gap-[30rem] absolute top-[30rem] sm:top-[40rem] md:top-[50rem] lg:top-[60rem] px-4 sm:px-10">
                        <div className="ml-0 md:ml-20 lg:ml-60 w-full md:w-70 flex justify-center md:justify-start">
                            <img className="w-[30%] sm:w-[40%] md:w-[50%]" src="logo1.png" alt="" />
                        </div>
                        <div className="mt-6 md:mt-0">
                            <h1 className="w-full sm:w-[90%] md:w-[95%] lg:w-100 ml-0 md:-ml-20 lg:-ml-60 text-white font-extralight text-sm sm:text-base md:text-base">
                                The Wowl is a combination of two fundamental elements. First, the outline of mind's nucleus – the brain, which stands for the creative core - a vital component that defines Wisetree Brands. This element symbolises the imaginative, innovative spirit that this creative enterprise brings to every client engagement. At Wisetree Brands, creativity is not just intelligent communication and design, but more about the ability to develop strategies that stand out, and craft stories that resonate deeply with target audiences. It is about marrying the transformative power of digital analytics with a keen eye for detail, to craft tactics that deliver results.
                            </h1>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-10 lg:gap-[30rem] absolute top-[45rem] sm:top-[60rem] md:top-[70rem] lg:top-[85rem] px-4 sm:px-10 -left-0 md:-left-10">
                        <div className="ml-0 md:ml-20 lg:ml-60 w-full md:w-70 order-2 md:order-1 mt-6 md:mt-0">
                            <h1 className="w-full sm:w-[90%] md:w-[95%] lg:w-100 text-white font-extralight text-sm sm:text-base md:text-base">
                                The second element is a pair of eyes, representing the sharp, discerning vision of the owl - an ancient and universal symbol of wisdom and insight. Because creativity and intelligence are nothing without the acumen or discernment to execute them with precision. The eyes in the Wowl symbolise this depth of understanding, the ability to see beyond the surface, and a knack for perceiving nuances that might otherwise be overlooked. This very aptly reflects one of our core values - 'Attention to Detail' that reinforces our commitment to precision and quality. For Wisetree Brands, this vision highlights the emphasis we place on thoroughness and high standards of execution.
                            </h1>
                        </div>
                        <div className="ml-0 md:-ml-10 lg:-ml-20 w-full md:w-70 flex justify-center md:justify-start order-1 md:order-2">
                            <img className="w-[30%] sm:w-[40%] md:w-[50%]" src="logo2.png" alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-10 lg:gap-[30rem] absolute top-[60rem] sm:top-[80rem] md:top-[90rem] lg:top-[110rem] px-4 sm:px-10">
                        <div className="ml-0 md:ml-20 lg:ml-60 w-full md:w-70 flex justify-center md:justify-start">
                            <img className="w-[30%] sm:w-[40%] md:w-[50%]" src="logo3.png" alt="" />
                        </div>
                        <div className="mt-6 md:mt-0">
                            <h1 className="w-full sm:w-[90%] md:w-[95%] lg:w-100 ml-0 md:-ml-20 lg:-ml-60 font-extralight text-white text-sm sm:text-base md:text-base">
                                The Wowl isn't just about these two visible elements. There's a third, invisible element, that breathes life into the brandmark: the heart. Is it a coincidence that 'Wowl' rhymes with 'vowel'? Vowels are one of the two important parts of the English language. The other being the 'consonant'. Vowels are powerful in that they clarify how the consonant sounds connect and expresse linguistic meaning, such as distinguishing between a noun and a verb. Similarly, at Wisetree Brands, our heart is the community of passionate People who constantly drive to deliver 'wow experiences', by leveraging navigational intelligence and design thinking capabilities, with advanced digital technologies. They are the silent force that fuels every action, ensuring that all efforts are driven by passion and the desire to create meaningful, lasting impact. Thus, the Wowl is not only a brandmark, but a promise of the firm's commitment to authentic relationships - both internally among team members, and externally, with clients and partners.
                            </h1>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-20 sm:bottom-40 md:bottom-60 lg:bottom-80 right-4 sm:right-10 md:right-20 lg:right-30">
                        <ArrowButtonWhite>ReadMore</ArrowButtonWhite>
                    </div>
                    
                    <div className="overflow-hidden whitespace-nowrap absolute bottom-10 sm:bottom-20 md:bottom-30 w-full">
                        <h1 className="animate-marquee text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-white">
                            From Strong Brands To Sustainable Revenue, We Build Everything!
                        </h1>
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
    )
}

export default AboutPage