
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Cat as CatIcon } from 'lucide-react';

const Cat = () => {
  const [catFact, setCatFact] = React.useState("Cats spend 70% of their lives sleeping.");
  const [loading, setLoading] = React.useState(false);
  
  const getCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 mt-20">
        <div className="flex items-center gap-3 mb-6">
          <CatIcon className="w-8 h-8 text-grocery-primary" />
          <h1 className="text-3xl font-bold text-gray-900">Cat Facts</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center">
          <div className="w-64 h-64 mb-6 overflow-hidden rounded-full bg-gradient-to-r from-orange-100 to-amber-100 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
              alt="Cat" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-4">Random Cat Fact</h2>
            <p className="text-gray-700 mb-6 text-lg italic">"{catFact}"</p>
          </div>
          
          <Button 
            onClick={getCatFact} 
            className="bg-grocery-primary hover:bg-grocery-primary/90"
            disabled={loading}
          >
            {loading ? "Loading..." : "Get New Cat Fact"}
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cat;
