'use client'
import Head from 'next/head';
import PaginatedUsers from '../components/PaginatedUsers';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Pagination App</title>
        <meta name="description" content="A simple pagination app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center py-10">
        <PaginatedUsers />
      </main>
    </div>
  );
};

export default Home;
