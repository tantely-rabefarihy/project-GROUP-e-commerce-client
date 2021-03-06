import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Pagination from "react-js-pagination";

const ItemGrid = ({ filter }) => {
  const [items, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [activePage, setCurrentPage] = useState(1);
  // console.log(`filter: ${filter}`);

  useEffect(() => {
    fetch("https://ecommerce-299100.uc.r.appspot.com/allitems", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => setItems([...data.data]))
      .catch((err) => console.log(err));

    fetch("https://ecommerce-299100.uc.r.appspot.com/companies", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setSellers([...data.data]);
        // console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const todosPerPage = 15;
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const filteredList = items.filter(
    (e) =>
      e.category === filter[0] ||
      e.category === filter[1] ||
      e.category === filter[2] ||
      e.category === filter[3]
  );
  const currentTodos = filteredList.slice(indexOfFirstTodo, indexOfLastTodo);

  // console.log(currentTodos);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  // console.log({ sellers });

  return (
    <Wrapper>
      <GridContainer>
        {items &&
          sellers &&
          currentTodos.map((item) => {
            const company = sellers.find(
              (seller) => seller._id === item.companyId
            );
            return (
              <StoreItem
                key={item.id}
                item={{ ...item }}
                company={{ ...company }}
              />
            );
          })}
      </GridContainer>
      <PaginationContainer>
        <Pagination
          className="pagination"
          activePage={activePage}
          itemsCountPerPage={16}
          totalItemsCount={filteredList.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          prevPageText={<FaAngleLeft />}
          nextPageText={<FaAngleRight />}
          firstPageText={<FaAngleDoubleLeft />}
          lastPageText={<FaAngleDoubleRight />}
        />
      </PaginationContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;
const PaginationContainer = styled.footer`
  display: flex;
  flex-direction: row;

  ul {
    width: fit-content;
    margin: 0 auto;
    padding: 1rem 0;
  }

  .pagination a {
    text-decoration: none;
    font-weight: 600;
    color: white;
  }

  .pagination li {
    color: white;
    float: left;
    padding: 0.5rem;
    list-style-type: none;
  }

  .pagination a.undefined {
    color: #f8be06;
  }

  .pagination li.active {
    border-bottom: 4px solid #f8be06;
    background-color: rgb(213, 213, 195, 0.2);
    border-radius: 5px;
  }

  .pagination li:hover:not(.active) {
    background-color: rgb(213, 213, 195, 0.1);
    border-radius: 5px;
  }
`;

export default ItemGrid;
