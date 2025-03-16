
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, ShoppingCart, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/products";
import { cn } from "@/lib/utils";

const CartDrawer = () => {
  const { items, isCartOpen, toggleCart, subtotal, clearCart } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle click outside to close drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isCartOpen && 
        drawerRef.current && 
        !drawerRef.current.contains(event.target as Node)
      ) {
        toggleCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when drawer is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen, toggleCart]);

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  // Shipping calculation (free over $35)
  const shippingCost = subtotal >= 35 ? 0 : 5.99;
  const total = subtotal + shippingCost;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Cart Drawer */}
      <div 
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 max-w-full bg-background shadow-lg z-50 transition-transform duration-300 ease-in-out transform",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-medium flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Your Cart
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={toggleCart}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col h-[calc(100%-8rem)] overflow-auto">
          {items.length > 0 ? (
            <div className="divide-y divide-border px-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Add some products to your cart and they will appear here.
              </p>
              <Button 
                variant="outline" 
                className="px-8"
                onClick={toggleCart}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>

        {/* Cart Summary */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 bg-secondary/30">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {shippingCost === 0 
                    ? "Free" 
                    : formatPrice(shippingCost)}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border text-base font-medium">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              {subtotal < 35 && (
                <div className="text-xs text-muted-foreground mt-1">
                  Add {formatPrice(35 - subtotal)} more for free shipping
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Button 
                className="w-full bg-primary text-white hover:bg-primary/90"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={toggleCart}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
