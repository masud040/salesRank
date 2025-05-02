import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <div className="container py-12 space-y-12">
      {/* header */}
      <div className="flex-between items-end gap-5">
        <div className="w-3/4 font-manrope space-y-[6px]">
          <h1 className="text-[36px] lg:text-[48px] text-secondary-700">
            Our Courses
          </h1>
          <p className="h5-normal text-[#59595A] text-justify">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="bg-primary-500 font-manrope text-[14px] md:text-[18px] font-medium text-white rounded-[8px] px-6 py-[10px] md:py-[18px]">
          View All
        </button>
      </div>
      {/* courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}
