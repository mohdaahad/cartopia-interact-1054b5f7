
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Info } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 mt-20">
        <div className="flex items-center gap-3 mb-6">
          <Info className="w-8 h-8 text-grocery-primary" />
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            QuickCart was founded with a simple mission: to make grocery shopping faster, easier, and more convenient than ever before. 
            We believe that high-quality groceries should be accessible to everyone, delivered right to your doorstep in minutes.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-6">
            We're building the future of grocery shopping with innovative technology and a customer-first approach. 
            Our vision is to become the most trusted and loved grocery delivery service, known for our reliability, 
            quality products, and exceptional customer service.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
            <li>Delivery in minutes, not hours or days</li>
            <li>Curated selection of high-quality products</li>
            <li>Direct partnerships with local farmers and producers</li>
            <li>Eco-friendly packaging and delivery methods</li>
            <li>Personalized recommendations based on your preferences</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
