import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Engagera dig',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Vill du engagera dig i sektionen? Kolla in våra <a href="/docs/intro">nämnder</a> och hitta en som passar dig!
      </>
    ),
  },
  {
    title: 'Välmående',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Vi vill att alla ska må bra. Läs mer om hur vi jobbar med <a href="/docs/intro">välmående</a> på sektionen.
      </>
    ),
  },
  {
    title: 'För företag',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Vill du samarbeta med oss? Läs mer om hur vi jobbar med <a href="/docs/intro">företag</a> på sektionen.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            paddingBottom: '75%',
            height: 0
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=iare.nu_pre97odp8btuq3u2a9i6u3fnbc%40group.calendar.google.com&ctz=Europe%2FStockholm&mode=AGENDA"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>



        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
