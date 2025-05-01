import Banner from "./components/home/banner/Banner";
import Coaching from "./components/home/coaching/Coaching";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-gradient-to-r from-primary-600 to-primary-400">
        <Coaching />
      </div>
    </>
  );
}
