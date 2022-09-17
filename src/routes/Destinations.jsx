import data from "../data.json";

function Destinations() {
  const destinations = data.destinations;

  const tabHeading = destinations.map((destination) => {
    return (
      <li className="btn tab-heading active" key={destination.name}>
        {destination.name}
      </li>
    );
  });

  const { name, description, travel, distance, images } = destinations[0];

  return (
    <div className="destination">
      <div className="container">
        <h3 className="page-heading">
          <span>01</span>Pick your destination
        </h3>

        <section>
          <img
            className="section-img"
            src={require(`../${images.png}`)}
            alt={name}
          />

          <ul className="tab">{tabHeading}</ul>

          <h2 className="headline-text destination-name">{name}</h2>
          <p className="body-text">{description}</p>
          <p className="page-subheading">Avg. Distance</p>
          <p className="headline-text destination-info">{distance}</p>
          <p className="page-subheading">Est. travel time</p>
          <p className="headline-text destination-info">{travel}</p>
        </section>
      </div>
    </div>
  );
}

export default Destinations;
