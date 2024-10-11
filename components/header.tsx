import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header id="main-header">
      <Link href="/">
        <Image priority src={logo} alt="Mobile phone with posts feed on it" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
