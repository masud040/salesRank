import Atr from "@/public/assets/icons/atr.svg";
import BackupTable from "@/public/assets/icons/backup_table.svg";
import Bot1 from "@/public/assets/images/bot1.png";
import Bot2 from "@/public/assets/images/bot2.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="pt-8 md:pt-16 lg:pth[82px] flex flex-col-reverse lg:flex-row justify-between gap-10 ">
      <div className="flex-1">
        <h1 className="font-medium text-[42px] md:text-[60px] lg:text-[80px] font-manrope top-[10px] md:top-[18px] max-w-full lg:max-w-[516px] ">
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
        <div className="flex-start mt-[92px]">
          <div>
            <div className="bg-white p-4 rounded-full shadow-lg">
              <Image
                src={BackupTable}
                alt="Backup Table"
                height={55}
                width={55}
              />
            </div>
          </div>
          <div>
            <Image src={Atr} alt="Atr" height={55} width={55} />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image src={Bot1} alt="Robot" className="w-full object-contain" />
      </div>
    </section>
  );
}
