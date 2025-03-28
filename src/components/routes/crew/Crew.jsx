import { useState } from 'react';
import data from '../../../data.json';
import './crew.css';
const crews = data.crew;

function Crew() {
  const [crew, setCrew] = useState(crews[0]);
  const [activeCrewTab, setActiveCrewTab] = useState(0);

  const tabButton = crews.map((crew, index) => {
    return (
      <button
        key={crew.name}
        onClick={() => handleClick(index)}
        className={`crew-tab-btn ${activeCrewTab === index ? 'active' : ''}`}
      ></button>
    );
  });

  function handleClick(index) {
    setCrew(crews[index]);
    setActiveCrewTab(index);
  }

  const { name, images, role, bio } = crew;

  return (
    <div className="page crew-page">
      <div className="page__background crew-page__background"></div>
      <div className="container">
        <h1 className="page__heading">
          <span aria-hidden="true">02</span>Meet Your Crew
        </h1>

        <div className="page__content">
          <div className="page__image">
            <div className="preview-img crew-img">
              <img
                src={require(`../../../${images.png}`)}
                alt={`${crew.name}`}
              />
            </div>

            <div className="underline"></div>
          </div>

          <div className="page__body">
            <div className="tab crew-tab">{tabButton}</div>

            <div className="crew-profile">
              <h2 className="crew-role">{role}</h2>
              <h3 className="crew-name">{name}</h3>
              <p className="body-text crew-description">{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
