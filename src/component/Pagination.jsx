import React from "react";
import styles from "../styles/pagination.module.css";

export default function Pagination({ currentPage, totalPages, paging }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      paging(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paging(currentPage + 1);
    }
  };

  return (
    <div className={styles.paginationCard}>
      <button
        className={styles.flechas}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      <span >
        {currentPage} de {totalPages}
      </span>
      <button
        className={styles.flechas}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}
