import React from 'react';
import cx from 'classnames';

import { Heading, Label, Ul, Li, BodyText, Link, Icon } from 'luar-components';
import styles from './styles.module.scss';

const AboutPropertySection = () => {
  return (
    <>
      <div className={cx(styles['main-info-main-section'], 'border-bottom')}>
        <Heading as="h3">About the property</Heading>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>LOCATION</Label>
          MapComponent Here
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>SERVICES</Label>
          <Ul>
            <Li>Internet</Li>
            <Li>Balcony</Li>
            <Li>Gym</Li>
            <Li>Elevator</Li>
          </Ul>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>PEOPLE LIVING IN THE HOUSE</Label>
          <BodyText>3 People</BodyText>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>PETS</Label>
          <BodyText>Yep, a dogo</BodyText>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>HOUSE RULES</Label>
          <Ul onlyVertical>
            <Li>It's not allowed smoke inside</Li>
            <Li>No drugs or narcotics</Li>
          </Ul>
        </div>
      </div>
      <div className={cx(styles['main-info-link-section'], 'border-bottom')}>
        <Link>
          RECOMMENDED BY 2 EX ROOMIES
          <Icon icon="arrow_forward" />
        </Link>
      </div>
    </>
  );
};

export default AboutPropertySection;
