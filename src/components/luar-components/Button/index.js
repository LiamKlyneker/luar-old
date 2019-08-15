import React from 'react';
import cx from 'classnames';

const Button = ({ children, type }) => {
  return (
    <button
      className={
        cx(
          'button',
          { 'button--primary': type === 'primary' },
          { 'button--secondary': type === 'secondary' },
        )
      }
    >
      {children}
    </button>
  );
};

export default Button;
