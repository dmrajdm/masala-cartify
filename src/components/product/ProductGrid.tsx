
import { useState } from "react";
import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
}

const ProductGrid = ({ products, className }: ProductGridProps) => {
  // Add a small delay to each card to create a staggered animation effect
  const [isLoaded, setIsLoaded] = useState(false);
  
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);

  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
        className
      )}
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          className={cn(
            "transition-all duration-500 transform opacity-0",
            isLoaded && "opacity-100 translate-y-0"
          )}
          style={{ 
            transitionDelay: `${index * 100}ms`,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)" 
          }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
