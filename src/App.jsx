import Navbar from "./Components/Navbar";
import Hero from "./Contactomponents/Hero";
import About from "./Components/About";
import Skills from "./components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
 
       <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        
         
      </main>

      
    </>
  );
}

export default App;