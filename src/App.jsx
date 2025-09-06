// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatbotSection from './components/ChatbotSection';
import FloatingChatButton from './components/FloatingChatButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <ChatbotSection />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <FloatingChatButton />
    </div>
  );
}

export default App;