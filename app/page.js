import Banner from "./components/home/banner/Banner";
import Coaching from "./components/home/coaching/Coaching";
import Courses from "./components/home/courses/Courses";
import FAQ from "./components/home/FAQ/FAQ";
import ReadyToHire from "./components/home/hireSection/ReadyToHire";
import TestimonialContainer from "./components/home/testimonials/TestimonialContainer";
import Footer from "./components/shared/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-gradient-to-r from-primary-600 to-primary-400">
        <Coaching />
      </div>
      <Courses />
      <FAQ />
      <TestimonialContainer />

      <div className="relative py-12 px-[24px] md:px-[40px] w-full h-full">
        {/* Background Noise Layer */}
        <div
          className="absolute inset-0 z-0 opacity-[12%] bg-[url('/assets/images/backgroundnoise.png')] bg-repeat"
          style={{ backgroundSize: "auto" }}
        />

        {/* Blur Overlay */}
        <div className="absolute inset-0 z-10 backdrop-blur-[64px]" />
        <div className="relative z-20 max-w-[1440px] w-full mx-auto">
          <ReadyToHire />
          <Footer />
        </div>
      </div>
    </>
  );
}
