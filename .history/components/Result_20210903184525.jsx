function Result({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} {...result} />
      ))}
    </div>
  );
}

export default Result;
