//Exporterar "Kommande evenemang" till index.js under \pages
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axios from 'axios';
import { EventCalendar } from './calendar';

const FeatureList = [
  {
    title: 'Engagera dig',
    img: require('@site/static/img/reception.jpg').default,
    description: (
      <>
        Vill du engagera dig i sektionen? Kolla in våra <a href="/docs/intro">nämnder</a> och hitta en som passar dig!
      </>
    ),
  },
  {
    title: 'Välmående',
    img: require('@site/static/img/pride.jpg').default,
    description: (
      <>
        Vi vill att alla ska må bra. Läs mer om hur vi jobbar med <a href="/docs/intro">välmående</a> på sektionen.
      </>
    ),
  },
  {
    title: 'För företag',
    img: require('@site/static/img/dinner.jpg').default,

    description: (
      <>
        Vill du samarbeta med oss? Läs mer om hur vi jobbar med <a href="/business">företag</a> på sektionen.
      </>
    ),
  },
];


function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img role="img" src={img}/>
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

