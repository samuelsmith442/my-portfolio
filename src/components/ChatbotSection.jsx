import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import SamuelChatbot from './SamuelChatbot';

const ChatbotSection = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbotRef = useRef(null);
  
  // Effect to scroll chatbot into view when activated
  useEffect(() => {
    if (showChatbot && chatbotRef.current) {
      // Small delay to ensure DOM is updated before scrolling
      setTimeout(() => {
        // Scroll the chatbot into view with smooth behavior
        chatbotRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add offset for navbar height
        const navbarHeight = 80; // Approximate navbar height
        window.scrollBy({
          top: -navbarHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [showChatbot]);

  return (
    <section id="chatbot" className="py-16 md:py-24 bg-gradient-to-b from-[#0B1121] to-[#0d1729] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-blue-500 blur-[80px] md:blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-56 md:w-80 h-56 md:h-80 rounded-full bg-purple-600 blur-[90px] md:blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">Meet My AI Twin</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Curious about my approach to coding, blockchain, or career transitions? 
            Chat with my AI twin—it&apos;s trained to answer questions just like I would!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {!showChatbot ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Removed automatic popup for better user experience */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button
                type="button" // Explicitly set button type to prevent form submission behavior
                onClick={() => setShowChatbot(true)}
                className="relative bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Start Chatting with My AI Twin
              </button>
            </motion.div>
          ) : (
            <div ref={chatbotRef} className="w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-1 rounded-lg"
              >
                <SamuelChatbot />
              </motion.div>
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowChatbot(false)}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                  </svg>
                  Hide Chatbot
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotSection;
