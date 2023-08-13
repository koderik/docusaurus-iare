import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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

export { Event, formatDate };
