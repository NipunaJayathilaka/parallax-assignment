import React from "react";
import "./HomePage.css";
import ItemCard from "./itemCard/ItemCard.tsx";
import products from "../productJSON/ProductData.json";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="section-one"></div>
      <div className="section-two">
        <div className="table-area"></div>
        <div className="item-area">
          <div className="items">
            {products.map((product, index) => (
              <ItemCard
                key={index}
                productImages={product.productImages}
                batchNumber={product.batchNumber}
                productName={product.productName}
                productQuantity={product.productQuantity}
                productPrice={product.productPrice}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="section-three"></div>
    </div>
  );
}
