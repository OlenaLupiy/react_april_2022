import React, {useEffect, useState} from 'react';
import Film from "./Film";

const Films = () => {
    const [films, setFilms] = useState({});

    useEffect(()=>{
        fetch('https://swapi.dev/api/films/')
            .then(value => value.json())
            .then(value => setFilms(value))
    }, []);
    const {results} = films;
    return (
        <div>
            {
              results && results.map(film=> <Film key={film.episode_id} film={film}/>)
            }
        </div>
    );
};

export default Films;