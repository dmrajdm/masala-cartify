
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight: string;
  ingredients: string[];
  featured: boolean;
  bestSeller: boolean;
  new: boolean;
}

// Placeholder images from placeholder.com until real product images are added
export const products: Product[] = [
  {
    id: 1,
    name: "Nagaram Garam Masala",
    description: "Our signature blend of aromatic spices, perfect for adding depth and warmth to curries, soups, and rice dishes. Made from freshly ground cardamom, cinnamon, cloves, and other premium spices.",
    price: 6.99,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Garam+Masala",
    category: "Blended Spices",
    weight: "100g",
    ingredients: ["Cardamom", "Cinnamon", "Cloves", "Black Pepper", "Cumin"],
    featured: true,
    bestSeller: true,
    new: false
  },
  {
    id: 2,
    name: "Nagaram Biryani Masala",
    description: "Elevate your biryani with our special blend designed to create the perfect balance of flavors. Contains a harmonious mix of spices that bring authenticity to your biryani.",
    price: 7.99,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Biryani+Masala",
    category: "Blended Spices",
    weight: "100g",
    ingredients: ["Bay Leaf", "Star Anise", "Cardamom", "Cinnamon", "Mace", "Saffron"],
    featured: true,
    bestSeller: false,
    new: false
  },
  {
    id: 3,
    name: "Nagaram Chaat Masala",
    description: "Add a tangy, zesty punch to fruits, chaats, and snacks with our carefully crafted chaat masala. The perfect balance of sour, spicy and savory flavors.",
    price: 5.99,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Chaat+Masala",
    category: "Blended Spices",
    weight: "80g",
    ingredients: ["Amchur (Dried Mango Powder)", "Cumin", "Black Salt", "Asafoetida", "Black Pepper"],
    featured: false,
    bestSeller: true,
    new: false
  },
  {
    id: 4,
    name: "Nagaram Premium Turmeric Powder",
    description: "Our high-curcumin turmeric powder is sourced from the finest farms, providing that perfect golden color and authentic flavor to your curries and other dishes.",
    price: 4.99,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Turmeric+Powder",
    category: "Single Spices",
    weight: "150g",
    ingredients: ["100% Pure Turmeric"],
    featured: false,
    bestSeller: false,
    new: true
  },
  {
    id: 5,
    name: "Nagaram Red Chili Powder",
    description: "Made from premium quality red chilies, this powder adds the perfect amount of heat and vibrant color to your dishes.",
    price: 4.99,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Chili+Powder",
    category: "Single Spices",
    weight: "100g",
    ingredients: ["100% Pure Dried Red Chilies"],
    featured: false,
    bestSeller: false,
    new: false
  },
  {
    id: 6,
    name: "Nagaram Coriander Powder",
    description: "Freshly ground coriander seeds with their citrusy notes are an essential base for many Indian dishes. Our coriander powder is aromatic and full of flavor.",
    price: 4.49,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Coriander+Powder",
    category: "Single Spices",
    weight: "100g",
    ingredients: ["100% Pure Coriander Seeds"],
    featured: false,
    bestSeller: false,
    new: false
  },
  {
    id: 7,
    name: "Nagaram Cumin Powder",
    description: "Our freshly ground cumin powder has an earthy, nutty flavor that forms the foundation of countless dishes across various cuisines.",
    price: 4.49,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Cumin+Powder",
    category: "Single Spices",
    weight: "100g",
    ingredients: ["100% Pure Cumin Seeds"],
    featured: false,
    bestSeller: false,
    new: false
  },
  {
    id: 8,
    name: "Nagaram Tandoori Masala",
    description: "Create authentic tandoori dishes at home with our special blend of spices. Perfect for marinating chicken, fish, paneer, or vegetables before grilling or baking.",
    price: 6.99,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Tandoori+Masala",
    category: "Blended Spices",
    weight: "100g",
    ingredients: ["Red Chili", "Coriander", "Cumin", "Ginger", "Garlic", "Nutmeg"],
    featured: true,
    bestSeller: true,
    new: false
  },
  {
    id: 9,
    name: "Nagaram Sambar Masala",
    description: "Our special Sambar Masala is a carefully balanced blend of spices that gives your sambar that authentic South Indian flavor.",
    price: 6.49,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Sambar+Masala",
    category: "Blended Spices",
    weight: "100g",
    ingredients: ["Coriander", "Red Chili", "Curry Leaves", "Fenugreek", "Turmeric"],
    featured: false,
    bestSeller: false,
    new: true
  },
  {
    id: 10,
    name: "Nagaram Kitchen King Masala",
    description: "A versatile all-purpose blend that adds a royal touch to any dish. Our Kitchen King Masala enhances the flavor of vegetables, lentils, and meat dishes.",
    price: 7.49,
    image: "https://placehold.co/600x400/FCD9AD/F47311?text=Kitchen+King+Masala",
    category: "Blended Spices",
    weight: "100g",
    ingredients: ["Coriander", "Cumin", "Fenugreek", "Ginger", "Cinnamon", "Cardamom"],
    featured: false,
    bestSeller: false,
    new: false
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
