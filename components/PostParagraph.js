import React from 'react';

const PostParagraph = ({children}) => {
  return (
    <>
      <p className='text-gray-300 leading-relaxed mb-3'>
        {children}
      </p>
    </>
  );
};

export default PostParagraph;
