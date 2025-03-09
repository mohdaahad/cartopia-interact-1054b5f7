
import React from 'react';
import { Facebook, Twitter, Instagram, Smartphone, Mail, Map } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">QuickCart</h3>
            <p className="text-gray-600 mb-4">Get fresh groceries delivered to your doorstep in minutes.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm hover:bg-grocery-primary hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm hover:bg-grocery-primary hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm hover:bg-grocery-primary hover:text-white">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-grocery-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-grocery-primary transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-grocery-primary transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-grocery-primary transition-colors">Deals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-grocery-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Map className="w-5 h-5 mr-2 text-grocery-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">123 Grocery St, Food City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-grocery-primary flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-grocery-primary flex-shrink-0" />
                <span className="text-gray-600">support@quickcart.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get exclusive offers and updates.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-l-md rounded-r-none border-r-0 focus-visible:ring-0"
              />
              <Button 
                className="rounded-l-none bg-grocery-primary hover:bg-grocery-primary/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2023 QuickCart. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 text-sm hover:text-grocery-primary">Privacy Policy</a>
              <a href="#" className="text-gray-600 text-sm hover:text-grocery-primary">Terms of Service</a>
              <a href="#" className="text-gray-600 text-sm hover:text-grocery-primary">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
