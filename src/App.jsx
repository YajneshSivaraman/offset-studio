
// Import the homepage components.
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Assemble the complete OFFSET Studio homepage.
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
