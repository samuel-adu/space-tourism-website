import crew from "../assets/crew/image-douglas-hurley.png";

function Crew() {
  return (
    <div className="crew">
      <div className="container">
        <h1 className="page-heading">
          <span aria-hidden="true">02</span>Meet Your Crew
        </h1>

        <div className="preview-img">
          <img src={crew} alt="douglas" />
        </div>

        <div className="underline"></div>

        <div className="tab">
          <button className="crew-tab-btn tab-btn active"></button>
          <button className="crew-tab-btn tab-btn"></button>
          <button className="crew-tab-btn tab-btn"></button>
        </div>

        <div>
          <h2 className="crew-role">Commander</h2>
          <h3 className="crew-name">Douglas Hurley</h3>
          <p className="body-text">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
