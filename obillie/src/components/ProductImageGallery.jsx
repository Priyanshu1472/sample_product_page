import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Loader2 } from 'lucide-react';
import '../styles/ProductImageGallery.css'; // Ensure you have the correct path to your CSS file  
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';

// Product Image Gallery Component with Loading Buffer
const ProductImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // Mock image URLs - replace with your actual image imports
  const productImages = [img1, img2, img3, img4, img1, img2, img3, img4];

  // Preload all images
  useEffect(() => {
    let loadedImages = 0;
    
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          resolve(img);
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      try {
        await Promise.all(productImages.map(preloadImage));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
        // Still show the gallery even if some images fail to load
        setImagesLoaded(true);
      }
    };

    preloadAllImages();
  }, []);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  // Loading Buffer Component
  const LoadingBuffer = () => (
    <div className="loading-container">
      <div className="loading-content">
        <Loader2 className="loading-spinner" size={40} />
        <div className="loading-text">Loading Images...</div>
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(loadedCount / productImages.length) * 100}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {loadedCount} / {productImages.length}
          </div>
        </div>
      </div>
    </div>
  );

  // Show loading buffer until all images are loaded
  if (!imagesLoaded) {
    return <LoadingBuffer />;
  }

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

      {/* <style jsx>{`
        
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
          background: #f8f9fa;
          border-radius: 12px;
          margin: 20px;
        }

        .loading-content {
          text-align: center;
          padding: 40px;
        }

        .loading-spinner {
          animation: spin 1s linear infinite;
          color: #007bff;
          margin-bottom: 20px;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .loading-text {
          font-size: 18px;
          color: #333;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .loading-progress {
          width: 250px;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #007bff, #0056b3);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }

        .main-image-wrapper {
          margin-bottom: 20px;
        }

        .main-image-container {
          position: relative;
          width: 100%;
          height: 400px;
          background: #f8f9fa;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: zoom-in;
          transition: transform 0.3s ease;
        }

        .main-image.zoomed {
          transform: scale(1.5);
          cursor: zoom-out;
        }

        .zoom-icon {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255,255,255,0.9);
          border-radius: 8px;
          padding: 8px;
          color: #333;
          backdrop-filter: blur(4px);
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(4px);
        }

        .nav-arrow:hover {
          background: rgba(255,255,255,1);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow-left {
          left: 15px;
        }

        .nav-arrow-right {
          right: 15px;
        }

        .image-counter {
          text-align: center;
          margin-top: 12px;
          color: #666;
          font-size: 14px;
          font-weight: 500;
        }

        .thumbnail-slider {
          position: relative;
          padding: 0 20px;
        }

        .thumbnail-container {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 10px 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .thumbnail-container::-webkit-scrollbar {
          display: none;
        }

        .thumbnail {
          position: relative;
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .thumbnail:hover {
          transform: scale(1.05);
        }

        .thumbnail.active {
          box-shadow: 0 0 0 3px #007bff;
        }

        .thumbnail-image-wrapper {
          width: 100%;
          height: 100%;
        }

        .thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .active-indicator {
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #007bff;
          border-radius: 50%;
        }

        .thumbnail-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.3);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .thumbnail:not(.active):hover .thumbnail-overlay {
          opacity: 1;
        }

        .fade-left,
        .fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 20px;
          pointer-events: none;
          z-index: 1;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, rgba(255,255,255,1), transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, rgba(255,255,255,1), transparent);
        }
      `}</style> */}
    </div>
  );
};

export default ProductImageGallery;