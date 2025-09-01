// src/Contact.js

import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/movqzjyp', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        // Clear the form
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        alert('Message sent successfully!')
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="contact" 
      className="py-20 bg-[#0B1121]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>
        <div className="max-w-lg mx-auto bg-gray-800/50 p-8 rounded-xl shadow-lg">
          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label 
                htmlFor="name" 
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Your message..."
              />
            </div>

            <div className="flex justify-center">
              <button 
                type="submit" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact