
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/product/ProductGrid";
import CartDrawer from "@/components/cart/CartDrawer";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract unique categories
  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter products by category
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  
  return (
    <>
      <Helmet>
        <title>Products | Nagaram Masala</title>
        <meta name="description" content="Browse our collection of premium quality spices and masala blends." />
      </Helmet>
      
      <Navbar />
      <CartDrawer />
      
      <main className="pt-28 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl mb-4 animate-fade-in">Our Products</h1>
            <p className="text-muted-foreground animate-fade-in">
              Discover our handcrafted collection of premium spices, carefully sourced and 
              blended to bring authentic flavors to your culinary creations.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  selectedCategory === category ? "bg-primary text-white" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <Separator className="mb-8" />
          
          {/* Product display */}
          <div className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <ProductGrid products={filteredProducts} />
          </div>
        </Container>
      </main>
      
      <Footer />
    </>
  );
};

export default Products;
