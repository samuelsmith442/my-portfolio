import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B1121]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button 
            onClick={scrollToTop} 
            className="text-3xl font-bold"
          >
            <span className="bg-blue-600 text-white px-4 py-2 rounded-xl">SS</span>
          </button>
          
          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 text-xl text-white">
            <button onClick={scrollToTop} className="text-white hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-600 transition-colors">
              About Me
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('chatbot')} className="text-white hover:text-blue-600 transition-colors">
              AI Twin
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1121]/95 backdrop-blur-sm py-4 px-2 rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={scrollToTop} 
                className="text-white hover:text-blue-600 transition-colors py-2 px-4 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white hover:text-blue-600 transition-colors py-2 px-4 text-left"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-white hover:text-blue-600 transition-colors py-2 px-4 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('chatbot')} 
                className="text-white hover:text-blue-600 transition-colors py-2 px-4 text-left"
              >
                AI Twin
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-blue-600 transition-colors py-2 px-4 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar