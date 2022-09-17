import crew from "../assets/crew/image-douglas-hurley.png";

function Crew() {
  return (
    <div className="crew">
      <div className="container">
        <h2 className="page-heading">
          <span>02</span>Meet Your Crew
        </h2>

        <div className="preview-img">
          <img src={crew} alt="douglas" />
        </div>

        <div className="underline"></div>

        <div className="tab">
          <div className="circle crew-tab-btn tab-btn active"></div>
          <div className="circle crew-tab-btn tab-btn"></div>
          <div className="circle crew-tab-btn tab-btn"></div>
        </div>

        <div>
          <p className="crew-role">Commander</p>
          <p className="crew-name">Douglas Hurley</p>
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
