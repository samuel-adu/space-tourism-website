import { useState } from "react";
import data from "../data.json";
const technologies = data.technology;

function Technology() {
  const [technology, setTechnology] = useState(technologies[0]);

  const tabButton = technologies.map((technology, index) => {
    return (
      <button
        key={technology.name}
        onClick={() => handleClick(index)}
        className="tab-btn technology-tab-btn"
      >
        {index + 1}
      </button>
    );
  });

  function handleClick(index) {
    setTechnology(technologies[index]);
  }

  const { name, images, description } = technology;

  return (
    <div className="technology">
      <div className="container">
        <h1 className="page-heading">
          <span>03</span>Space launch 101
        </h1>

        <div className="preview-img">
          <img src={require(`../${images.landscape}`)} alt="" />
        </div>

        <div className="tab technology-tab">{tabButton}</div>

        <div>
          <h2 className="page-subheading">The Terminology</h2>
          <h3 className="technology-name">{name}</h3>
          <p className="body-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
