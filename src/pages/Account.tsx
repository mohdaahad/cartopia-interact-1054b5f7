
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Mail, Phone, Home as HomeIcon, LogIn } from 'lucide-react';

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 mt-20">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-8 h-8 text-grocery-primary" />
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-grocery-primary" />
                Profile Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <Input placeholder="John" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <Input placeholder="Doe" className="w-full" />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input placeholder="john.doe@example.com" className="w-full pl-10" />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input placeholder="+1 (555) 123-4567" className="w-full pl-10" />
                </div>
              </div>
              
              <Button className="bg-grocery-primary hover:bg-grocery-primary/90 w-full md:w-auto">
                Save Changes
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <HomeIcon className="w-5 h-5 mr-2 text-grocery-primary" />
                Delivery Address
              </h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                <Input placeholder="123 Main St" className="w-full" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                <Input placeholder="Apt 4B" className="w-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <Input placeholder="New York" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <Input placeholder="NY" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <Input placeholder="10001" className="w-full" />
                </div>
              </div>
              
              <Button className="bg-grocery-primary hover:bg-grocery-primary/90 w-full md:w-auto">
                Save Address
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <LogIn className="w-5 h-5 mr-2 text-grocery-primary" />
                Quick Login
              </h2>
              
              <p className="text-gray-600 mb-4">Sign in to access your orders, saved items, and more.</p>
              
              <Button className="bg-grocery-primary hover:bg-grocery-primary/90 w-full mb-2">
                Sign In
              </Button>
              
              <Button variant="outline" className="w-full">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
