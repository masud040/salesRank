import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <div className="container py-12 space-y-12">
      {/* header */}
      <div className="flex-between items-end">
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
        <button className="basic-btn">View All</button>
      </div>
      {/* courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}
