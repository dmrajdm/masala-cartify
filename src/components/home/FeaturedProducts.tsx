
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts, Product } from "@/lib/products";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setProducts(getFeaturedProducts());
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="font-serif text-3xl mb-2">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our carefully selected premium spice blends, crafted to deliver authentic flavors to your culinary creations.
            </p>
          </div>
          
          <Link 
            to="/products"
            className="mt-4 md:mt-0 group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all products
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-500 transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
