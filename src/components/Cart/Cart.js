import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../reducers";
import { useDispatch } from "react-redux";
import { removeItem, changeCartQuantityItem } from "../../actions";

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
        <NavLink to="/">Main</NavLink>/ Shopping Cart
      </div>

      <div className="cartTitle">Your Cart</div>

      <div className="table">
        <div className="tableHead"></div>
        <div className="tableMiddle">
          <div className="itemRow">
            <div>
              <div className="tableItemHead" style={{ paddingLeft: 40 }}>
                Product
              </div>
            </div>
            <div>
              <div className="tableItemHead">Price</div>
              <div className="itemPrice"></div>
            </div>
            <div>
              <div className="tableItemHead">Quantity</div>
            </div>
            <div>
              <div className="tableItemHead">Total Item Price</div>
            </div>
            <button className="buttonPrice" style={{ visibility: "hidden" }}>
              X
            </button>
          </div>
          {/* divider */}

          {storeItems.map((item) => (
            <CartItem item={item} key={item.id}/>
          ))}
        </div>
      </div>

      <div className="totalPurchase">
        <div className="total">
          Total: <span>${grandTotal}</span>
        </div>
        {/* <NavLink to="/thankyou"> */}

        <NavLink to="/thankyou">
          <button
            onClick={(e) => {
              updateInventory();
            }}
          >
            Purchase
          </button>
        </NavLink>

        {/* </NavLink> */}
      </div>
    </Wrapper>
  );
};

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  if (!item.totalPrice) {
    item.totalPrice = item.price.split("$")[1];
  }

  return (
    <div className="itemRow">
      <div>
        <div className="itemHead itemAdded" style={{ paddingLeft: 40 }}>
          Product
        </div>
        <div className="itemContainer">
          <img className="itemImg" src={item.image} />
          <div className="itemDetails">
            <span>{item.name}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="itemHead itemAdded">Price</div>
        <div className="itemPrice">
          <span>{item.price}</span>
        </div>
      </div>
      <div>
        <div className="itemHead itemAdded">Quantity</div>

        <input
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(changeCartQuantityItem(item, e.target.value));
          }}
          value={item.quantity}
          className="inputQuantity"
        />
      </div>
      <div>
        <div className="itemHead itemAdded">Total Item Price</div>
        <div className="totalItemPrice">
          $<span>{Number(item.totalPrice).toFixed(2)}</span>
        </div>
      </div>
      <button
        className="buttonPrice"
        onClick={() => dispatch(removeItem(item))}
      >
        X
      </button>
    </div>
  );
};

const Wrapper = styled.div`
 
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  color: #fff;

  .homeLink {
    color: gray;
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
    justify-content: space-around;
    color: gray;
    border-bottom: 1px solid gray;
    margin: 0 55px 0 55px;
    margin-bottom: -23px;
  }

  .itemRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -25px;
  }
  .tableMiddle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 55px 0 55px;
  }

  .tableItemHead {
    padding-left: 40px;
    margin-top: 25px;
    color: gray;
  }
  .itemContainer {
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-top: -30px;
    width: 300px;
    // padding-left: 200px;

    img {
      width: 90px;
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
  .itemDetails {
    display: flex;
    flex-direction: column;
    width: 55%;
    margin-left: 15px;
    font-size: 14px;
    justify-content: center;
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
    align-self: center;
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
      border: none;
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

  .buttonPrice {
    border: none;
    font-weight: bold;
    font-size: 20px;
    background: none;
    cursor: pointer;
  }
`;

export default Cart;
