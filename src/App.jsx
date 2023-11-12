import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Us from './Us/Us';
import About from './About/About';
import Download from './Download/Download';
import Review from './Review/Review';
import Latest from  './Latest/Latest';
import { Element } from 'react-scroll';
import FAQ from './FAQ/FAQ';
import Footer2 from './Footer2/Footer2';
import Sub from './Sub/Sub';
import Contact from './Contact/Contact';


// Initialize AOS
AOS.init();

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="" >
            <Navbar />
            <Element name="Header">
              <Hero />
            </Element>
            <Element name="Us">
              <Us />
            </Element>
            <Element name='About'>
              <About />
            </Element>
            <Element name='Download'>
              <Download />
            </Element>
            <Element name='Review'>
              <Review />
            </Element>
            <Element name='Latest'>
              <Latest />
            </Element>
            <Element name='Sub'>
              <Sub />
            </Element>
            <Element name='Contact'>
              <Contact />
            </Element>
            <Element name='Footer2'>
              <Footer2 />
            </Element>
          </div>
        } />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;














