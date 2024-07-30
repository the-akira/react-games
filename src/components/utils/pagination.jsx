import React from "react";
import "./pagination.css";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  
  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

  return (
    <nav>
      <ul>
        {pages.map(page => (
          <li 
            key={page} 
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <button 
              onClick={() => onPageChange(page)}
              className="page-link"
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;