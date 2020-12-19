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
  const [entCheched, setEntChecked] = useState(false);
  const [fitCheched, setFitChecked] = useState(false);
  const [medCheched, setMedChecked] = useState(false);
  const [lifeCheched, setLifeChecked] = useState(false);
  const [filter2, setFilter2] = useState([]);

  React.useEffect(() => {
    const checkedArray = [entCheched, fitCheched, lifeCheched, medCheched];

    checkedArray.every((box) => box === false)
      ? setFilter([...defaultFilterState])
      : setFilter([...filter2]);
  }, [entCheched, fitCheched, medCheched, lifeCheched]);

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
        Category:
        <label>
          <input
            type="checkbox"
            name="category"
            value="Entertainment"
            onChange={(e) => handleFilter(e, entCheched, setEntChecked)}
            checked={entCheched}
          />
          Entertainment
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Fitness"
            onChange={(e) => handleFilter(e, fitCheched, setFitChecked)}
            checked={fitCheched}
          />
          Fitness
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Lifestyle"
            onChange={(e) => handleFilter(e, lifeCheched, setLifeChecked)}
            checked={lifeCheched}
          />
          Lifestyle
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Medical"
            onChange={(e) => handleFilter(e, medCheched, setMedChecked)}
            checked={medCheched}
          />
          Medical
        </label>
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
  display: grid;
  grid-template-areas:
    "header header header header header header "
    "sidebar  main main main main main"
    "footer footer footer footer footer footer";
  grid-template-columns: 300px auto;
  height: 100vh;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 20px;
`;

const FooterWrapper = styled.footer`
  grid-area: footer;
  padding: 16px 20px;
`;
const Category = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
`;
export default HomePage;
