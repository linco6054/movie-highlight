import Image from "next/image";

function Header() {
  return (
    <header className="">
      <h1>This is header</h1>

      {/* lazy loading image tag from next js */}
      <Image src="https://links.papareact.com/ua6" with={200} height={100} />
    </header>
  );
}

export default Header;
