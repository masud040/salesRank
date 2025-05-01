import CheckCircle from "@/public/assets/icons/check_circle.svg";
import Level from "@/public/assets/icons/level.svg";
import Image from "next/image";
export default function Analysis() {
  return (
    <div className="bg-secondary-200 p-[30px] rounded -[20px] w-full space-y-5">
      <h1 className="text-[24px] md:text-[32px] font-manrope font-bold text-secondary-600">
        Real-time Analysis
      </h1>
      {/* level progress bar */}
      <div className="bg-white rounded-lg p-4 border space-y-3 border-[#E7E7E7]">
        <div className="flex-start gap-1">
          <div className="h-[19px] w-[19px]">
            <Image src={CheckCircle} className="size-[19px]" alt="Check" />
          </div>
          <p className="h3-bold font-manrope text-[#171D25]">
            Confidence Level
          </p>
        </div>
        <div className="flex-center gap-2">
          <div className="flex-1 bg-[#DFDFDF] rounded-full h-2.5">
            <div
              className="bg-[#06B217] h-2.5 rounded-full"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p className="text-right text-xs text-secondary-500">60%</p>
        </div>
      </div>
      {/* level status */}
      <div className="bg-white rounded-lg p-4 border space-y-3 border-[#E7E7E7]">
        <div className="flex-start gap-1">
          <div className="h-[24px] w-[24px]">
            <Image src={Level} className="size-[24px]" alt="Level" />
          </div>
          <p className="h3-bold font-manrope text-[#171D25]">
            Confidence Level
          </p>
        </div>
        <p className="h5-normal text-secondary-300">
          85% improvement in objection handling
        </p>
      </div>
    </div>
  );
}
