import React from 'react';
import cx from 'classnames';

import { Heading, Label, Ul, Li, BodyText } from 'luar-components';
import styles from './styles.module.scss';

const AboutRoomSection = () => {
  return (
    <>
      <div className={cx(styles['main-info-main-section'], 'border-bottom')}>
        <Heading as="h3">About the room</Heading>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>CHARACTERISTICS</Label>
          <Ul>
            <Li>Individual</Li>
            <Li>9 m2</Li>
            <Li>Furnished</Li>
            <Li>Own Bathroom</Li>
          </Ul>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>AVAILABLE FROM</Label>
          <BodyText>October 22</BodyText>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>MINIMUN STAY</Label>
          <BodyText>6 Months</BodyText>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>ABOUT THE ROOMIE THAT I'M LOOKING FOR</Label>
          <Ul>
            <Li>Professional</Li>
            <Li>Only Girls</Li>
            <Li>20-23 years old</Li>
          </Ul>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>DESCRIPTION</Label>
          <BodyText>
            Few would argue that, despite the advancements of feminism over the past three
            decades, women still face a double standard when it comes to their behavior.
            While men’s borderline-inappropriate behavior is often laughed off as.
          </BodyText>
        </div>
      </div>
    </>
  );
};

export default AboutRoomSection;
