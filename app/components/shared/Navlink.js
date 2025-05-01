"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ name, href }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <li>
      <Link href={href}>{name}</Link>
    </li>
  );
}
