import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div style={{marginLeft:"35%",marginBottom:"10px",padding:"10px"}}>
      <button onClick={() => handlePageChange(currentPage - 1)}>Previous  </button>
      <span>  Page {currentPage} of {totalPages}  </span>
      <button onClick={() => handlePageChange(currentPage + 1)}> Next</button>
    </div>
  );
};

export default Pagination;
