import Thumbnail from "./Thumbnail";

function Result({ results }) {
  console.log(results);
  return (
    <div
      className="px-5 my-10 sm:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
    3xl:flex flex-wrap
    "
    >
      {results?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Result;
