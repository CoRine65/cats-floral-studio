import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <h1 className="hero-title">Cat's Florals</h1>

        <nav className="hero-nav" aria-label="Primary navigation">
          <Link to="/showcase">Showcase</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </section>
    </main>
  );
}

export default Home;
