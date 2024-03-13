import React from "react";
import "./HomePage.css";
import ItemCard from "./itemCard/ItemCard.tsx";
import products from "../productJSON/ProductData.json";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* ===================================== SECTION ONE =====================================      */}
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

      {/* ================================= SECTION TWO =====================================      */}

      <div className="section-two">
        <div className="table-area">
          <div className="part-one">
            <div className="table-area-one">
              <div className="">
                <ButtonGroup>
                  <Button variant="secondary">
                    <img src="./images/2.png" alt="" />
                  </Button>

                  <DropdownButton
                    as={ButtonGroup}
                    title="Please Selcect"
                    id="bg-nested-dropdown"
                    variant="light"
                    className="bg-nested-dropdown"
                  >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                  </DropdownButton>
                  <Button variant="secondary">
                    <img src="./images/3.png" alt="" />
                  </Button>
                </ButtonGroup>
              </div>
              <div className="">
                <ButtonGroup>
                  <Button variant="secondary">
                    <img src="./images/4.png" alt="" />
                  </Button>

                  <DropdownButton
                    as={ButtonGroup}
                    title="Please Selcect"
                    id="bg-nested-dropdown"
                    variant="light"
                    className="bg-nested-dropdown"
                  >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                  </DropdownButton>
                  <Button variant="secondary">
                    <img src="./images/3.png" alt="" />
                  </Button>
                </ButtonGroup>
              </div>
            </div>

            <div className="table-area-two">
              <DropdownButton
                as={ButtonGroup}
                title="Please Selcect"
                id="bg-nested-dropdown"
                variant="light"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                as={ButtonGroup}
                title="Please Selcect"
                id="bg-nested-dropdown"
                variant="light"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                as={ButtonGroup}
                title="Please Selcect"
                id="bg-nested-dropdown"
                variant="light"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div className="part-two">
            <p>PRODUCT</p>
            <p>QUANTITY</p>
            <p>UNIT PRICE</p>
            <p>LINE PRICE</p>
          </div>

          <div className="part-three">
            <p>Please Select Product Item</p>
          </div>
        </div>

        {/*============================ This is the area that the task have implemented ===============*/}
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
        {/* ========================================================================================== */}
      </div>

      {/* ================================== SECTION THREE ===========================================       */}

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
