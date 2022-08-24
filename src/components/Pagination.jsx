import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination({ limit, page, setPage, pageTotal }) {
  return (
    <div className="pagination">
      {Array(pageTotal)
        .fill(null)
        .map((_, id) => {
          return (
            <div key={id} className="pagination-item">
              <span
                onClick={() => {
                  setPage(id + 1);
                }}
                className={`pagination-link ${page === id + 1 ? 'pagination-link-active' : ''}`}>
                {id + 1}
              </span>
            </div>
          );
        })}
    </div>
  );
}
