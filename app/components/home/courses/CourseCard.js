import CourseThumnail from "@/public/assets/images/course_thumbnail.png";
import Image from "next/image";

export default function CourseCard() {
  return (
    <div className="size-full rounded-[15px] bg-secondary-100 p-[25px] lg:p-[50px] border border-[#F1F1F3] group font-manrope">
      {/* course thumbnail */}
      <div className="relative mb-4 h-56 w-full overflow-hidden rounded-[8px]">
        <Image
          src={CourseThumnail}
          alt="Course one"
          fill
          objectFit="cover" // Ensure the image covers the container
          className="transition-all duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-[8px] bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
      </div>
      {/* course content */}
      <div className="space-y-[30px]">
        <div className="flex-between items-center">
          <div className="flex-start gap-2.5">
            <div className="py-1.5 md:py-2.5 px-3 md:px-4 h5-medium md:h3-medium bg-white rounded-[8px] border border-[#F1F1F3] text-[#4C4C4D]">
              4 Weeks
            </div>
            <div className="py-1.5 md:py-2.5 px-3 md:px-4 h5-medium md:h3-medium bg-white rounded-[8px] border border-[#F1F1F3] text-[#4C4C4D]">
              Beginner
            </div>
          </div>
          <p className="text-[16px] md:text-[20px] font-medium text-[#262626]">
            By John Smith
          </p>
        </div>
        <h2 className="font-semibold text-[22px] md:text-[24px] text-[#262626]">
          Web Design Fundamentals
        </h2>
        <p className="text-[16px] md:text-[18px] text-justify text-[#4C4C4D]">
          Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create visually
          appealing and user-friendly websites.
        </p>
        <button className="basic-btn w-full">Get it Now</button>
      </div>
    </div>
  );
}
