import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axios from 'axios';
import { EventCalendar } from './calendar';


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
        <h2>
          Kommande evenemang
        </h2>
          <EventCalendar />






        <div className="row">

          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}


        </div>
      </div>
    </section>
  );
}

