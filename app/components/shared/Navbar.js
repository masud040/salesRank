import Logo from "@/public/assets/icons/logo.svg";
import Image from "next/image";
import Navlink from "./Navlink";
export default function Navbar() {
  return (
    <nav className="max-w-[1440px] mx-auto w-full py-[30px] px-[40px] flex-between">
      <ul className="flex-start gap-8 md:gap-14 lg:gap-[74px]">
        <li className="hidden lg:block">
          <Image src={Logo} alt="logo" width={238} height={48} />
        </li>

        <Navlink name="Home" href="/" />
        <Navlink name="About" href="/about" />
        <Navlink name="Pricing " href="/pricing" />
        <Navlink name="Consulting" href="/consulting" />
        <Navlink name="AI Coach" href="/ai-coach" />
      </ul>
      <button className="border px-[16px] h-9 md:h-[48px] rounded-full border-black font-bold text-[14px] md:text-[16px] font-manrope">
        Get Started
      </button>
    </nav>
  );
}
