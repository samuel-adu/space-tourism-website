import technology from "../assets/technology/image-launch-vehicle-landscape.jpg";

function Technology() {
  return (
    <div className="technology">
      <div className="container">
        <h1 className="page-heading">
          <span>03</span>Space launch 101
        </h1>

        <div className="preview-img">
          <img src={technology} alt="" />
        </div>

        <div className="tab technology-tab">
          <button className="tab-btn technology-tab-btn active">1</button>
          <button className="tab-btn technology-tab-btn">2</button>
          <button className="tab-btn technology-tab-btn">3</button>
        </div>

        <div>
          <h2 className="page-subheading">The Terminology</h2>
          <h3 className="technology-name">Launch Vehicle</h3>
          <p className="body-text">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
