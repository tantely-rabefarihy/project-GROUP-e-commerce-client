import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/icomoon/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import { twitter } from "react-icons-kit/fa/twitter";
import { youtubePlay } from "react-icons-kit/fa/youtubePlay";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <CompanyInfoContainer>
          <CompanyTitle>Gucchi Mane</CompanyTitle>
          <li>support@gucchimane.com</li>
          <li>Call us on</li>
          <li>+1 844 420 6969</li>
          <li>7AM - 4PM, EST Mon - Fri</li>
          <Icons>
            <li>
              <Icon size={20} icon={facebook} />
            </li>
            <li>
              <Icon size={20} icon={instagram} />
            </li>
            <li>
              <Icon size={20} icon={twitter} />
            </li>
            <li>
              <Icon size={20} icon={youtubePlay} />
            </li>
          </Icons>
        </CompanyInfoContainer>
      </div>
      <div>
        <InfoContainer>
          <Title>CUSTOMER SERVICE</Title>
          <li>FAQ</li>
          <li>Returns</li>
          <li>Contact us</li>
          <li>Reviews</li>
        </InfoContainer>
      </div>
      <div>
        <InfoContainer>
          <Title>#GUCCHIMANE</Title>
          <li>Our Blog</li>
          <li>Contact</li>
          <li>Our Story</li>
          <li>Affiliates</li>
        </InfoContainer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CompanyInfoContainer = styled.div`
  list-style: none;
  li {
    padding: 7px;
    color: #fff;
  }
  li:hover {
    cursor: default;
  }
`;

const InfoContainer = styled.div`
  list-style: none;
  li {
    padding: 7px;
    color: #fff;
  }
  li:hover {
    cursor: pointer;
    color: #f8be06;
  }
`;

const CompanyTitle = styled.h2`
  margin: 0;
  font-family: "Poppins", sans-serif;
  list-style: none;
  font-size: 40px;
  font-weight: 700;
  color: #f8be06;
  :hover {
    cursor: default;
  }
`;

const Title = styled.div`
  list-style: none;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: #f8be06;
  :hover {
    cursor: default;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  width: 200px;
  li :hover {
    cursor: pointer;
    color: #f8be06;
  }
`;

export default Footer;
