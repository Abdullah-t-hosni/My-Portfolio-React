import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState, useEffect } from 'react';
import Preloader from './Components/Preloader';
import Particles from './Components/Particles';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={`App ${loaded ? 'hidden' : ''}`}>
      {!loaded && <Preloader />} 
      <Particles />
          <Header />
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        
      
    </div>
  );
  
}

export default App;
