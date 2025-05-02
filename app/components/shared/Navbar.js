"use client";

import Logo from "@/public/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Navlink from "./Navlink";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Consulting", href: "/consulting" },
    { name: "AI Coach", href: "/ai-coach" },
  ];

  return (
    <nav className="container z-50 fixed top-0 left-0 right-0 py-[18px] md:py-[30px] flex-between items-center bg-white drop-shadow-2xl">
      <div className="flex-start gap-6 lg:gap-14">
        <div>
          <Image src={Logo} alt="logo" width={238} height={48} />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex justify-start items-center gap-6 lg:gap-14">
          {navLinks.map((link) => (
            <Navlink key={link.href} name={link.name} href={link.href} />
          ))}
        </ul>
      </div>

      {/* Desktop Button */}
      <button className="border px-[16px] h-9 md:h-[48px] rounded-full border-black font-bold h5-normal md:text-[16px] font-manrope hidden lg:block">
        Get Started
      </button>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="lg:hidden">
        {menuOpen ? <RxCross1 size={24} /> : <RiMenu3Fill size={24} />}
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col px-4 pb-4  space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium hover:text-blue-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="w-full border px-4 py-2 rounded-full border-black font-bold font-manrope">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
