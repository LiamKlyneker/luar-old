import React from 'react';
import cx from 'classnames';

import { IconButton, Heading, BodyText } from 'luar-components';
import styles from './styles.module.scss';

const HeaderMobile = () => {
  return (
    <div className="container">
      <header className={cx(styles['header-mobile'])}>
        <div>
          <IconButton icon="keyboard_backspace" />
        </div>
        <div>
          <Heading as="h2">Las Vegonias, San Isidro</Heading>
          <BodyText className="text-grey">$ 1200.00</BodyText>
        </div>
      </header>
    </div>
  );
};

export default HeaderMobile;
