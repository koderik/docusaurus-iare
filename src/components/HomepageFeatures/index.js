import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axios from 'axios';


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

function formatDate(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');  // months are from 0 to 11
  const day = String(date.getUTCDate()).padStart(2, '0');

  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}


// New Event component for Google Calendar events
function Event({ title, description, start, end }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.eventCard)}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Start:</strong> {formatDate(start)}</p>
        <p><strong>End:</strong> {formatDate(end)}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [events, setEvents] = useState([]);


  useEffect(() => {
    const apiKey = process.env.CALENDAR_KEY;
    const calendarId = process.env.CALENDAR_ID;
  
    const currentTimeISO = new Date().toISOString();
    const beginningOfYearISO = new Date(new Date().getFullYear(), 0, 1).toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${beginningOfYearISO}`;

    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = String(currentDate.getUTCMonth() + 1).padStart(2, '0');

    axios.get(url)
      .then(response => {
        const eventData = response.data.items.map(item => ({
          title: item.summary,
          description: item.description,
          start: item.start && (item.start.dateTime || item.start.date),
          end: item.end && (item.end.dateTime || item.end.date),
        }));

        // Filter events to include only the current month and the next
        const month_begin = new Date(currentYear, currentMonth, 1).getTime();
        const month_end = new Date(currentYear, currentMonth + 2, 1).getTime();


        

        const upcomingEvents = eventData.filter(event => {
          const eventTimestamp = new Date(event.start).getTime();
          // return if event is in the current month or the next
          console.log(month_begin, eventTimestamp, month_end);
          return eventTimestamp >= month_begin && eventTimestamp < month_end;
        });

        setEvents(upcomingEvents);
      })

      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <h2>
          Kommande evenemang
        </h2>
        <div className="row">
        
          {events.map((event, idx) => (
            <Event key={idx} {...event} />
          ))}
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

