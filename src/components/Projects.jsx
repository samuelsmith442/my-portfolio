// src/Projects.js

import travelJournal from '../images/travel-journal.png'
import estateProject from '../images/estate-project.png'
import popChoice from '../images/Pop-Choice.png'
import web3CoffeeShop from '../images/Web3-coffee-shop.png'
import { motion } from "framer-motion"

const Projects = () => {
  const projects = [
    {
      title: "PopChoice - Movie Recommendations",
      description: "An AI-powered movie recommendation platform that suggests films based on user preferences and viewing history.",
      tech: ["AI: OpenAI API", "Database: Supabase with pgvector", "React"],
      image: popChoice,
      link: "https://guileless-toffee-2d270a.netlify.app/",
      github: "https://github.com/samuelsmith442/PopChoice"
    },
    {
      title: "Web3 Coffee Shop",
      description: "A blockchain-based coffee shop application that allows customers to order and pay for coffee using cryptocurrency.",
      tech: ["Web3", "Metamask", "React", "Solidity"],
      image: web3CoffeeShop,
      link: "https://glittering-twilight-c4bc42.netlify.app/",
      github: "https://github.com/samuelsmith442/web3-coffee-shop"
    },
    {
      title: "Travel Journal",
      description: "A digital travel journal for documenting and sharing your adventures around the world. Features location tracking and photo integration.",
      tech: ["React", "CSS", "Google Maps API"],
      image: travelJournal,
      link: "https://delightful-gingersnap-48e727.netlify.app/",
      github: "https://github.com/samuelsmith442/travel-journal"
    },
    {
      title: "Real Estate",
      description: "A modern real estate platform helping users find their dream homes. Features property listings, search filters, and contact forms.",
      tech: ["React", "TailwindCSS"],
      image: estateProject,
      link: "https://steady-swan-d8d4b2.netlify.app/",
      github: "https://github.com/samuelsmith442/real-estate"
    }
  ]

  return (
    <motion.section 
    initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    id="projects" className="py-20 bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 md:mb-12 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg flex flex-col h-full"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 sm:h-64 object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.target.src = 'fallback-image.jpg'; // Optional: provide fallback
                  }}
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base flex-grow">{project.description}</p>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-auto">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                    >
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects