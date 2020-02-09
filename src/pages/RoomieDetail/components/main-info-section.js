import React from 'react';
import cx from 'classnames';

import {
  Label,
  BodyText,
  Heading,
  ListFlexWrap,
  Tag,
  Ul,
  Li,
  Link,
  Icon,
} from 'luar-components';
import styles from './styles.module.scss';
import { Currency } from '../../../components/luar-components';

const MainInfoSection = () => {
  return (
    <>
      <div className={cx(styles['main-info-main-section'], 'border-bottom')}>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>ABOUT ME</Label>
          <BodyText>
            Few would argue that, despite the advancements of feminism over the past three
            decades, women still face a double standard when it comes to their behavior.
            While men’s borderline-inappropriate behavior is often laughed off as “boys
            will be boys,” women face higher.
          </BodyText>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>INTERESTS & HOBBIES</Label>
          <ListFlexWrap>
            <Tag>Muse</Tag>
            <Tag>Child & Netflix</Tag>
            <Tag>Play Guitar</Tag>
            <Tag>Death Stranding</Tag>
          </ListFlexWrap>
        </div>
      </div>
      <div className={cx(styles['main-info-link-section'], 'border-bottom')}>
        <Link>
          RECOMMENDED BY 2 EX ROOMIES
          <Icon icon="arrow_forward" />
        </Link>
      </div>
      <div className={cx(styles['main-info-main-section'], 'border-bottom')}>
        <Heading as="h3">What I look for</Heading>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>BUDGET</Label>
          <BodyText>
            <Currency value={1200} />
          </BodyText>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>PLACES</Label>
          <BodyText>Miraflores, San Isidro, Jesus María</BodyText>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>CHARACTERISTICS</Label>
          <Ul>
            <Li>Pet Friendly</Li>
            <Li>Smoker</Li>
            <Li>Musician</Li>
          </Ul>
        </div>
        <div className={cx(styles['main-info-simple-section'])}>
          <Label>LOOKING FOR</Label>
          <Ul>
            <Li>Home</Li>
            <Li>Short Stay</Li>
            <Li>Just Girls</Li>
          </Ul>
        </div>
      </div>
    </>
  );
};

export default MainInfoSection;
