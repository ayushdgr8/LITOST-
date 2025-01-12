import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <Swiper spaceBetween={30} slidesPerView={1}>
        {testimonials.map((testi) => (
          <SwiperSlide key={testi.id}>
            <div className="testimonial-card">
              <p>{testi.feedback}</p>
              <h3>- {testi.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
