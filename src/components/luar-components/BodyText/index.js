import React from 'react';
import cx from 'classnames';

const BodyText = ({ as, className, children }) => {
  return <p className={cx('body-text', className)}>{children}</p>;
};

export default BodyText;
