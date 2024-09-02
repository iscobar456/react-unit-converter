import { Link } from "react-router-dom";
import "../css/LandingPage.css";
import screenshot from "../images/screenshot.png";
import arrowRightDoubleLine from "../images/arrow-right-double-line.svg";
import Nav from "../components/Nav";


function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <Nav/>
      </header>
      <Main/>
    </div>
  );
}

function Main() {
  return (
    <main>
      <div className="cta">
        <p>Convert between units.<br/>Simple.<br/>Don't get your hopes up.</p>
        <Link to="/convert">
          <img src={ arrowRightDoubleLine } alt="Double line right arrow" />
          GET STARTED
        </Link>
      </div>
      <figure>
        <img src={ screenshot } alt="A screenshot of the unit converter" />
        <figcaption> A screenshot of the unit converter </figcaption>
      </figure>
    </main>
  )
}

export default LandingPage;
