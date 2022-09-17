import data from "../data.json";

function Destinations() {
  const destinations = data.destinations;

  // const tabHeading = destinations.map((destination) => {
  //   return (
  //     <li
  //       className="btn tab-heading destination-tab-btn active"
  //       key={destination.name}
  //     >
  //       {destination.name}
  //     </li>
  //   );
  // });

  const { name, description, travel, distance, images } = destinations[0];

  return (
    <div className="destination">
      <div className="container">
        <h3 className="page-heading">
          <span>01</span>Pick your destination
        </h3>

        <section>
          <div className="preview-img">
            <img src={require(`../${images.png}`)} alt={name} />
          </div>

          <div>
            <ul className="tab destination-tab">
              <li className="destination-tab-btn tab-heading active">Moon</li>
              <li className="destination-tab-btn tab-heading">Mars</li>
              <li className="destination-tab-btn tab-heading">Europa</li>
              <li className="destination-tab-btn tab-heading">Titan</li>
            </ul>

            <h2 className="headline-text destination-name">{name}</h2>
            <p className="body-text">{description}</p>

            <div className="underline"></div>

            <p className="page-subheading">Avg. Distance</p>
            <p className="headline-text destination-info">{distance}</p>
            <p className="page-subheading">Est. travel time</p>
            <p className="headline-text destination-info">{travel}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Destinations;
