
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://placehold.co/1600x900/FFF8ED/FFF8ED')] bg-cover bg-center opacity-50"
        aria-hidden="true"
      />
      
      {/* Spice illustrations - use real images in production */}
      <div className="absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-spice-50/40 blur-3xl"></div>
      <div className="absolute -left-16 bottom-1/4 h-60 w-60 rounded-full bg-spice-100/30 blur-3xl"></div>
      
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur-sm px-3 py-1">
            <span className="text-xs font-medium">Premium Quality Spices</span>
          </div>
          
          <h1 className="animate-fade-in font-serif text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-balance">
            Authentic Flavors for Your Culinary Journey
          </h1>
          
          <p className="animate-fade-in text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover Nagaram Masala's premium collection of handcrafted spice blends, sourced from the finest ingredients to bring authentic tastes to your kitchen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button 
              asChild
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 px-8"
            >
              <Link to="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="px-8"
            >
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
