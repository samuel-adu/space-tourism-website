import data from "../data.json";
import React, { useState } from "react";

function Destinations() {
  const destinations = data.destinations;
  const [destination, setDestination] = useState(destinations[0]);

  const destinationTabButtons = destinations.map((destination, index) => {
    return (
      <button
        key={destination.name}
        onClick={() => handleChange(index)}
        className="destination-tab-btn"
      >
        {destination.name}
      </button>
    );
  });

  function handleChange(index) {
    setDestination(destinations[index]);
  }

  const { name, description, travel, distance, images } = destination;

  return (
    <div className="destination">
      <div className="container">
        <h1 className="page-heading">
          <span aria-hidden="true">01</span>Pick your destination
        </h1>

        <section>
          <div className="preview-img">
            <img src={require(`../${images.png}`)} alt={name} />
          </div>

          <div>
            <div className="tab destination-tab">
              {/* <button className="destination-tab-btn active">Moon</button>
              <button className="destination-tab-btn">Mars</button>
              <button className="destination-tab-btn">Europa</button>
              <button className="destination-tab-btn">Titan</button> */}
              {destinationTabButtons}
            </div>

            <h2 className="headline-text destination-name">{name}</h2>
            <p className="body-text">{description}</p>

            <div className="underline"></div>

            <h3 className="page-subheading">Avg. Distance</h3>
            <p className="headline-text destination-info">{distance}</p>
            <h3 className="page-subheading">Est. travel time</h3>
            <p className="headline-text destination-info">{travel}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Destinations;
