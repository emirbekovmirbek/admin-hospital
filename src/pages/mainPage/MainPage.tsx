import Pagination from 'components/pagination/Pagination.tsx';
import { useState } from 'react';
import { Condition } from 'components/condition/Condition.tsx';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Condition amount={'+7'}/>
      <Pagination currentPage={currentPage} onPageChange={onPageChange} totalPages={12} limit={10} />
    </>
  );
};

export default MainPage;
