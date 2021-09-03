import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>
        {Object.entries(requests).map(([key, { title, url }]) => {
          return <h1>{title}</h1>;
        })}
      </div>
    </nav>
  );
}

export default Nav;
