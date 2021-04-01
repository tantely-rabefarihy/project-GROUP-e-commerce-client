import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem, changeCartQuantityItem } from "../../actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  if (!item.totalPrice) {
    item.totalPrice = item.price.split("$")[1];
  }

  return (
    <>
      <Main>
        <ItemDetails>
          <Image src={item.image} alt="product Image" />
          <MetaData className="itemDetails">
            <span>{item.name}</span>
            <Price>
              <label>
                PRICE: <span className="itemPrice">{item.price}</span>
              </label>
            </Price>
            <div>
              <label>
                QUANTITY:
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    dispatch(changeCartQuantityItem(item, e.target.value));
                  }}
                  value={item.quantity}
                  className="inputQuantity"
                />
              </label>
            </div>
          </MetaData>
        </ItemDetails>
        <RightPart>
          <RemoveBtn
            className="buttonPrice"
            onClick={() => dispatch(removeItem(item))}
          >
            Remove Item
          </RemoveBtn>
          <TotalItem>
            Total for item:
            <span className="totalItemPrice">
              ${Number(item.totalPrice).toFixed(2)}
            </span>
          </TotalItem>
        </RightPart>
      </Main>
    </>
  );
};

export default CartItem;

const Main = styled.main`
  display: flex;
  border-bottom: 1px solid white;
  padding: 1rem 0;
  justify-content: space-between;
  @media only screen and (max-width: 568px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  width: 10rem;
  height: auto;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 568px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Price = styled.div`
  padding: 1rem 0;
`;
const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  font-size: 0.8rem;
  justify-content: space-between;
  @media only screen and (max-width: 568px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 568px) {
    align-items: center;
  }
`;

const RemoveBtn = styled.button`
  height: 30px;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  width: fit-content;
  align-self: flex-end;
  @media only screen and (max-width: 568px) {
    align-self: center;
  }
`;

const TotalItem = styled.label`
  padding: 1rem 0;
`;
