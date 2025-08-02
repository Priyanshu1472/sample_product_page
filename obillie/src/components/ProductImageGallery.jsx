import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import '../styles/ProductImageGallery.css'; // Ensure you have the correct path to your CSS file  
import img1 from '../assets/images.jpeg';
import img2 from '../assets/images1.jpeg';
import img3 from '../assets/images2.jpeg';
import img4 from '../assets/images3.jpeg';

// Product Image Gallery Component
const ProductImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const productImages = [ img1, img2, img3, img4, img1, img2, img3, img4 ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="product-gallery-container">
      <div className="main-image-wrapper">
        <div className="main-image-container">
          <img
            src={productImages[selectedImage]}
            alt={`Product view ${selectedImage + 1}`}
            className={`main-image ${isZoomed ? 'zoomed' : ''}`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          
          <div className="zoom-icon">
            <ZoomIn size={20} />
          </div>
          
          <button onClick={prevImage} className="nav-arrow nav-arrow-left">
            <ChevronLeft size={20} />
          </button>
          
          <button onClick={nextImage} className="nav-arrow nav-arrow-right">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="image-counter">
          {selectedImage + 1} / {productImages.length}
        </div>
      </div>

      <div className="thumbnail-slider">
        <div className="thumbnail-container">
          {productImages.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="thumbnail-image-wrapper">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-image"
                />
              </div>
              
              {selectedImage === index && <div className="active-indicator"></div>}
              {selectedImage !== index && <div className="thumbnail-overlay"></div>}
            </div>
          ))}
        </div>
        
        <div className="fade-left"></div>
        <div className="fade-right"></div>
      </div>
    </div>
  );
};

export default ProductImageGallery;