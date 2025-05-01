import {
  Lato,
  Manrope,
  Plus_Jakarta_Sans,
  Poppins,
  Questrial,
} from "next/font/google";
import Navbar from "./components/shared/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
const questrail = Questrial({
  variable: "--font-questrail",
  subsets: ["latin"],
  weight: ["400"],
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "SalesRank.AI",
  description: "Get the best sales rank for your product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${lato.variable}  ${questrail.variable} ${plus_jakarta_sans.variable} ${poppins.variable} antialiased max-w-[1920px] mx-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
