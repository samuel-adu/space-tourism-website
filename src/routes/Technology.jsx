import technology from "../assets/technology/image-launch-vehicle-landscape.jpg";

function Technology() {
  return (
    <div className="technology">
      <div className="container">
        <h2 className="page-heading">
          <span>03</span>Space launch 101
        </h2>

        <div className="preview-img">
          <img src={technology} alt="" />
        </div>

        <div className="tab technology-tab">
          <div className="tab-btn technology-tab-btn active">1</div>
          <div className="tab-btn technology-tab-btn">2</div>
          <div className="tab-btn technology-tab-btn">3</div>
        </div>

        <div>
          <p className="page-subheading">The Terminology</p>
          <p className="technology-name">Launch Vehicle</p>
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
