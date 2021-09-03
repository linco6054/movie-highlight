import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>{Object.entries(requests).map(([key, { title, url }])=>{
          return(
              
          )
      })}</div>
    </nav>
  );
}

export default Nav;
