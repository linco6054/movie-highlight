import { BadgeCheckIcon,HomeIcon,CollectionIcon,LightningBoltIcon,SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title="Home" Icon={""} />
      </div>

      {/* lazy loading image tag from next js */}
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
