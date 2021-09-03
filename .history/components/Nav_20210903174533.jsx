import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div className="">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return <2 key={key}>{title}</2>;
        })}
      </div>
    </nav>
  );
}

export default Nav;
