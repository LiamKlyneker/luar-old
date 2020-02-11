import React from 'react';
import cx from 'classnames';

import { Button, IconButton, Heading, BodyText } from 'luar-components';
import styles from './styles.module.scss';

const ActionSection = () => {
  return (
    <section
      className={cx(styles['action-section'], 'border-bottom border-bottom--no-desktop')}
    >
      <div className={cx(styles['desktop-title'])}>
        <div>
          <IconButton icon="keyboard_backspace" />
        </div>
        <div>
          <Heading as="h2">Las Vegonias, San Isidro</Heading>
          <BodyText className="text-grey">$ 1200.00</BodyText>
        </div>
      </div>
      <div className={cx(styles['action-section__buttons'])}>
        <Button type="secondary">DISMISS</Button>
        <Button type="primary">SAVE</Button>
      </div>
    </section>
  );
};

export default ActionSection;
