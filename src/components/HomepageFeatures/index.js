//Exporterar "Kommande evenemang" till index.js under \pages
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axios from 'axios';
import { EventCalendar } from './calendar';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Engagera dig</Translate>,
    img: require('@site/static/img/reception.jpg').default,
    description: (
      <>
        <Translate>Vill du engagera dig i sektionen? Kolla in våra</Translate><a href="/docs/intro"><Translate>nämnder</Translate></a><Translate>och hitta en som passar dig!</Translate>
      </>
    ),
  },
  {
    title: <Translate>Välmående</Translate>,
    img: require('@site/static/img/pride.jpg').default,
    description: (
    
    
    <>
    <Translate>Vi vill att alla ska må bra. Läs mer om hur vi jobbar med</Translate><a href="/docs/intro"><Translate>välmående</Translate></a> <Translate>på sektionen.</Translate>
    </>
      
    ),
  },
  {
    title: <Translate>För företag</Translate>,
    img: require('@site/static/img/dinner.jpg').default,

    description: (
    
    <>
      <Translate>Vill du samarbeta med oss? Läs mer om hur vi jobbar med</Translate>
        <a href="/business"><Translate>företag</Translate></a> <Translate>på sektionen.</Translate>
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
          <Translate>
          Kommande evenemang
          </Translate>
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

