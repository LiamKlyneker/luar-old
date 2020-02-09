import React from 'react';
import cx from 'classnames';

const Ul = ({ children }) => {
  return <li className={cx('li')}>{children}</li>;
};

export default Ul;
