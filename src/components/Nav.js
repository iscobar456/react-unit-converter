import conversionTables from "../unitReference.json";
import { Link } from "react-router-dom";

function Nav({ measure = null }) {
  const unitLinks = Object.keys(conversionTables).map(key => {
    return (
      <Link
        to={"/convert/" + key}
        key={key}
        className={"active" ? key === measure : ""}>
          { key }
      </Link>
    );
  });

  return (
    <nav>
      { unitLinks }
    </nav>
  );
}

export default Nav;
