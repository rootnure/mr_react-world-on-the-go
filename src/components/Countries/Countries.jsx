import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisistedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log(country);
        setVisitedCountries([...visitedCountries, country]);
    }

    const handleVisitedFlag = (flag) => {
        console.log('flag clicked', flag);
        setVisistedFlags([...visitedFlags, flag]);
    }

    const {countries} = use(countriesPromise);
    return (
        <div>
            <h1>In The Countries</h1>
            <p>Countries: {countries.length}</p>
            <p>Visited Countries: {visitedCountries.length}</p>
            <p>Visited Flags: {visitedFlags.length}</p>
            <div className="grid grid-cols-6">
                {
                    visitedFlags.map((flag, index) => <img key={index} style={{width: '200px'}} src={flag} />)
                }
            </div>
            <ol>
            {
                visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }
            </ol>
            <div className='grid grid-cols-3 gap-2'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        visitedCountries={visitedCountries}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;