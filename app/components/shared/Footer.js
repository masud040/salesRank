import Logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import FooterLink from "./FooterLink";
export default function Footer() {
  return (
    <div className="py-12 flex flex-col lg:flex-row justify-between items-start font-manrope gap-10">
      <div className="flex-1 w-full space-y-[30px]">
        <Image src={Logo} alt="Logo" width={100} height={50} />
        <p className="text-[#335386] text-[14px]">
          SalesRank.AI offers a comprehensive suite of AI-powered solutions to
          help you find expert sales professionals who can elevate every aspect
          of your business. From performance rankings and skill verification to
          industry benchmarking and real-time analytics, we provide the insights
          and tools to optimize your sales strategy and drive growth.
        </p>
        <div className="flex-start text-[#335386] gap-4 md:gap-6">
          <div className="p-2 bg-white rounded-full">
            <FaFacebookF className="size-5" />
          </div>
          <div className="p-2 bg-white rounded-full">
            <FaTwitter className="size-5" />
          </div>
          <div className="p-2 bg-white rounded-full">
            <FaLinkedin className="size-5" />
          </div>
          <div className="p-2 bg-white rounded-full">
            <FaInstagram className="size-5" />
          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 w-full space-y-6">
        <div className="space-y-5">
          <h6 className="h3-semibold text-[18px] text-[#001C4A]">Navigation</h6>
          <ul className="space-y-3">
            <FooterLink name="Service" />
            <FooterLink name="Agency" />
            <FooterLink name="Case Study" />
            <FooterLink name="Resource" />
            <FooterLink name="Contact" />
          </ul>
        </div>
        <div className="space-y-5">
          <h6 className="h3-semibold text-[18px] text-[#001C4A]">Licence</h6>
          <ul className="space-y-3">
            <FooterLink name="Privacy Policy" />
            <FooterLink name="Copyright" />
            <FooterLink name="Email Address" />
          </ul>
        </div>
        <div className="space-y-5">
          <h6 className="h3-semibold text-[18px] text-[#001C4A]">Contact</h6>
          <ul className="space-y-3">
            <li>
              <Link
                href="tel:+88012334455"
                className="flex-start gap-2 h5-normal text-[#335386]"
              >
                <FaPhone className="text-[#002868]" /> (406) 555-0120
              </Link>
            </li>
            <li>
              <Link
                href="mailto:Hey@boostim.com"
                className="flex-start gap-2 h5-normal text-[#335386]"
              >
                <IoMdMail className="text-[#002868]" /> Hey@boostim.com
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex-start gap-2 h5-normal text-[#335386]"
              >
                <FaLocationDot className="text-[#002868]" /> 2972 Westheimer Rd.
                Santa Ana, Illinois 85486
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
