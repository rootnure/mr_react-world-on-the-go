import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log(country);
    }

    const {countries} = use(countriesPromise);
    return (
        <div>
            <h1>In The Countries</h1>
            <p>Countries: {countries.length}</p>
            <div className='grid grid-cols-3 gap-2'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        visitedCountries={visitedCountries}
                        handleVisitedCountries={handleVisitedCountries}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;