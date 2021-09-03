function Result({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => (
        <Thumbnail />
      ))}
    </div>
  );
}

export default Result;
