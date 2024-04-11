import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          
          <Heading as="h1" className="hero__title">
            <Translate id="homepage.title" description="The label for the link to my doc">
              Jaxaxx
            </Translate>
          </Heading>

          <p className="hero__subtitle">
            <Translate id="homepage.subtitle" description="The label for the link to my doc">
              Are You Ready?
            </Translate>
          </p>

          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              <Translate id="homepage.getting.started" description="The label for the link to my doc">
                Getting Started ⏱️
              </Translate>
            </Link>
          </div>

        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
