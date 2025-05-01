import Link from "next/link";

export default function FooterLink({ name, href }) {
  return (
    <li>
      <Link href={href ?? "#"} className="h5-normal text-[#335386]">
        {name}
      </Link>
    </li>
  );
}
