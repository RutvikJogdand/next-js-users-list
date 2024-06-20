import React, { useState } from 'react';
import useFetchUsers from '../hooks/useFetchers';
import UsersTable from './UsersTable';

const PaginatedUsers: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 10;

  // Calculating the actual page parameter for the API
  const pageParameter = currentPage * (usersPerPage - 1);

  const { users, loading } = useFetchUsers(pageParameter);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <UsersTable users={users} loading={loading} />
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200 hover:bg-gray-400"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedUsers;
