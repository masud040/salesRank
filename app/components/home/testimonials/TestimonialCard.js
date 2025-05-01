import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
export default function TestimonialCard({ clientName, activeIndex }) {
  console.log(activeIndex);
  const swiper = useSwiper();

  return (
    <div className="font-manrope space-y-10 lg:space-y-[74px] px-16">
      <p className="font-semibold text-[24px] md:text-[36px] text-[#010205]">
        “They thoroughly analyze our industry and target audience, allowing them
        to develop customized campaigns that effectively reach and engage our
        customers. Their creative ideas and cutting-edge techniques have helped
        us stay ahead of the competition.”
      </p>
      <div className="flex justify-between items-center">
        <div className="flex-start gap-6">
          <div className="rounded-full bg-[#D9D9D9] p-5 md:p-8" />
          <div className="space-y-4">
            <h6 className="text-[20px] font-bold text-[#010205]">
              {clientName}
            </h6>
            <p className="font-medium text-[#878C91]">CEO of Basecamp Corp</p>
          </div>
        </div>
        <div className="flex-start gap-6 md:gap-[38px]">
          <button
            className={`border border-[#00245F] text-[#00245F] rounded-[70px] px-4 md:px-8 py-2 md:py-4 hover:bg-primary-600 hover:text-white transition-all duration-300 ${
              activeIndex === swiper.slides.length - 1 &&
              "bg-primary-600 text-white"
            }`}
            onClick={() => swiper.slidePrev()}
          >
            <FaArrowLeft />
          </button>
          <div className="flex-start font-manrope font-semibold text-[18px] md:text-[20px]">
            <p className="text-[#00245F]">0{activeIndex + 1}</p>
            <p className="text-[#01020566]/40">/0{swiper.slides.length}</p>
          </div>
          <button
            className={`border border-[#00245F] text-[#00245F] rounded-[70px] px-4 md:px-8 py-2 md:py-4 hover:bg-primary-600 hover:text-white transition-all duration-300 ${
              activeIndex === 0 && "bg-primary-600 text-white"
            }`}
            onClick={() => swiper.slideNext()}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
