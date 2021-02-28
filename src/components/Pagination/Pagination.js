import React, { useState } from 'react';

import './Pagination.scss';

const Pagination = ({ countriesPerPage, totalCountries, setCurrentPage }) => {
  const [selectedPage, setSelectedPage] = useState();
  const pageNumbers = [];

  const onPageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber);
  };

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginations = pageNumbers.map((pageNumber) => {
    return (
      <div key={pageNumber}>
        <button
          onClick={() => onPageClick(pageNumber)}
          className={`pagination-item ${
            selectedPage === pageNumber ? 'active' : null
          }`}
        >
          {pageNumber}
        </button>
      </div>
    );
  });

  return (
    <div className='pagination-container'>
      <div className='pagination'>{paginations}</div>
    </div>
  );
};

export default Pagination;
