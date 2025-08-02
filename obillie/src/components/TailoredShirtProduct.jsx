// Tailored Shirt Product Component
import React, { useState } from 'react';

const TailoredShirtProduct = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Butter Yellow");

  const colors = [
    { name: "Butter Yellow", value: "#F4D03F", id: "butter-yellow" },
    { name: "White", value: "#FFFFFF", id: "white" },
    { name: "Black", value: "#000000", id: "black" },
    { name: "Navy", value: "#2C3E50", id: "navy" },
    { name: "Sage", value: "#87A96B", id: "sage" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="product-details">
      <div className="title-section">
        <h1 className="product-title">Tailored Shirt</h1>
        <h2 className="product-name">Lorem Ipsum</h2>
      </div>

      <p className="product-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas numquam illo impedit architecto beatae quaerat ullam sed consequatur assumenda similique rerum unde sit quia, esse quisquam itaque? Consequuntur, perspiciatis.
      </p>

      <div className="selection-section">
        <h3 className="section-title">Color</h3>
        <div className="color-container">
          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color.name)}
                className={`color-btn ${
                  selectedColor === color.name ? "active" : ""
                }`}
                style={{ backgroundColor: color.value }}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="selection-section">
        <h3 className="section-title">Size</h3>
        <div className="size-options">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`size-btn ${selectedSize === size ? "active" : ""}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="availability">Limited to just 10 pieces Worldwide</div>

      <button className="add-to-cart-btn">ADD TO CART</button>
    </div>
  );
};

export default TailoredShirtProduct;