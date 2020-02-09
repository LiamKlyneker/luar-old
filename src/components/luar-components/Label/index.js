import React from 'react';
import cx from 'classnames';

const Label = ({ children, className }) => {
  return <label className={cx('label', className)}>{children}</label>;
};

export default Label;
