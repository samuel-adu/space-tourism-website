import data from '../../../data.json';
import React, { useState } from 'react';
import './destination.css';
const destinations = data.destinations;

function Destination() {
  const [destination, setDestination] = useState(destinations[0]);
  const [activeTab, setActiveTab] = useState(0);

  const tabButtons = destinations.map((destination, index) => {
    return (
      <button
        key={destination.name}
        onClick={() => handleClick(index)}
        className={`destination-tab-btn ${activeTab === index ? 'active' : ''}`}
      >
        {destination.name}
      </button>
    );
  });

  function handleClick(index) {
    setDestination(destinations[index]);
    setActiveTab(index);
  }

  const { name, description, travel, distance, images } = destination;

  return (
    <div className="page destination-page">
      <div className="page__background destination-page__background"></div>
      <div className="container">
        <h1 className="page__heading">
          <span aria-hidden="true">01</span>Pick your destination
        </h1>

        <article className="page__content">
          <div className="page__image preview-img">
            <img src={require(`../../../${images.png}`)} alt={name} />
          </div>

          <div className="page__body">
            <div className="tab destination-tab">{tabButtons}</div>

            <h2 className="headline-text destination-name">{name}</h2>
            <p className="body-text">{description}</p>

            <div className="underline"></div>

            <div className="destination-details">
              <div>
                <h3 className="page__subheading">Avg. Distance</h3>
                <p className="headline-text destination-info">{distance}</p>
              </div>

              <div>
                <h3 className="page__subheading">Est. travel time</h3>
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
