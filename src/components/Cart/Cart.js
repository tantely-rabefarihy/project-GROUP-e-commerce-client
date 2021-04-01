import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../reducers";
import { useDispatch } from "react-redux";
import { removeItem, changeCartQuantityItem } from "../../actions";
import CartItem from "./CartItem";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  let [grandTotal, setgrandTotal] = useState(0);

  React.useEffect(() => {
    let grandTotal = 0;
    storeItems.forEach((item) => {
      grandTotal += Number(item.totalPrice);
    });

    setgrandTotal(grandTotal.toFixed(2));
  }, [storeItems]);

  console.log(storeItems);

  const updateInventory = () => {
    fetch("/inventory/update", {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(storeItems),
    })
      .then((res) => res.json())
      .then((data) => {
        // window.location = "https://determined-bose-30a67b.netlify.app/thankyou";
      });
  };

  return (
    <Wrapper>
      <div className="homeLink">
        <NavLink to="/">Main</NavLink> / Shopping Cart
      </div>

      <h1 className="cartTitle">Your Cart</h1>

      <div className="table">
        <div className="tableMiddle">
          <div className="tableHead"></div>

          <div>
            {storeItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="totalPurchase">
        <div className="total">
          Total: <span>${grandTotal}</span>
        </div>
        <NavLink to="/thankyou">
          <button
            className="purchaseBtn"
            onClick={(e) => {
              updateInventory();
            }}
          >
            Purchase
          </button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

// ***** CART PAGE STYLING ****

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  color: #fff;

  .productTitle {
    min-width: 20rem;
  }

  .homeLink {
    color: gray;
    padding: 1rem;
  }
  .subtitle {
    margin: 10px 0 10px 0px;
    padding-left: 30px;
    color: gray;
  }

  .cartTitle {
    font-size: 40px;
    margin: 40px 0 40px 40px;
  }

  .tableHead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: gray;
    border-bottom: 1px solid gray;

    grid-template-columns: 10rem 1fr;
  }

  .itemRow {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 1rem 0;
  }
  .tableMiddle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 55px;
  }

  .tableItemHead {
    color: gray;
    max-width: 10rem;
  }
  .itemContainer {
    display: flex;
    flex-direction: row;
    width: 300px;

    img {
      width: 12rem;
      height: auto;
    }
  }

  .itemHead {
    margin-bottom: 40px;
    color: gray;
    margin-top: 25px;
    margin-left: 200px;
  }

  .itemAdded {
    visibility: hidden;
  }

  .inputQuantity {
    width: 27px;
    padding: 5px 0 5px 5px;
    margin-left: 30px;
    color: #000;
  }

  select {
    height: 30px;
    align-self: center;
    border-radius: 0;
    padding: 3px;
    margin-left: 20px;
  }
  .totalItemPrice,
  .itemPrice {
    align-self: center;
    padding-top: 4px;
    margin-left: 20px;
  }
  .buttonPrice {
    height: 30px;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 1rem;
    background: none;
    cursor: pointer;
    width: fit-content;
  }

  .totalPurchase {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 110px;
    margin-right: 55px;

    .total {
      margin-right: 20px;
      font-weight: bold;
    }
    button {
      /* border: none; */
      color: #000;
      background-color: #fff;
      border: 1px solid #000;
      padding: 15px;
      font-size: 15px;
      cursor: pointer;
      margin-top: -10px;
    }

    button:hover {
      color: #fff;
      background-color: #000;
      border: 1px solid #fff;
    }
  }

  .purchaseBtn {
    border-radius: 5px;
  }
`;

export default Cart;
