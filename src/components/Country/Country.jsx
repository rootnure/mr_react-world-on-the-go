import "./Country.css";

const Country = ({country}) => {
    const {name, flags, population} = country || {};
    return (
        <div className="country">
            <p>Name: {name.common}</p>
            <p>Population: {population.population}</p>
            <img src={flags.flags?.png} alt={`Flags of ${name.common}`} />
        </div>
    );
};

export default Country;