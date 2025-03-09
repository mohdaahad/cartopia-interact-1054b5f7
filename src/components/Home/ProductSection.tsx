
import React from 'react';
import ProductCard, { ProductProps } from '../Products/ProductCard';

const products: ProductProps[] = [
  {
    id: 1,
    name: "Organic Bananas",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 3.99,
    discountedPrice: 2.99,
    unit: "1 bunch (5-7 units)",
    isAvailable: true,
    estimatedDelivery: "10 min delivery",
    inStock: true
  },
  {
    id: 2,
    name: "Fresh Milk",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 4.50,
    unit: "1 liter",
    isAvailable: true,
    estimatedDelivery: "15 min delivery",
    inStock: true
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 3.25,
    discountedPrice: 2.75,
    unit: "400g loaf",
    isAvailable: true,
    estimatedDelivery: "10 min delivery",
    inStock: true
  },
  {
    id: 4,
    name: "Free Range Eggs",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    price: 5.99,
    unit: "Pack of 12",
    isAvailable: true,
    estimatedDelivery: "15 min delivery",
    inStock: false
  }
];

interface ProductSectionProps {
  title: string;
  products: ProductProps[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${product.id * 100}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return <ProductSection title="Trending Products" products={products} />;
};

export default FeaturedProducts;
