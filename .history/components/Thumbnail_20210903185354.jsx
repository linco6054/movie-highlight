import Image from "next/image";

function Thumbnail({ result }) {
  return (
    <div>
      <Image layout="responsive" width={1080} height={1080} />
    </div>
  );
}

export default Thumbnail;
