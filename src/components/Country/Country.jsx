import "./Country.css";

const Country = ({country}) => {

    const handleVisited = () => {
        console.log('btn clicked');
    }

    const {name, flags, population, area} = country || {};
    return (
        <div className="country">
            <p>Name: {name.common}</p>
            <p>Area: {area.area} ({area.area > 30000 ? "Big Country" : "Small Country"})</p>
            <p>Population: {population.population}</p>
            <img src={flags.flags?.png} alt={`Flags of ${name.common}`} />
            <button onClick={handleVisited}>Mark as Visited</button>
        </div>
    );
};

export default Country;