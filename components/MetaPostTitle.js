import React from 'react';

const MetaPostTitle = (props) => {
  const {authorName, date, title, center, className = 'text-2xl mb-3'} = props;
  return (
    <>
      <h5 className={`text-sm mb-3 text-slate-400`}>{authorName} - {date}</h5>
      <h1 className={`${className} ${center && 'text-center'} capitalize font-bold`}>{title}</h1>
    </>
  );
};

export default MetaPostTitle;
