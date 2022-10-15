import data from "../../../data.json";
import React, { useState } from "react";
import "./destination.css";
const destinations = data.destinations;

function Destination() {
  const [destination, setDestination] = useState(destinations[0]);

  const tabButton = destinations.map((destination, index) => {
    return (
      <button
        key={destination.name}
        onClick={() => handleClick(index)}
        className="destination-tab-btn"
      >
        {destination.name}
      </button>
    );
  });

  function handleClick(index) {
    setDestination(destinations[index]);
  }

  const { name, description, travel, distance, images } = destination;

  return (
    <div className="destination">
      <div className="background bg-destination"></div>
      <div className="container">
        <h1 className="page-heading">
          <span aria-hidden="true">01</span>Pick your destination
        </h1>

        <article>
          <div className="preview-img">
            <img src={require(`../../../${images.png}`)} alt={name} />
          </div>

          <div>
            <div className="tab destination-tab">{tabButton}</div>

            <h2 className="headline-text destination-name">{name}</h2>
            <p className="body-text">{description}</p>

            <div className="underline"></div>

            <div>
              <div>
                <h3 className="page-subheading">Avg. Distance</h3>
                <p className="headline-text destination-info">{distance}</p>
              </div>

              <div>
                <h3 className="page-subheading">Est. travel time</h3>
                <p className="headline-text destination-info">{travel}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Destination;
