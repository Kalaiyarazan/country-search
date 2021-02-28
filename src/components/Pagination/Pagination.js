import React from 'react';

import './Pagination.scss';

const Pagination = ({ countriesPerPage, totalCountries, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginations = pageNumbers.map((pageNumber) => {
    return (
      <div key={pageNumber}>
        <button
          onClick={() => setCurrentPage(pageNumber)}
          className='pagination-item'
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
