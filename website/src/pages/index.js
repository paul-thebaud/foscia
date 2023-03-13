import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@fontsource/fira-mono';
import '@fontsource/readex-pro';
import HomepageExamples from '@site/src/components/HomepageExamples';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import LogoIconSvg from '../icons/logo-icon.svg';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('bg--primary-gradient', 'hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.hero__logo__wrapper}>
          <div className={styles.hero__logo__bg} />
          <LogoIconSvg className={styles.hero__logo} />
        </div>
        <div className={styles.hero__content}>
          <h1 className={clsx('hero__title', styles.hero__title)}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg margin--sm"
              to="/docs/about"
            >
              About 🔎
            </Link>
            <Link
              className="button button--secondary button--lg margin--sm"
              to="/docs/getting-started"
            >
              Getting started 🚀
            </Link>
            <Link
              className="button button--secondary button--lg margin--sm"
              to="https://stackblitz.com/edit/foscia?file=playground.ts"
            >
              Playground 🛝
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageExamples />
      </main>
    </Layout>
  );
}
