import { useState, useEffect } from 'react';

const useFetchUsers = (page: number) => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      //https://give-me-users-forever.vercel.app/api/users/1/next
      const response = await fetch(`https://give-me-users-forever.vercel.app/api/users/${page}/next`);
    //   console.log('response ===', response.json())
      const data = await response.json();
      console.log('data ===', data)
      setUsers(data.users);
      setLoading(false);
    };

    fetchUsers();
  }, [page]);

  return { users, loading };
};

export default useFetchUsers;
