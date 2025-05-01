"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ name, href }) {
  const pathName = usePathname();
  ``;
  return (
    <li>
      <Link
        href={href}
        className={`h5-semibold font-plus_jakarta_sans ${
          pathName === href && "text-blue-700"
        } transition-colors duration-300`}
      >
        {name}
      </Link>
    </li>
  );
}
