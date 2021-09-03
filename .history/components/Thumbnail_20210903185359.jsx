import Image from "next/image";

function Thumbnail({ result }) {
  return (
    <div>
      <Image layout="responsive" width={1920} height={1080} />
    </div>
  );
}

export default Thumbnail;
