import React from 'react';
import cx from 'classnames';

const IconButton = ({ icon }) => (
  <button className={cx('iconButton')}>
    <i className={cx('material-icons')}>{icon}</i>
  </button>
);

export default IconButton;
