import React from 'react';
import cx from 'classnames';

const Link = ({ children, href }) => {
  return (
    <a href={href || '#'} className={cx('link')}>
      {children}
    </a>
  );
};

export default Link;
