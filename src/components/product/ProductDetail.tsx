
import { useState } from "react";
import { Product, formatPrice } from "@/lib/products";
import { 
  Plus, 
  Minus, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Check, 
  Package,
  Truck,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-white/50">
        <div className="absolute left-4 top-4 z-10 flex flex-col gap-1">
          {product.new && (
            <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
          )}
          {product.bestSeller && (
            <Badge className="bg-primary hover:bg-primary/90">Best Seller</Badge>
          )}
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover animate-fade-in"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col">
        <div className="mb-6 animate-slide-down" style={{ animationDelay: "100ms" }}>
          <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground">{product.category}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{product.weight}</span>
          </div>
          <div className="text-2xl font-medium">{formatPrice(product.price)}</div>
        </div>
        
        <div className="mb-6 animate-slide-down" style={{ animationDelay: "200ms" }}>
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>
        
        {/* Ingredients */}
        <div className="mb-6 animate-slide-down" style={{ animationDelay: "300ms" }}>
          <h3 className="text-base font-medium mb-2">Ingredients</h3>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ingredient, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-secondary/70 text-secondary-foreground"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Quantity Selector */}
        <div className="flex items-center gap-8 mb-6 animate-slide-down" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-l-md rounded-r-none border-r-0"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <div className="h-9 px-4 flex items-center justify-center border border-input">
              {quantity}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-r-md rounded-l-none border-l-0"
              onClick={incrementQuantity}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full"
              aria-label="Share product"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <div className="animate-slide-down" style={{ animationDelay: "500ms" }}>
          <Button 
            size="lg" 
            className="w-full md:w-auto px-8 bg-primary text-white hover:bg-primary/90"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
        
        {/* Product Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-down" style={{ animationDelay: "600ms" }}>
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/30">
            <Package className="h-5 w-5 mb-2 text-primary" />
            <span className="text-sm font-medium">Premium Quality</span>
            <span className="text-xs text-muted-foreground">Handpicked spices</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/30">
            <Truck className="h-5 w-5 mb-2 text-primary" />
            <span className="text-sm font-medium">Fast Shipping</span>
            <span className="text-xs text-muted-foreground">2-3 business days</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/30">
            <Shield className="h-5 w-5 mb-2 text-primary" />
            <span className="text-sm font-medium">100% Authentic</span>
            <span className="text-xs text-muted-foreground">Quality guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
