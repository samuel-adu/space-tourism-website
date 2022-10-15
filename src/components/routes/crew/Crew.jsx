import { useState } from "react";
import data from "../../../data.json";
import "./crew.css";
const crews = data.crew;

function Crew() {
  const [crew, setCrew] = useState(crews[0]);

  const tabButton = crews.map((crew, index) => {
    return (
      <button
        key={crew.name}
        onClick={() => handleClick(index)}
        className="crew-tab-btn tab-btn"
      ></button>
    );
  });

  function handleClick(index) {
    setCrew(crews[index]);
  }

  const { name, images, role, bio } = crew;

  return (
    <div className="crew">
      <div className="background bg-crew"></div>
      <div className="container">
        <h1 className="page-heading">
          <span aria-hidden="true">02</span>Meet Your Crew
        </h1>

        <div className="preview-img">
          <img src={require(`../../../${images.png}`)} alt="douglas" />
        </div>

        <div className="underline"></div>

        <div className="tab">{tabButton}</div>

        <div>
          <h2 className="crew-role">{role}</h2>
          <h3 className="crew-name">{name}</h3>
          <p className="body-text">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
