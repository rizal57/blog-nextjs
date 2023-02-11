import RootLayout from '@/components/layouts/RootLayout';
import Posts from '@/components/Posts';
import SectionHeader from '@/components/SectionHeader';
import Head from 'next/head';
import React from 'react';

const index = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <RootLayout>
        <SectionHeader>UI Design</SectionHeader>
        <Posts />
      </RootLayout>
    </>
  );
};

export default index;
