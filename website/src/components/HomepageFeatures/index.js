import clsx from 'clsx';
import React from 'react';
import AlarmLightOutlineSvg from '../../icons/alarm-light-outline.svg';
import SwapHorizontalSvg from '../../icons/swap-horizontal.svg';
import ToyBrickOutlineSvg from '../../icons/toy-brick-outline.svg';
import styles from './styles.module.css';

const FeatureList = [
  {
    Icon: SwapHorizontalSvg,
    title: 'Intuitive, REST/JSON:API ready',
    description: (
      <>
        Foscia provides an intuitive API and comes with a set of tools to
        quickly integrate with a REST or JSON:API backend.
        <br />
        You may also create your own implementations to fit your needs
        (Soap, SQL, IndexedDB, etc.).
      </>
    ),
  },
  {
    Icon: ToyBrickOutlineSvg,
    title: 'Modular and fully tree-shakable',
    description: (
      <>
        With functional programming, Foscia can be used in many ways
        and unused functions can be tree-shaken from your production build
        automatically.
      </>
    ),
  },
  {
    Icon: AlarmLightOutlineSvg,
    title: 'Type safe',
    description: (
      <>
        Foscia was build at start with TypeScript to propose you
        a secure typing experience with consistent generic types and inference.
      </>
    ),
  },
];

function Feature({ Icon, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={`${styles.featureSvgWrapper} bg--primary margin-bottom--lg`}>
          <Icon className={styles.featureSvg} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
