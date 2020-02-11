import React from 'react';
import cx from 'classnames';

const Ul = ({ onlyVertical, children }) => {
  return <ul className={cx('ul', { 'ul--vertical': onlyVertical })}>{children}</ul>;
};

Ul.defaultProps = {
  onlyVertical: false,
};

export default Ul;
