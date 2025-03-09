
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBagX, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="text-center max-w-md mx-auto p-8 rounded-xl">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-50 rounded-full mb-8 animate-bounce-in">
          <ShoppingBagX className="w-12 h-12 text-grocery-secondary" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button 
          className="bg-grocery-primary hover:bg-grocery-primary/90 btn-hover-effect"
          onClick={() => window.location.href = '/'}
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
