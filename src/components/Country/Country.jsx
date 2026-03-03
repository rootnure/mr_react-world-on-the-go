import { useState } from "react";
import "./Country.css";

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    const {name, flags, population, area} = country || {};
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <p>Name: {name.common}</p>
            <p>Area: {area.area} ({area.area > 30000 ? "Big Country" : "Small Country"})</p>
            <p>Population: {population.population}</p>
            <img src={flags.flags?.png} alt={`Flags of ${name.common}`} />
            <button onClick={handleVisited}>{visited ? "Already Visited" : "Mark as Visited"}</button>
            <button onClick={() => handleVisitedFlag(flags.flags?.png)}>Add Visisted Flag</button>
        </div>
    );
};

export default Country;