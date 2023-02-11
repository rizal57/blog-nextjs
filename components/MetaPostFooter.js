import React from 'react';

const MetaPostFooter = ({category}) => {
  return (
    <div className='flex gap-3 items-center mt-4'>
      <a href='#' className='py-1 px-4 rounded-full border border-gray-200 text-xs'>{category}</a>
    </div>
  );
};

export default MetaPostFooter;
