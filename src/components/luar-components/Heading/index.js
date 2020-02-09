import React from 'react';
import cx from 'classnames';

const Heading = ({ as, children }) => {
  switch (as) {
    case 'h2':
      return <h2 className={cx('h2')}>{children}</h2>;
    case 'h3':
      return (
        <h3 className={cx('h3')}>
          <span>{children}</span>
        </h3>
      );
    default:
      return children;
  }
};

export default Heading;
