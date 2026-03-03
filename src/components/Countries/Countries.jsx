import React, { use } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = ({countriesPromise}) => {
    const {countries} = use(countriesPromise);
    return (
        <div>
            <h1>In The Countries</h1>
            <p>Countries: {countries.length}</p>
            <div>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;