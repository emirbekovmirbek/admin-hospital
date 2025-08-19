import cls from './pagination.module.scss';
import { memo } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  limit: number;
}
const Pagination = ({ currentPage, totalPages, onPageChange, limit }: PaginationProps) => {
  const generatePages = () => {
    const pages = [];
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);
    if (end === totalPages) start = Math.max(1, end - 4);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };
  const total = totalPages * limit;
  const start = (currentPage - 1) * limit + 1;
  const end = limit * currentPage;
  return (
    <div className={cls.template}>
      <span>Всего: {total}</span>
      <div className={cls.pagination}>
        <div>
          <button
            className={cls.prev}
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            {'<'}
          </button>
          {generatePages().map((page, index) => (
            <button
              className={currentPage === page ? cls.active : undefined}
              key={index}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={cls.next}
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            {'>'}
          </button>
        </div>
        <p>
          Показано с {start} по {end} из {total}
        </p>
      </div>
    </div>
  );
};

export default memo(Pagination);
