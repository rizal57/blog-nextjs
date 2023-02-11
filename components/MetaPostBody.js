import React from 'react';

const MetaPostBody = ({shortDescription}) => {
  return (
    <>
      <p className="text-slate-300 leading-relaxed">
        {shortDescription.slice(0, 100)}...
      </p>
    </>
  );
};

export default MetaPostBody;
