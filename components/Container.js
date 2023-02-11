import React from 'react';

const Container = (props) => {
  const {children, className} = props;

  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
};

export default Container;
