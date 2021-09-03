import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div className="flex">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              className="cursor-pointer transition duration-100 hover:text-white active:text-red-500 transform hover:scale-125"
              key={key}
            >
              {title}
            </h2>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
