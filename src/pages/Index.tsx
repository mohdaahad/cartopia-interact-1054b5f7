
import React, { useEffect } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeroBanner from '@/components/Home/HeroBanner';
import CategorySection from '@/components/Home/CategorySection';
import FeaturedProducts from '@/components/Home/ProductSection';
import DealsSection from '@/components/Home/DealsSection';
import { toast } from 'sonner';

const Index = () => {
  useEffect(() => {
    // Show a welcome toast when the app loads
    toast.success('Welcome to QuickCart!', {
      description: 'Fresh groceries delivered in minutes.'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <HeroBanner />
        
        <div className="mt-8">
          <CategorySection />
        </div>
        
        <div className="mt-4">
          <FeaturedProducts />
        </div>
        
        <div className="mt-6">
          <DealsSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
