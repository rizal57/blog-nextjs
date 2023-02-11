import React from 'react';
import MetaPostBody from './MetaPostBody';
import MetaPostFooter from './MetaPostFooter';
import MetaPostTitle from './MetaPostTitle';

const InfoPost = ({...post}) => {
  return (
    <div className="mt-4">
      <MetaPostTitle
        authorName={post.authorName}
        date={post.date}
        title={post.title}
      />
      <MetaPostBody
        shortDescription={post.shortDescription}
      />
      <MetaPostFooter
        category={post.category}
      />
    </div>
  );
};

export default InfoPost;
