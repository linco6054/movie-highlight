import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div className="">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return <h1 key>{title}</h1>;
        })}
      </div>
    </nav>
  );
}

export default Nav;
