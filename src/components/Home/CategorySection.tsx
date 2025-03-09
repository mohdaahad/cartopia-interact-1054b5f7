
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "bg-green-100"
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "bg-yellow-100"
  },
  {
    id: 3,
    name: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    color: "bg-amber-100"
  },
  {
    id: 4,
    name: "Meat & Seafood",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "bg-red-100"
  },
  {
    id: 5,
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1596803244536-c41f085a43c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    color: "bg-blue-100"
  },
  {
    id: 6,
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "bg-orange-100"
  },
  {
    id: 7,
    name: "Frozen Foods",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    color: "bg-sky-100"
  },
  {
    id: 8,
    name: "Household",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "bg-purple-100"
  }
];

const CategorySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => scroll('left')}
            className="rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => scroll('right')}
            className="rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <div 
            key={category.id}
            className={`flex-shrink-0 w-40 ${category.color} category-card`}
          >
            <div className="h-32 w-full rounded-lg overflow-hidden mb-2">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-sm font-medium text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
