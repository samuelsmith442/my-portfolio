import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SamuelChatbot from './SamuelChatbot';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-4 sm:right-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg z-50 hover:shadow-blue-500/20 hover:shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[90vw] sm:w-[350px] md:w-[350px] lg:w-[380px]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-1 rounded-lg shadow-xl">
              <div className="bg-[#0B1121] rounded-lg overflow-hidden flex flex-col h-[400px]">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Chat with Samuel</h3>
                    <p className="text-xs text-blue-100">Ask me anything about my work or skills</p>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 overflow-hidden">
                  <SamuelChatbot hideHeader={true} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatButton;
