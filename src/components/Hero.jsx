import { motion } from "motion/react"

const Hero = () => {
  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      className="bg-gradient-to-b from-gray-900 to-[#0B1121] text-white py-20 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-blue-500 blur-[80px] md:blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-56 md:w-80 h-56 md:h-80 rounded-full bg-purple-600 blur-[90px] md:blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto text-center px-4 sm:px-6 relative z-10">
        <motion.h2 
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 leading-tight"
        >
          Hi, I'm Samuel Smith.
        </motion.h2>
        
        <motion.p 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5}}
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="block mb-2 sm:mb-3">"By day (and sometimes by night), I'm a developer obsessed</span>
          <span className="block mb-2 sm:mb-3">with creating web experiences that are as functional as they are visually compelling.</span>
          <span className="block">I believe great websites start with great code—and a whole lot of heart."</span>
        </motion.p>
        
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.8}}
          className="mt-6 sm:mt-8"
        >
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center min-w-[160px] touch-manipulation active:bg-blue-800 active:scale-95"
            role="button"
            aria-label="View my work"
          >
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;