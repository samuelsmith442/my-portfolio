// src/App.js

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;