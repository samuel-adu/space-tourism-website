import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="home">
      <div className="container">
        <h1 className="main-heading">
          So, you want to travel to <span>space</span>
        </h1>

        {/* <h1 className="main-heading">
          <span>So, you want to travel to </span>space
        </h1> */}

        <p className="body-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <button className="btn large-btn">
          <Link to="destination">Explore</Link>
        </button>
      </div>
    </main>
  );
}

export default Home;
