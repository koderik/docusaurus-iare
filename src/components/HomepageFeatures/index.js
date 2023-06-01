import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get engaged',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Browse through our committees and find one that suits you. Find out more by contacting the committee or by attending one of our events.
      </>
    ),
  },
  {
    title: 'Mental health',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We care about your mental health. If you need someone to talk to, we are here for you. Contact us at <a href="mailto:#">sektionsstyrelsen@iare.se</a>
      </>
    ),
  },
  {
    title: 'Business',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We love to work with companies. If you are interested in working with us, please contact our Head of Corporate Relations at <a href="mailto:#">corporate@iare.se</a> and read more at our business page.
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
