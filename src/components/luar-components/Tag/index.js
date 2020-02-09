import React from 'react';
import cx from 'classnames';

const Tag = ({ children }) => {
  return <p className={cx('tag')}>{children}</p>;
};

export default Tag;
