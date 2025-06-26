import React, { useState } from "react";
import { ArrowLeft, Heart, Share2, Star } from "lucide-react";

// Sample product data
const productsData = [
  {
    id: 1,
    name: "Essential Cotton Tee",
    description:
      "Crafted from premium organic cotton, this essential tee offers unmatched comfort and versatility. Perfect for everyday wear with a relaxed fit that moves with you.",
    style: "Casual",
    colors: [
      { name: "White", code: "#FFFFFF" },
      { name: "Black", code: "#000000" },
      { name: "Navy", code: "#1B263B" },
      { name: "Sage Green", code: "#9CAF88" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: 32,
    originalPrice: 45,
    rating: 4.5,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
    ],
    features: [
      "100% Organic Cotton",
      "Pre-shrunk",
      "Machine Washable",
      "Tagless Design",
    ],
    inStock: true,
    badge: "SALE",
  },
  {
    id: 2,
    name: "Minimalist Hoodie",
    description:
      "Clean lines meet supreme comfort in this carefully designed hoodie. Made with soft fleece interior and a structured silhouette for effortless style.",
    style: "Streetwear",
    colors: [
      { name: "Charcoal", code: "#36454F" },
      { name: "Cream", code: "#F5F5DC" },
      { name: "Forest Green", code: "#355E3B" },
      { name: "Burgundy", code: "#800020" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 68,
    originalPrice: 85,
    rating: 4.8,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    ],
    features: [
      "Soft Fleece Interior",
      "Adjustable Hood",
      "Kangaroo Pocket",
      "Ribbed Cuffs",
    ],
    inStock: true,
    badge: "NEW",
  },
  {
    id: 3,
    name: "Tailored Denim",
    description:
      "Premium selvedge denim with a modern cut. These jeans feature subtle fading and a comfortable mid-rise fit that flatters every silhouette.",
    style: "Contemporary",
    colors: [
      { name: "Indigo", code: "#4B0082" },
      { name: "Black", code: "#000000" },
      { name: "Light Wash", code: "#87CEEB" },
      { name: "Raw Denim", code: "#191970" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    price: 89,
    originalPrice: 89,
    rating: 4.6,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop",
    ],
    features: [
      "Selvedge Denim",
      "Mid-rise Fit",
      "Five Pocket Design",
      "Reinforced Seams",
    ],
    inStock: true,
    badge: null,
  },
  {
    id: 4,
    name: "Textured-knit Sweater",
    description:
      "Long-sleeved sweater in a soft, textured-knit cotton blend with ribbing at neckline, cuffs, and hem. Long-sleeved sweater in a soft, textured-knit cotton blend.",
    style: "Formal",
    colors: [
      { name: "Sage Green", code: "#9CAF88" },
      { name: "Cream", code: "#F5F5DC" },
      { name: "Dusty Rose", code: "#C19A6B" },
      { name: "Charcoal", code: "#36454F" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.3,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f3a9e?w=400&h=500&fit=crop",
    ],
    features: [
      "Soft Cotton Blend",
      "Textured Knit",
      "Ribbed Details",
      "Relaxed Fit",
    ],
    inStock: true,
    badge: "SALE",
  },
];
