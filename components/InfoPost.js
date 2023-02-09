import React from 'react';

const InfoPost = ({...post}) => {
  return (
    <div className="mt-4">
      <h5 className="text-sm text-slate-400 mb-3">{post.authorName} - {post.date}</h5>
      <h1 className="text-2xl font-bold capitalize mb-3">{post.title}</h1>
      <p className="text-slate-300 leading-relaxed">
        {post.shortDescription.slice(0, 100)}...
      </p>
      <div className='flex gap-3 items-center mt-4'>
        <a href='#' className='py-1 px-4 rounded-full border border-gray-200 text-xs'>{post.category}</a>
      </div>
    </div>
  );
};

export default InfoPost;
