'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Muhammad Usman Waheed',
    role: 'Co- Founder & Chief Executive Officer',
    feedback: 'This company is simply the best. Excellent service and a dedicated team!',
    image: '/images/men1.jpg',
  },
  {
    name: 'Sean Dale',
    role: 'Co- Founder & Management Director,',
    feedback: 'Their solutions are top-notch! Highly recommended for web development and digital marketing.',
    image: '/images/men2.jpg',
  },
  {
    name: 'Joel',
    role: 'Production Head',
    feedback: 'They helped grow my business with amazing designs and marketing strategies.',
    image: '/images/men3.jpg',
  },
  {
    name: 'Michael Green',
    role: 'CTO at Tech Innovators',
    feedback: 'Their tech expertise is outstanding! Great collaboration and innovative solutions.',
    image: '/images/men4.jpg',
  },
  {
    name: 'Nethane Blue',
    role: 'Freelance Designer',
    feedback: 'Creative, professional, and reliable. A pleasure to work with.',
    image: '/images/men5.jpg',
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#cbd3cb] py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-extrabold mb-4 sm:mb-6 text-gray-800 text-center  leading-tight">Our Testimonials</h2>
        <p className="text-lg font-semibold text-gray-800 text-center">
           What Our Clients Say?
          </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-[green] p-6 rounded-lg shadow-lg text-center">
                {/* <img
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                /> */}
                <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;