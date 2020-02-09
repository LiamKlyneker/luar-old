import React from 'react';
import cx from 'classnames';

const Ul = ({ children }) => {
  return <ul className={cx('ul')}>{children}</ul>;
};

export default Ul;
