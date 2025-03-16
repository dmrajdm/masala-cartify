
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ProductDetail from "@/components/product/ProductDetail";
import CartDrawer from "@/components/cart/CartDrawer";
import { getProductById, getProductsByCategory, Product } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products from the same category
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 4);
        
        setRelatedProducts(related);
        
        // Simulate loading
        setTimeout(() => {
          setIsLoaded(true);
        }, 300);
      } else {
        // Product not found, redirect to products page
        navigate("/products", { replace: true });
      }
    }
  }, [id, navigate]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{product.name} | Nagaram Masala</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      <Navbar />
      <CartDrawer />
      
      <main className="pt-28 pb-16">
        <Container>
          <Button
            variant="ghost"
            size="sm"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <ProductDetail product={product} />
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <div className="flex items-center my-8">
                <Separator className="flex-grow" />
                <h2 className="font-serif text-2xl px-6">You may also like</h2>
                <Separator className="flex-grow" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>
      
      <Footer />
    </>
  );
};

export default ProductDetailPage;
