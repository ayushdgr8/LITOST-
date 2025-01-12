import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';  // Import Header Component
import HeroSection from './components/herosection';
import FeaturedSection from './components/featuredsection';
import WhyChooseUs from './components/whychooseus';
// import Testimonials from './components/testimonials';
import Footer from './components/footer';
import AdminHeroSection from './components/adminhersection';
import Home from './components/home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* The header stays consistent across all pages */}
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/herosection" element={<HeroSection />} />
            <Route path="/adminhersection" element={<AdminHeroSection />} />

            <Route path="/whychooseus" element={<WhyChooseUs />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/featuredsection" element={<FeaturedSection />} />
          </Routes>
        </div>
        {/* Footer stays consistent across all pages */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;