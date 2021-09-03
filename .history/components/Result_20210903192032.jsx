import Thumbnail from "./Thumbnail";

function Result({ results }) {
  console.log(results);
  return (
    <div className="px-5 m">
      {results?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Result;
