import Image from "next/image";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2>{result?.title || }</h2>
      </div>
    </div>
  );
}

export default Thumbnail;
