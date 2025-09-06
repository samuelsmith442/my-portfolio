import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-[#0B1121]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-6 md:p-8 shadow-lg"
          >
            <p className="text-gray-300 mb-4 leading-relaxed">
              After years in the printing industry, I discovered a love for coding and web development. What started as curiosity quickly evolved into a passion that drove me to transition careers and pursue development full-time.
            </p>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Now, I'm focused on front-end development and Solidity for smart contracts, with a goal of building impactful, user-friendly dApps. I'm particularly drawn to the intersection of blockchain technology and user experience—creating interfaces that make Web3 accessible to everyone.
            </p>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              My background in printing gave me a keen eye for design and attention to detail that I bring to every project. I believe that great code should not only function flawlessly but also create meaningful experiences for users.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me cycling, gaming, or diving into the latest tech trends. I'm always looking to connect with like-minded developers and potential collaborators.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Solidity</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Node.js</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
