import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div className="">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2 className="cursor-pointer tra" key={key}>
              {title}
            </h2>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
