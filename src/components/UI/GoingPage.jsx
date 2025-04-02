import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  {
    title: "Discovery",
    description:
      "In the Discovery phase, we immerse ourselves in the brand, market, and audience, gathering critical insights through research, stakeholder interviews, and competitive analysis. This phase forms the foundation of a tailored strategy designed to meet the unique needs of every business.In the Discovery phase, we immerse ourselves in the brand, market, and audience...",
    image: "Option1.png",
  },
  {
    title: "Definition",
    description:
      "We synthesise the insights gathered, to define clear, strategic objectives and key performance indicators (KPIs) aligned with business goals. This is where we create the ideal marketing mix for the product/service that will create the most impact. We articulate the brand's value proposition and craft a roadmap for success. This step ensures a strong, strategic direction that guides all marketing initiatives moving forward.",
    image: "Option3.png",
  },
  {
    title: "Design",
    description:
      "The Design phase brings strategy to life through intelligent planning and creativity. Integrated marketing plans, curated content strategies, and imagery and messaging architecture that align with the brand's core values and goals form the bedrock here. Our 360-degree approach ensures all aspects of the brand's communication and marketing efforts work together seamlessly, to deliver a consistent and impactful message",
    image: "Option2.png",
  },
];

export default function AnimatedSections() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhase = () => {
    setCurrentIndex((prev) => (prev + 1) % phases.length);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Container with fixed max height */}
      <div className="relative w-full h-full max-h-[50rem]">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="AboutFrame.png"
          alt="Background"
        />

        {/* Content Container - positioned absolutely over the background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* Description */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{phases[currentIndex].title}</h2>
                  <p className="text-base sm:text-lg text-left">
                    {phases[currentIndex].description}
                  </p>
                </div>

                {/* Phase Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={phases[currentIndex].image}
                    alt={phases[currentIndex].title}
                    className="w-full h-auto max-h-80 object-contain"
                  />
                </div>
              </div>

              {/* Next Button */}
              <div className="text-center mt-8 md:mt-12">
                <button
                  onClick={nextPhase}
                  className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}