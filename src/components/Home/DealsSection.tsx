
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface Deal {
  id: number;
  title: string;
  description: string;
  discount: string;
  image: string;
  bgColor: string;
  expiresIn: number; // in seconds
}

const deals: Deal[] = [
  {
    id: 1,
    title: "Weekend Flash Sale",
    description: "Get amazing discounts on fresh produce",
    discount: "Up to 40% OFF",
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    bgColor: "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
    expiresIn: 86400, // 24 hours
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "On your first 3 orders",
    discount: "Use code: FRESH",
    image: "https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    bgColor: "bg-gradient-to-r from-green-500/20 to-teal-500/20",
    expiresIn: 43200, // 12 hours
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free",
    description: "On selected bakery items",
    discount: "Limited Time Offer",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bgColor: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20",
    expiresIn: 21600, // 6 hours
  }
];

const DealCard = ({ deal }: { deal: Deal }) => {
  const [timeLeft, setTimeLeft] = useState(deal.expiresIn);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0')
    };
  };

  const time = formatTime(timeLeft);

  return (
    <div className={`rounded-xl overflow-hidden relative shadow-md transition-transform duration-300 hover:scale-105 ${deal.bgColor}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      <img 
        src={deal.image} 
        alt={deal.title} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-white text-xl font-bold mb-2">{deal.title}</h3>
          <p className="text-white/80 text-sm mb-2">{deal.description}</p>
          <p className="text-white font-bold text-lg">{deal.discount}</p>
        </div>
        
        <div className="mt-4">
          <div className="bg-black/30 backdrop-blur-sm p-2 rounded-lg inline-block mb-3">
            <p className="text-white text-xs mb-1">Offer ends in:</p>
            <div className="flex space-x-2">
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono">
                {time.hours}h
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono">
                {time.minutes}m
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono animate-pulse">
                {time.seconds}s
              </div>
            </div>
          </div>
          
          <Button variant="secondary" className="w-full bg-white hover:bg-white/90 text-gray-900">
            Claim Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const DealsSection = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">Limited Time Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <div key={deal.id} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            <DealCard deal={deal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
