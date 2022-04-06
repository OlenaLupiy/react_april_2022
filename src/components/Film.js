import React from 'react';

const Film = ({film}) => {
    const {producer, release_date, episode_id, opening_crawl} = film;
    return (
        <div>
            <p>{episode_id}</p>
            <h2>{producer}</h2>
            <div>{release_date} {opening_crawl}</div>
        </div>
    );
};

export default Film;