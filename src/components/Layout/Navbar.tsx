
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, ShoppingBag, ListTree, Percent, Info, Cat as CatIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">QuickCart</span>
          </Link>

          {!isMobile && (
            <div className="flex items-center space-x-4">
              <Link to="/shop" className="text-gray-700 hover:text-grocery-primary transition-colors">
                Shop
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-grocery-primary transition-colors">
                Categories
              </Link>
              <Link to="/deals" className="text-gray-700 hover:text-grocery-primary transition-colors">
                Deals
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-grocery-primary transition-colors">
                About
              </Link>
              <Link to="/cat" className="text-gray-700 hover:text-grocery-primary transition-colors">
                Cat
              </Link>
            </div>
          )}

          {!isMobile && (
            <div className="relative w-1/3">
              <Input 
                type="text" 
                placeholder="Search for groceries..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          )}

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/account">
              <Button variant="ghost" className="flex items-center space-x-1 p-2">
                <User className="w-5 h-5" />
                <span>Account</span>
              </Button>
            </Link>
            <Button variant="ghost" className="flex items-center space-x-1 relative p-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              <span className="absolute -top-1 -right-1 bg-grocery-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce-in">
                0
              </span>
            </Button>
          </div>

          {isMobile && (
            <Button 
              variant="ghost" 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-down">
            <div className="py-4 px-4 space-y-4">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search for groceries..." 
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link to="/shop" className="p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop
                </Link>
                <Link to="/categories" className="p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <ListTree className="w-4 h-4 mr-2" />
                  Categories
                </Link>
                <Link to="/deals" className="p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <Percent className="w-4 h-4 mr-2" />
                  Deals
                </Link>
                <Link to="/about" className="p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  About
                </Link>
                <Link to="/cat" className="p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <CatIcon className="w-4 h-4 mr-2" />
                  Cat
                </Link>
                <Link to="/account" className="p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Link>
                <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-md flex justify-between items-center">
                  <div className="flex items-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cart
                  </div>
                  <span className="bg-grocery-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
