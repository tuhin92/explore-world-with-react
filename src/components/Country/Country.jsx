import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} sqr Km.</p>
            <p><small>Code: {cca3}</small></p>
            <button>Mark Visited</button>
            <br /><br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <br />
            {visited ? 'I already visited this country.' : 'I want to visit this country'}
        </div>
    );
};

export default Country;