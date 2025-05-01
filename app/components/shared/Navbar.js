import Logo from "@/public/assets/icons/logo.svg";
import Image from "next/image";
import Navlink from "./Navlink";
export default function Navbar() {
  return (
    <nav className="container py-[30px] flex-between items-center">
      <ul className="flex-start gap-6 md:gap-14 lg:gap-[74px]">
        <li className="hidden lg:block">
          <Image src={Logo} alt="logo" width={238} height={48} />
        </li>

        <Navlink name="Home" href="/" />
        <Navlink name="About" href="/about" />
        <Navlink name="Pricing " href="/pricing" />
        <Navlink name="Consulting" href="/consulting" />
        <Navlink name="AI Coach" href="/ai-coach" />
      </ul>
      <button className="border px-[16px] h-9 md:h-[48px] rounded-full border-black font-bold text-[14px] md:text-[16px] font-manrope hidden lg:block">
        Get Started
      </button>
    </nav>
  );
}
