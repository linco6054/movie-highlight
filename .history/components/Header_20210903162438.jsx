import Image from "next/image";

function Header() {
  return (
    <header className="">
     <div>
       
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
