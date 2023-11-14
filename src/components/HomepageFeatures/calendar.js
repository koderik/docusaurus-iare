//Verkar inte användas, från vad jag förstår verkar det vara en modul för att hålla koll på datum, och importerar från
//axios, som typ är nån request modul å clsx som är nån excel modul?
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axios from 'axios';

function formatDate(isoString) {
    if (!isoString) return '';
    const date = new Date(isoString);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');  // months are from 0 to 11
    const day = String(date.getUTCDate()).padStart(2, '0');
// add 2h to hours to get swedish time
    const hours = String(date.getUTCHours() + 2).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function EventComponent({ title, description, start, end }) {
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

function EventCalendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {

        const apiKey = process.env.CALENDAR_KEY;
        const calendarId = process.env.CALENDAR_ID;
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
                    // add 2h to convert to stockholm time
                    start: item.start && (item.start.dateTime || item.start.date),
                    end: item.end && (item.end.dateTime || item.end.date),
                }));
                // beginning of this month
                const month_begin = new Date(currentYear, currentMonth - 1, 1).getTime();
                const month_end = new Date(currentYear, currentMonth, 1).getTime();
                


                const upcomingEvents = eventData.filter(event => {
                    const eventTimestamp = new Date(event.start).getTime();
                    return eventTimestamp >= month_begin && eventTimestamp < month_end;
                });

                setEvents(upcomingEvents);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    return (
  
            <div className="row">
            
            {events.map((event, idx) => (
                <EventComponent key={idx} {...event} />
            ))}
                </div>

    );
}

export { EventCalendar, formatDate };
