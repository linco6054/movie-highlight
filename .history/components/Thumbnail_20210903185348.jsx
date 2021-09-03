import Image from "next/image";

function Thumbnail({ result }) {
  return (
    <div>
      <Image layout="responsive" width={1080} hei />
    </div>
  );
}

export default Thumbnail;
