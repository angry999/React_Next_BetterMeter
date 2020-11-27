import React from 'react';

function Logo(props) {
  return (
    <img
      alt="Logo"
      src="/static/images/test/logo.svg"
      {...props}
    />
  );
}

export default Logo;
