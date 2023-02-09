import React, { useState } from 'react';
import CardPost from './CardPost';
import mockPost from '../utils/posts.json';

const Posts = () => {
  const [posts, setPosts] = useState(mockPost);

  return (
    <>
      {posts.length ? (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 py-4 lg:py-8'>
          {posts.map((post, i) => (
            <CardPost key={i} {...post} />
          ))}
        </div>
      ) : (
        <div className='min-h-screen py-20'>
          <h1 className='text-3xl lg:text-6xl font-semibold text-center mb-4 lg:mb-8'>No result 😢</h1>
          <p className='text-center text-base w-full md:w-6/12 mx-auto text-gray-300'>We couldn`t find any posts with the keyword `ksjflksjfkls`. Please try with another keyword.</p>
        </div>
      )}
    </>
  );
};

export default Posts;
