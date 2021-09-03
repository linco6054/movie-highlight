import Image from "next/image";

function Header() {
  return (
    <header className="">
      <h1>This is header</h1>

      {/* lazy loading image tag from next js */}
      <Image className="" src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  );
}

export default Header;
