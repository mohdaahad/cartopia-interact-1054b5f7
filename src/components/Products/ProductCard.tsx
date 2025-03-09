
import React, { useState } from 'react';
import { Plus, Minus, Clock, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from 'sonner';

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discountedPrice?: number;
  unit: string;
  isAvailable: boolean;
  estimatedDelivery: string;
  inStock: boolean;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  
  const addToCart = () => {
    setQuantity(1);
    toast.success(`Added ${product.name} to cart!`);
  };

  const incrementQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
    toast.success(`Added ${product.name} to cart!`);
  };

  const decrementQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      if (quantity === 1) {
        toast.info(`Removed ${product.name} from cart`);
      }
    }
  };

  const discount = product.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) 
    : 0;

  return (
    <div className={`product-card ${!product.inStock ? 'opacity-70' : ''}`}>
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-grocery-secondary text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-light">
          {discount}% OFF
        </div>
      )}
      
      <div className="relative mb-3">
        <div className="h-40 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
            <p className="text-grocery-secondary font-semibold">Out of Stock</p>
          </div>
        )}
      </div>
      
      <h3 className="font-medium text-gray-900 line-clamp-2 h-12">{product.name}</h3>
      
      <div className="text-sm text-gray-500 mb-2">{product.unit}</div>
      
      <div className="flex items-center mb-3">
        {product.discountedPrice ? (
          <>
            <span className="font-bold text-gray-900">${product.discountedPrice.toFixed(2)}</span>
            <span className="ml-2 text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
          </>
        ) : (
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
        )}
      </div>
      
      <div className="flex items-center text-xs text-gray-500 mb-4">
        <Clock className="w-3 h-3 mr-1" />
        <span>{product.estimatedDelivery}</span>
      </div>
      
      {product.inStock && (
        quantity === 0 ? (
          <Button 
            onClick={addToCart}
            className="w-full bg-grocery-primary hover:bg-grocery-primary/90 text-white btn-hover-effect"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center justify-between bg-gray-100 rounded-full p-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full h-8 w-8 bg-white shadow-sm hover:bg-grocery-primary hover:text-white"
                    onClick={decrementQuantity}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remove from cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <span className="font-medium text-gray-900">{quantity}</span>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full h-8 w-8 bg-white shadow-sm hover:bg-grocery-primary hover:text-white"
                    onClick={incrementQuantity}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )
      )}
    </div>
  );
};

export default ProductCard;
