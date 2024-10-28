import React from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';




const App = () => (
  <div className="App">
  <Router basename="/">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
  <Footer />
  </div>
);

export default App;
