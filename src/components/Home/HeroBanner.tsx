
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const banners = [
    {
      title: "Fresh Groceries",
      subtitle: "Delivered in 10 Minutes",
      description: "Get fresh fruits, vegetables, and everyday essentials delivered to your doorstep.",
      cta: "Shop Now",
      bgColor: "from-grocery-primary/20 to-grocery-accent/20",
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      title: "Weekend Specials",
      subtitle: "Up to 50% Off",
      description: "Grab amazing deals on your favorite products this weekend.",
      cta: "View Offers",
      bgColor: "from-grocery-secondary/20 to-grocery-primary/20",
      imageUrl: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      title: "Healthy Choices",
      subtitle: "For Your Wellness",
      description: "Discover our range of organic and healthy food options.",
      cta: "Explore",
      bgColor: "from-grocery-accent/20 to-grocery-secondary/20",
      imageUrl: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl mt-20">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgColor} opacity-90`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 animate-fade-in">
            <div className="max-w-md">
              <h2 className="text-sm md:text-lg font-semibold text-white/90 mb-2">{banner.subtitle}</h2>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{banner.title}</h1>
              <p className="text-sm md:text-base text-white/80 mb-6">{banner.description}</p>
              <Button className="bg-white text-gray-800 hover:bg-white/90 flex items-center space-x-2 btn-hover-effect">
                <span>{banner.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
