import React, { useState, useEffect } from 'react';
import Header from './header';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

import Footer from './footer';
// import Lottie from 'lottie-react';
// import animationData from './animations/heroAnimation.json';
import './herosection.css';
const HeroSection = () => {
    const [heroContent, setHeroContent] = useState({ title: '', subtitle: '' });
const images = [
       image1,image2,image3,image4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [images.length]);
    
    return (
        <div className="image-slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>

    );
};

export default HeroSection;
