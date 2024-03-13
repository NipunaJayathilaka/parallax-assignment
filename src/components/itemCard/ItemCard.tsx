import React, { FC, useState } from "react";
import "./ItemCard.css";
import Carousel from "react-bootstrap/Carousel";

export interface ItemCardProps {
  productImages: string[];
  batchNumber: string;
  productName: string;
  productQuantity: string;
  productPrice: string;
}

const ItemCard: FC<ItemCardProps> = ({
  productImages,
  batchNumber,
  productName,
  productQuantity,
  productPrice,
}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="item-card">
      <div className="image">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
        >
          {productImages.map((image, imageIndex) => (
            <Carousel.Item key={imageIndex}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Image ${imageIndex + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="descrilition">
        <li>Batch No: {batchNumber}</li>
        <li>Product Name: {productName}</li>
        <li>Quantity: {productQuantity}</li>
        <li>Price: {productPrice}</li>
      </div>
    </div>
  );
};

export default ItemCard;
