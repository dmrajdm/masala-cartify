
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/lib/products";
import { ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-white border border-border transition-all duration-300 hover:shadow-soft",
        className
      )}
    >
      {/* Product badges */}
      <div className="absolute left-4 top-4 z-10 flex flex-col gap-1">
        {product.new && (
          <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
        )}
        {product.bestSeller && (
          <Badge className="bg-primary hover:bg-primary/90">Best Seller</Badge>
        )}
      </div>
      
      {/* Product image with hover effect */}
      <Link 
        to={`/product/${product.id}`}
        className="aspect-square overflow-hidden"
      >
        <div className="h-full w-full relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
      
      {/* Product info */}
      <div className="flex flex-col p-4 flex-grow">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground">{product.category}</span>
        </div>
        
        <Link 
          to={`/product/${product.id}`}
          className="mb-2 line-clamp-1 text-lg font-medium transition-colors hover:text-primary"
        >
          {product.name}
        </Link>
        
        <p className="line-clamp-2 text-sm text-muted-foreground mb-4 flex-grow">
          {product.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-medium">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="rounded-full"
              onClick={() => addItem(product)}
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
