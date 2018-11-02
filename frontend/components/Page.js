import React from 'react';
import Head from 'next/head';

const Page = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sickfits</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
