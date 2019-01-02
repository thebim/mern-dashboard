import React from 'react';

const logoHref = '';
const Logo = (props) => {
  return (
    <img
      src={props.img || logoHref}
      height={props.height}
      width={props.width}
      alt={props.alt}
    />
  );
};

export default Logo;