import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bannerImg from "../../assets/banner-watch.jpg";
import { Icon } from "react-icons-kit";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
import { NavLink } from "react-router-dom";
import { ic_attach_money } from "react-icons-kit/md/ic_attach_money";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../reducers";

// This will be the header. We could have the title and a picture as a banner

const Header = () => {
  const [numInCart, setNumInCart] = useState("");

  const storeItems = useSelector(getStoreItemArray);

  useEffect(() => {
    if (storeItems.length !== 0) {
      setNumInCart(storeItems.length);
    }
  }, [storeItems]);

  return (
    <Wrapper>
      <Top>
        <Title>
          <div style={{ color: "red" }}></div>
          Gucchi
        </Title>
        <div>
          <NavLink to="/cart">
            {numInCart ? (
              <ItemCount>
                <p>{numInCart}</p>
              </ItemCount>
            ) : (
              <></>
            )}
            <Icon icon={ic_shopping_cart} size={40} className="icon" />
          </NavLink>
        </div>
      </Top>
      <BannerSec></BannerSec>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: header;
  width: auto;
  margin: 0;
  position: relative;

  .icon {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    cursor: pointer;
    color: #fff;
  }
`;

const Top = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100vw;
  height: 6em;
`;

const BannerSec = styled.section`
  background: url(${bannerImg}) center;
  background-size: cover;
  padding: 8rem 2rem;
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 4rem;
  display: flex;
  color: #f4f4f4;
`;

const ItemCount = styled.div`
  border: 2px solid white;
  padding: 8px;
  width: 30px;
  height: 30px;
  font-size: 12px;
  border-radius: 50%;
  text-decoration: none;
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: black;
  z-index: 1;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
`;

export default Header;
