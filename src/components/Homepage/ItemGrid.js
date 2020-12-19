import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";

import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Pagination from "react-js-pagination";

import { useDispatch } from "react-redux";
import { addItem } from "../../actions";

const ItemGrid = ({ filter }) => {
  const [items, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [activePage, setCurrentPage] = useState(1);
  console.log(`filter: ${filter}`);

  useEffect(() => {
    fetch("/allitems")
      .then((res) => res.json())
      .then((data) => setItems([...data.data]))
      .catch((err) => console.log(err));

    fetch("/companies")
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
  console.log({ sellers });

  return (
    <Wrapper>
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
      <PaginationContainer>
        <Pagination
          className="pagination"
          activePage={activePage}
          itemsCountPerPage={15}
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 40px;
  margin-right: 20px;
  grid-template-areas:
    "main main main main main"
    "main main main main main"
    "main main main main main"
    " . footer . . . ";
`;

const PaginationContainer = styled.footer`
  grid-area: footer;
  display: grid;
  align-self: end;

  .pagination {
    display: flex;
    justify-self: center;
  }

  .pagiantion ul {
  }

  .pagination a {
    text-decoration: none;
    font-weight: 600;
    color: white;
  }

  .pagination li {
    color: white;
    float: left;
    padding: 8px 16px;
    list-style-type: none;
  }

  .pagination a.undefined {
    color: red;
  }

  .pagination li.active {
    border-bottom: 4px solid red;
    background-color: rgb(213, 213, 195, 0.2);
    border-radius: 5px;
  }

  .pagination li:hover:not(.active) {
    background-color: rgb(213, 213, 195, 0.1);
    border-radius: 5px;
  }
`;

export default ItemGrid;
