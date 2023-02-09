import Image from 'next/image';
import React from 'react';

const InfoPost = (props) => {
  const {
    imgUrl,
    author,
    postedAt,
    title,
    sortDescription,
    category
  } = props;
  return (
    <>
      <div className='w-full rounded-xl h-[600px] overflow-hidden relative'>
          <Image src={imgUrl} className={'w-full object-cover'} alt="Main Blog" />
          <div className='absolute bottom-2 left-2 right-2 bg-gray-800/60 p-4 rounded-xl'>
            <span className='text-sm text-gray-400'>{author} - {postedAt}</span>
            <h1 className='font-bold text-2xl capitalize'>{title}</h1>
            <p className='text-base text-gray-300 leading-relaxed'>{sortDescription}</p>
            <div className='flex gap-3 items-center mt-4'>
              <a href='#' className='py-1 px-4 rounded-full border border-gray-200 text-xs'>{category}</a>
            </div>
          </div>
        </div>
    </>
  );
};

export default InfoPost;