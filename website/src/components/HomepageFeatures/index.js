import clsx from 'clsx';
import React from 'react';
import TypeSafeSvg from '../../icons/alert-decagram-outline.svg';
import IntiutiveSvg from '../../icons/lightbulb-on-outline.svg';
import DepsSvg from '../../icons/swap-horizontal.svg';
import ModularSvg from '../../icons/toy-brick-outline.svg';
import styles from './styles.module.css';

const FeatureList = [
  {
    Icon: IntiutiveSvg,
    title: 'Intuitive',
    description: (
      <>
        Foscia provides an intuitive API to declare your models and
        interact with your data source.
      </>
    ),
  },
  {
    Icon: DepsSvg,
    title: 'REST/JSON:API ready',
    description: (
      <>
        REST or JSON:API backend are already covered and you may
        setup your own implementations for any other data sources.
      </>
    ),
  },
  {
    Icon: ModularSvg,
    title: 'Modular',
    description: (
      <>
        Foscia is composed of many independent functions, making it easy to
        tree-shake to reduce your bundle size.
      </>
    ),
  },
  {
    Icon: TypeSafeSvg,
    title: 'Type safe',
    description: (
      <>
        API provides you a safe typing experience, even with edge cases
        such as dot relations used for eager loading.
      </>
    ),
  },
];

function Feature({ Icon, title, description }) {
  return (
    <div className={clsx('col col--3')}>
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
