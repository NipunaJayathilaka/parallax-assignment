import React from "react";
import "./HomePage.css";
import ItemCard from "./itemCard/ItemCard.tsx";
import products from "../productJSON/ProductData.json";
import Dropdown from "react-bootstrap/Dropdown";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="section-one">
        <div className="">
          <img className="img" src="./images/1.png" alt="" />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Please select
            </Dropdown.Toggle>

            {/* <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu> */}
          </Dropdown>
          <span>11/1/2023 | Wednesday</span>
        </div>

        <div className="">
          <h2>STOREMATE</h2>
        </div>

        <div className="">
          <span>Atthanayake</span>
          <img
            id="profile-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&usqp=CAU"
            alt=""
          />
        </div>
      </div>

      <hr/>

      <div className="section-two">
        <div className="table-area"></div>

        {/* This is the area that the task have implemented */}
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
        {/* ----------------------------------- */}
      </div>

      <div className="section-three"></div>
    </div>
  );
}
