
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import CategorySection from '@/components/Home/CategorySection';
import { ListTree } from 'lucide-react';

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 mt-20">
        <div className="flex items-center gap-3 mb-6">
          <ListTree className="w-8 h-8 text-grocery-primary" />
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        </div>
        
        <div className="mt-8">
          <CategorySection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
