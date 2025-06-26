import React from "react";
import TailoredShirtProduct from "../components/TailoredShirtProduct";
import ProductImageGallery from "../components/ProductImageGallery";
import "../styles/ProductStyle.css"; // Ensure you have the correct path to your CSS file

// Main Product Page Component
const SingleProduct = () => {
    return (
      <div className="single-product-page">
        <div className="product-image-section">
          <ProductImageGallery />
        </div>
        <div className="product-details-section">
          <TailoredShirtProduct />
        </div>
      </div>
    );
  };
  
export default SingleProduct;