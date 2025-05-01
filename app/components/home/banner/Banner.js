import Atr from "@/public/assets/icons/atr.svg";
import BackupTable from "@/public/assets/icons/backup_table.svg";
import Bot1 from "@/public/assets/images/bot1.png";
import Bot2 from "@/public/assets/images/bot2.png";
import Image from "next/image";
import Count from "./Count";
export default function Banner() {
  return (
    <section className="container py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10">
      {/* banner left section */}
      <div className="col-span-5 order-2 lg:order-1 mt-16 lg:mt-0">
        <h1 className="font-medium text-[42px] md:text-[60px] lg:text-[80px] font-manrope max-w-full lg:max-w-[516px] ">
          Your AI-Powered Sales Coach
        </h1>

        <div className="flex-between items-center gap-8 mt-[26px]">
          <Image
            src={Bot2}
            className="h-[100px] md:h-[160px] lg:h-[198px]"
            objectFit="contain"
            alt="Bot2"
          />
          <p className="font-medium text-[16px] md:text-[20px]">
            Get real-time coaching, script suggestions, and deal-closing
            strategies powered by advanced AI technology.
          </p>
        </div>
        <div className="flex-between mt-[82px] gap-6">
          <div className="flex-start gap-6 w-[288px]">
            <div className="h-[60px] w-[70px] md:h-[86px] md:w-[89px] rounded-[15.57px] shadow-custom bg-white flex-center">
              <Image
                src={BackupTable}
                alt="Backup Table"
                className="size-[35px] md:size-[55px]"
              />
            </div>
            <div className="text-[20px] md:text-[36px] font-semibold font-manrope">
              <Count number={2000} /> +
              <p className="text-secondary-400 text-[15px] md:text-[18px] font-medium">
                Your protection
              </p>
            </div>
          </div>
          <div className="flex-start gap-6 w-[288px]">
            <div className="h-[60px] w-[70px] md:h-[86px] md:w-[89px] rounded-[15.57px] shadow-custom bg-white flex-center">
              <Image
                src={Atr}
                alt="Atr"
                className="size-[35px] md:size-[55px]"
              />
            </div>
            <div className="text-[20px] md:text-[36px] font-semibold font-manrope">
              <Count number={7001} /> +
              <p className="text-secondary-400 text-[15px] md:text-[18px] font-medium">
                Provide tailored
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* banner right section */}
      <div className="relative col-span-7 flex items-start justify-end order-1 lg:order-2">
        <Image
          src={Bot1}
          alt="Robot"
          className="w-4/5 lg:w-[583px] h-[628px] object-contain"
        />
        <div className="bg-[#FFFFFF] shadow-custom rounded-[27px]  absolute bottom-0 z-50 left-0 w-[200px] md:w-[300px] lg:w-[467px] px-6 py-8 lg:py-12 space-y-4 lg:space-y-6">
          <div className="text-[24px] md:text-[36px] lg:text-[50px] font-semibold text-primary-600 font-manrope flex-between items-center">
            <h2>721+</h2>
            <h2>1000+</h2>
          </div>
          <p className="font-semibold text-[18px] md:text-[27.98px] font-manrope">
            Growth is our priority.
          </p>
          <p className="text-[15px] md:text-[17px] font-medium font-poppins">
            As a full-service business agency, we specialize in helping
            companies of all sizes optimize their operations
          </p>
        </div>
      </div>
    </section>
  );
}
