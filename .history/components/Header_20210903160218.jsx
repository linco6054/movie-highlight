import Image from "next/images";

function Header() {
  return (
    <header className="">
      <h1>This is header</h1>

      {/* lazy loading image tag from next js */}
      <Image src="https://links" />
    </header>
  );
}

export default Header;
