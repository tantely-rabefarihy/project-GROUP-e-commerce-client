import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

import ItemGrid from "./ItemGrid";
import Footer from "./Footer";
// This is the structure that could work for the homepage

const HomePage = () => {
  const defaultFilterState = [
    "Entertainment",
    "Fitness",
    "Medical",
    "Lifestyle",
  ];
  const [filter, setFilter] = useState([...defaultFilterState]);
  const [entChecked, setEntChecked] = useState(false);
  const [fitChecked, setFitChecked] = useState(false);
  const [medChecked, setMedChecked] = useState(false);
  const [lifeChecked, setLifeChecked] = useState(false);
  const [filter2, setFilter2] = useState([]);

  React.useEffect(() => {
    const checkedArray = [entChecked, fitChecked, lifeChecked, medChecked];

    checkedArray.every((box) => box === false)
      ? setFilter([...defaultFilterState])
      : setFilter([...filter2]);
  }, [entChecked, fitChecked, medChecked, lifeChecked]);

  const handleFilter = (e, catTarget, setCatTarget) => {
    const cat = e.target.value;
    setCatTarget(!catTarget);
    if (catTarget === false) {
      if (!filter2.includes(cat)) {
        setFilter2([...filter2, cat]);
      } else {
        setFilter2([...filter]);
      }
    } else {
      const newF = filter2.filter((i) => i !== cat);
      setFilter2([...newF]);
    }
  };
  return (
    <Wrapper>
      <Header />
      <Category>
        <span>Filter:</span>
        <Filters>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Entertainment"
              onChange={(e) => handleFilter(e, entChecked, setEntChecked)}
              checked={entChecked}
            />
            Entertainment
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Fitness"
              onChange={(e) => handleFilter(e, fitChecked, setFitChecked)}
              checked={fitChecked}
            />
            Fitness
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Lifestyle"
              onChange={(e) => handleFilter(e, lifeChecked, setLifeChecked)}
              checked={lifeChecked}
            />
            Lifestyle
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Medical"
              onChange={(e) => handleFilter(e, medChecked, setMedChecked)}
              checked={medChecked}
            />
            Medical
          </label>
        </Filters>
      </Category>
      <ItemGridWrapper>
        <ItemGrid filter={filter} />
      </ItemGridWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100%;
`;

const ItemGridWrapper = styled.main`
  padding: 1rem 1.2rem;
`;

const FooterWrapper = styled.footer`
  padding: 1rem 1.2rem;
`;
const Category = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
`;

const Filters = styled.div`
  margin-left: 1rem;
  border: 1px solid white;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;

  @media only screen and (max-width: 568px) {
    width: max-content;
    font-size: 0.8rem;
  }
`;
export default HomePage;
