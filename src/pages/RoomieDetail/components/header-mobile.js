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
          <Heading as="h2">Noelle Iom</Heading>
          <BodyText className="text-grey">22 yrs</BodyText>
        </div>
      </header>
    </div>
  );
};

export default HeaderMobile;
