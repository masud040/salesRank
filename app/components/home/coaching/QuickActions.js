import Message from "@/public/assets/icons/message.svg";
import Srcipt from "@/public/assets/icons/script.svg";
import Image from "next/image";
export default function QuickActions() {
  return (
    <div className="bg-secondary-200 p-[30px] rounded -[20px] w-full space-y-5">
      <h1 className="text-[24px] md:text-[32px] font-manrope font-bold text-secondary-600">
        Quick Actions
      </h1>
      <div className="flex-between items-center gap-5">
        <div className="bg-white rounded-lg p-4 border border-[#E7E7E7] space-y-2 w-full">
          <Image src={Srcipt} alt="Script" className="size-8" />
          <p className="h5-semibold text-[#171D25]">Generate Script</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-[#E7E7E7] space-y-2 w-full">
          <Image src={Message} alt="Message" className="size-8" />
          <p className="h5-semibold text-[#171D25]">Practice Pitch</p>
        </div>
      </div>
    </div>
  );
}
