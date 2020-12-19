import React, { useState } from "react";
import styled from "styled-components";
import { addItem } from "../../actions";
import { useDispatch } from "react-redux";

const StoreItem = ({ item, company }) => {
  const {
    id,
    name,
    price,
    bodyLocation,
    category,
    image,
    numInStock,
    companyId,
  } = item;

  const { _id: companyIdNum, name: companyName, url, country } = company;

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ItemContent>
        <ImageWrapper>
          <Image alt="item" src={image} />
        </ImageWrapper>
        <Title>{name}</Title>
        <Title>{companyName}</Title>
        <Price>{price}</Price>
        <p style={{ color: "black", margin: 0 }}>Category: {category}</p>
        {numInStock === 0 ? (
          <>
            <Stock>Out of stock</Stock>
            <BtnWrapper>
              <Add
                disabled
                onClick={() => dispatch(addItem({ id, name, price, image }))}
              >
                Out of stock
              </Add>
            </BtnWrapper>
          </>
        ) : (
          <>
            <Stock>{numInStock} left in stock</Stock>
            <BtnWrapper>
              <Add
                onClick={() =>
                  dispatch(addItem({ id, name, price, image, numInStock }))
                }
              >
                Buy Now !
              </Add>
            </BtnWrapper>
          </>
        )}
      </ItemContent>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 10px;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  text-align: center;
  /* height: fit-content; */
  display: flex;
  flex-direction: column;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ImageWrapper = styled.div`
  /* overflow; */
  border-radius: 12px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  padding: 2px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  align-self: center;
  height: auto;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

const Price = styled.h2`
  margin: 0;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Stock = styled.p`
  margin: 0;
`;
const Add = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 12px;
  background: black;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  :hover {
    color: red;
  }
`;

export default StoreItem;
