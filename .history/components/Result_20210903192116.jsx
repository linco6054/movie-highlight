import Thumbnail from "./Thumbnail";

function Result({ results }) {
  console.log(results);
  return (
    <div className="px-5 my-10 sm:grid  md:grid-col">
      {results?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Result;
