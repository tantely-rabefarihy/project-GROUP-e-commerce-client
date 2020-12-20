import React from "react";
import styled from "styled-components";
const Sidebar = () => {
  return (
    <Wrapper>
      <Category>
        <h4>Category</h4>
        <label style={{color : "#fff"}}>
          <input type="checkbox" />
          Entertainment
        </label>
        <label  style={{color : "#fff"}}>
          <input type="checkbox" />
          Fitness
        </label>
        <label  style={{color : "#fff"}}>
          <input type="checkbox" />
          Lifestyle
        </label>
        <label  style={{color : "#fff"}}>
          <input type="checkbox" />
          Medical
        </label>
      </Category>
      <PriceCat>
        <h4>Price</h4>
        <label>
          <input type="checkbox" />
          Under 50 $
        </label>
        <label>
          <input type="checkbox" />
          100 $ - 200$
        </label>
        <label>
          <input type="checkbox" />
          200 $ - 300$
        </label>
      </PriceCat>
      <div>
        <h4>Brand</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  grid-area: sidebar;
  padding: 16px 30px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;


`;

const LabelCat = styled.label`
  color: #fff !important;
`;

const PriceCat = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
