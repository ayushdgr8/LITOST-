import React, { useEffect, useState } from "react";
import './featuredsection.css';
const FeaturedSection = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Solar Inverter",
      description: "Efficient and eco-friendly solar power inverter.",
      price: "$150",
      image: "https://i.ibb.co/vc3kXGr/solar-inverter.jpg",
    },
    {
      id: 2,
      name: "Power Generator",
      description: "Reliable backup power generator for homes.",
      price: "$300",
      image: "https://i.ibb.co/hDsw1ms/power-generator.jpg",
    },
    {
      id: 3,
      name: "Battery Bank",
      description: "High-capacity battery storage solution.",
      price: "$200",
      image: "https://i.ibb.co/pPmPnXv/battery-bank.jpg",
    },
    {
      id: 4,
      name: "Smart Home Kit",
      description: "Automate and control your home with ease.",
      price: "$400",
      image: "https://i.ibb.co/s6BcGfc/smart-home-kit.jpg",
    },
    {
      id: 5,
      name: "Energy Monitor",
      description: "Track and optimize your energy usage.",
      price: "$50",
      image: "https://i.ibb.co/7nkqW1y/energy-monitor.jpg",
    },
    {
      id: 6,
      name: "Electric Scooter",
      description: "Sustainable urban mobility solution.",
      price: "$600",
      image: "https://i.ibb.co/mt9MrrF/electric-scooter.jpg",
    },
    {
      id: 7,
      name: "Solar Panel Kit",
      description: "Complete kit for home solar power installation.",
      price: "$500",
      image: "https://i.ibb.co/6FqXtXg/solar-panel-kit.jpg",
    },
    {
      id: 8,
      name: "LED Lighting",
      description: "Energy-efficient lighting solutions.",
      price: "$20",
      image: "https://i.ibb.co/6XMyQMM/led-lighting.jpg",
    },
    {
      id: 9,
      name: "Portable Charger",
      description: "Compact and fast-charging portable device.",
      price: "$30",
      image: "https://i.ibb.co/S0tLxCD/portable-charger.jpg",
    },
]);


  return (
    <section className="featured">
    <h2>Featured Products/Services</h2>
    <br></br>
    <div className="grid">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <div className="description">
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default FeaturedSection;
