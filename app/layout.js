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
        <div
          className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 opacity-5 bg-[url('../public/assets/images/backgroundnoise.png')] bg-repeat"
          style={{ backgroundSize: "auto" }}
        />

        {/* Blur Overlay */}
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-10 backdrop-blur-[64px]" />
        <div className="relative z-20">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
