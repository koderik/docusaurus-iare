//Modul som står för förstasidan, importerar från homepagefeatures, som står för "kommande event" delen.
//Inehåller också HomepageHeader modulen, borde nog egentligen vara separat.
//importerar också Hero, vilket står för att loggan ändrar färg när man öppnar sidan
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Hero from '../components/HomepageFeatures/hero'; // Import the Hero component

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 800px)');
    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
    };

    // Set the initial value
    setIsDesktop(mediaQuery.matches);

    // Listen for media query changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `url(img/kth_background.jpeg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: isDesktop ? '50vh' : '30vh', // Use different heights based on screen width
      }}
    >

      <div className="container">
        <div style={{
          // set to vertical center
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          // if desktop, set to 100% width, else 80% width
          scale: isDesktop ? '100%' : '60%',

        }}>
          <Hero />
        </div>


        <h1
          className="hero__title"
          style={{
            fontSize: isDesktop ? '5rem' : '2rem', // Use different font sizes based on screen width
            // add shadow to text
            // add brown 3d stroke to bottom left of text
            // make it drop font 
            textShadow: '2px 2px #7d5a3e',



          }}
        >
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle" style={{
          fontSize: isDesktop ? '2rem' : '1.2rem', // Use different font sizes based on screen width
          textShadow: '2px 2px #7d5a3e',
          // add text stroke

        }}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sektionen för Industriell Ekonomi på KTH"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
