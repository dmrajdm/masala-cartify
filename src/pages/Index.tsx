
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CartDrawer from "@/components/cart/CartDrawer";
import { getBestSellers, getNewProducts, Product } from "@/lib/products";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const bestSellers = getBestSellers();
  const newProducts = getNewProducts();
  
  return (
    <>
      <Helmet>
        <title>Nagaram Masala - Premium Quality Spices</title>
        <meta name="description" content="Discover Nagaram Masala's premium collection of handcrafted spice blends, bringing authentic tastes to your kitchen." />
      </Helmet>
      
      <Navbar />
      <CartDrawer />
      
      <main>
        <Hero />
        <FeaturedProducts />
        
        {/* Best Sellers Section */}
        {bestSellers.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <Container>
              <h2 className="font-serif text-3xl mb-2 text-center">Best Sellers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-10">
                Our most popular products loved by customers worldwide.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {bestSellers.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Container>
          </section>
        )}
        
        {/* About Section Teaser */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl mb-4">Our Commitment to Quality</h2>
                <p className="text-muted-foreground mb-4">
                  At Nagaram Masala, we're dedicated to bringing you the finest quality spices, sourced from premium farms and carefully processed to preserve their authentic flavors and aromas.
                </p>
                <p className="text-muted-foreground mb-6">
                  Each batch is crafted with passion, ensuring that you experience the true essence of traditional Indian spices in every dish you cook.
                </p>
                <a 
                  href="/about" 
                  className="text-primary hover:text-primary/90 font-medium inline-flex items-center"
                >
                  Learn more about our story
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-2 bg-spice-100/30 blur-xl rounded-lg"></div>
                <img 
                  src="https://placehold.co/600x400/FFF/F47311?text=Spice+Selection"
                  alt="Premium spice selection" 
                  className="w-full h-auto rounded-lg relative"
                />
              </div>
            </div>
          </Container>
        </section>
        
        {/* New Arrivals Section */}
        {newProducts.length > 0 && (
          <section className="py-16">
            <Container>
              <div className="flex items-center mb-10">
                <Separator className="flex-grow" />
                <h2 className="font-serif text-3xl px-6">New Arrivals</h2>
                <Separator className="flex-grow" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newProducts.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Container>
          </section>
        )}
        
        {/* Testimonial Section */}
        <section className="py-16 bg-secondary/30">
          <Container>
            <h2 className="font-serif text-3xl mb-8 text-center">What Our Customers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The Nagaram Garam Masala has transformed my cooking. The authentic flavors make every dish taste like it was made by a professional chef."
                </p>
                <p className="font-medium">- Priya S.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "I've tried many biryani masalas, but Nagaram's blend stands out with its perfect balance of spices. It's now a staple in my kitchen!"
                </p>
                <p className="font-medium">- Arun M.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The quality and freshness of these spices are unmatched. Fast shipping and beautiful packaging make it a perfect gift too."
                </p>
                <p className="font-medium">- Sarah J.</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
