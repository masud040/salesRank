import Logo from "@/public/assets/icons/logo.svg";
import Image from "next/image";
import Navlink from "./Navlink";
export default function Navbar() {
  return (
    <nav className="max-w-[1440px] mx-auto w-full py-[30px] px-[40px] flex-between">
      <ul className="flex-start gap-[74px]">
        <li>
          <Image src={Logo} alt="logo" width={238} height={48} />
        </li>

        <Navlink name="Home" href="/" />
        <Navlink name="About" href="/about" />
        <Navlink name="Pricing " href="/pricing" />
        <Navlink name="Consulting" href="/consulting" />
        <Navlink name="AI Coach" href="/ai-coach" />
      </ul>
      <button>Get Started</button>
    </nav>
  );
}
