import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
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
        <h2>{result?.title || result?.original_name}</h2>
        <p>{result.media_type && `${result?.media_type}`}
        
        {result.release} </p>
      </div>
    </div>
  );
}

export default Thumbnail;
