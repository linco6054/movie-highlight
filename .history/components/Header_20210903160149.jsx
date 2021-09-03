import Image from "nex"

function Header() {
  return (
    <header className="">
      <h1>This is header</h1>

      {/* lazy loading image tag from next js */}
      <Image />
    </header>
  );
}

export default Header;
