import Banner from "./components/home/banner/Banner";
import Coaching from "./components/home/coaching/Coaching";
import Courses from "./components/home/courses/Courses";
import FAQ from "./components/home/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-gradient-to-r from-primary-600 to-primary-400">
        <Coaching />
      </div>
      <Courses />
      <FAQ />
    </>
  );
}
