import requests from "../utils/requests";

function Nav() {
  return <nav>
      <div>
          {Object.entries(requests).map(([key,value]))}
      </div>
  </nav>
  ;
}

export default Nav;
