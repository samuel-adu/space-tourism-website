import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="page__background home-page__background"></div>
      <div className="container">
        <div className="page__content">
          <div className="page__body">
            <h1 className="main-heading">
              So, you want to travel to<span>space</span>
            </h1>

            <p className="body-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="large-btn-div">
            <Link to="destination" className="large-btn">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
