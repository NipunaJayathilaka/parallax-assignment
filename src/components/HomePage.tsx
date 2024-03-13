import React from "react";
import "./HomePage.css";
import ItemCard from "./itemCard/ItemCard.tsx";
import products from "../productJSON/ProductData.json";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

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

      <hr />

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

      <div className="section-three">
        <div className="table-side-buttons">
          <div className="">
            <Button className="font-format" variant="primary">
              New Button <br />
              Rs. 100.00
            </Button>
            <Button className="font-format" variant="primary">
              New Button <br />
              Rs. 100.00
            </Button>
          </div>
          <div className="">
            <Button className="font-format" variant="primary">
              Discount <br />
              Rs. 100.00
            </Button>
            <Button className="font-format" variant="primary">
              {" "}
              Shipping <br />
              Rs. 100.00
            </Button>
          </div>
          <div className="">
            <Button className="font-format" variant="primary">
              {" "}
              Tax <br />
              Rs. 100.00
            </Button>
            <Button className="font-format" variant="primary">
              {" "}
              Packaging <br />
              Rs. 100.00
            </Button>
          </div>
          <div className="">
            <Button className="font-format" variant="light">
              Item Count: 400
            </Button>
            <Button className="font-format" variant="primary">
              {" "}
              Total <br />
              Rs. 100.00
            </Button>
          </div>
        </div>

        <div className="item-side-buttons">
          <div className="">
            <Button
              className="item-font-format green-color-button"
              variant="light"
            >
              <img className="download-button" src="./images/5.png" alt="" />{" "}
              Cash
            </Button>
            <Button className="item-font-format" variant="primary">
              Button
            </Button>
          </div>
          <div className="">
            <Button
              className="item-font-format yellow-color-button"
              variant="light"
            >
              <img className="download-button" src="./images/5.png" alt="" />{" "}
              Pay
            </Button>
            <Button className="item-font-format" variant="primary">
              Button
            </Button>
          </div>
          <div className="">
            <Button
              className="item-font-format yellow-color-button"
              variant="light"
            >
              <img className="download-button" src="./images/5.png" alt="" />{" "}
              Card
            </Button>
            <Button className="item-font-format" variant="primary">
              Button
            </Button>
          </div>
          <div className="">
            <Button
              className="item-font-format yellow-color-button"
              variant="light"
            >
              <img className="download-button" src="./images/5.png" alt="" />{" "}
              Credit
            </Button>
            <Button className="item-font-format" variant="primary">
              Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
