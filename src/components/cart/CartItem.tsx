
import { useState } from "react";
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/hooks/useCart";
import { X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    // Wait for animation to complete before removing from cart
    setTimeout(() => {
      removeItem(item.id);
    }, 300);
  };

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      handleRemove();
    }
  };

  return (
    <div 
      className={cn(
        "flex items-start space-x-4 py-4 transition-all duration-300",
        isRemoving && "opacity-0 transform -translate-x-4"
      )}
    >
      {/* Product Image */}
      <Link 
        to={`/product/${item.id}`}
        className="flex-shrink-0 overflow-hidden rounded-md border border-border"
      >
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-16 w-16 object-cover"
        />
      </Link>
      
      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <Link 
            to={`/product/${item.id}`}
            className="text-sm font-medium hover:text-primary"
          >
            {item.name}
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-muted-foreground hover:text-foreground -mt-1 -mr-1"
            onClick={handleRemove}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
        
        <span className="mt-1 text-xs text-muted-foreground">{item.weight}</span>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center border border-input rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-l-md rounded-r-none"
              onClick={decrementQuantity}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="flex items-center justify-center w-8 text-xs font-medium">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-r-md rounded-l-none"
              onClick={incrementQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <span className="font-medium text-sm">
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
