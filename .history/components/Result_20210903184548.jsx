import Thumbnail from "./Thumbnail";

function Result({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id}  />
      ))}
    </div>
  );
}

export default Result;
