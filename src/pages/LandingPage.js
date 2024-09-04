import { Link } from "react-router-dom";
import "../css/LandingPage.css";
import screenshot from "../images/screenshot.png";
import arrowRightDoubleLine from "../images/arrow-right-double-line.svg";
import Nav from "../components/Nav";


function LandingPage() {
  return (
    <div className="landing-page">
      <Main/>
    </div>
  );
}

function Main() {
  return (
    <main>
      <div className="lines top">
        <div></div>
        <div></div>
      </div>
      <div className="cta">
        <p>Unit conversion.<br/> A React exercise.</p>
        <Link to="/convert">
          <img src={ arrowRightDoubleLine } alt="Double line right arrow" />
          GET STARTED
        </Link>
      </div>
      <div className="lines bottom">
        <div></div>
        <div></div>
      </div>
    </main>
  )
}

export default LandingPage;
