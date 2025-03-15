import { useState } from 'react';
import data from '../../../data.json';
import './technology.css';

function Technology() {
  const technologies = data.technology;
  const [technology, setTechnology] = useState(technologies[0]);
  const [activeTechnologyTab, setactiveTechnologyTab] = useState(0);

  const tabButton = technologies.map((technology, index) => {
    return (
      <button
        key={technology.name}
        onClick={() => handleClick(index)}
        className={`tab-btn technology-tab-btn ${
          activeTechnologyTab === index ? 'active' : ''
        }`}
      >
        {index + 1}
      </button>
    );
  });

  function handleClick(index) {
    setTechnology(technologies[index]);
    setactiveTechnologyTab(index);
  }

  const { name, images, description } = technology;

  return (
    <div className="page technology-page">
      <div className="background bg-technology"></div>
      <div className="container">
        <h1 className="page-heading">
          <span>03</span>Space launch 101
        </h1>

        <div className="page-content">
          <div className="preview-img">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcset={require(`../../../${images.portrait}`)}
                sizes=""
              />
              <img src={require(`../../../${images.landscape}`)} alt="" />
            </picture>
          </div>

          <div className="tab technology-tab">{tabButton}</div>

          <div className="page__body">
            <h2 className="page-subheading">The Terminology...</h2>
            <h3 className="technology-name">{name}</h3>
            <p className="body-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
