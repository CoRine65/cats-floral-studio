import { Link } from "react-router-dom";
import "../styles/Home.css";
import BackMiddle from "../assets/florals/back-middle.png";
import BackSides from "../assets/florals/back-sides.png";
import FrontMiddle from "../assets/florals/front-middle.png";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <h1 className="hero-title">Cat's Florals</h1>

          <nav className="hero-nav" aria-label="Primary navigation">
            <Link to="/showcase">Showcase</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="floral-arrangement" aria-hidden="true">
          <img className="floral floral-back-left" src={BackSides} alt="" />{" "}
          {/*back*/}
          <img
            className="floral floral-back-middle"
            src={BackMiddle}
            alt=""
          />{" "}
          {/*front*/}
          <img
            className="floral floral-back-right"
            src={BackSides}
            alt=""
          />{" "}
          {/*back*/}
          <img
            className="floral floral-front-middle"
            src={FrontMiddle}
            alt=""
          />{" "}
          {/*front front*/}
        </div>
      </section>
    </main>
  );
}

export default Home;
