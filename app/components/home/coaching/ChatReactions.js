import Clipboard from "@/public/assets/icons/clipboard.svg";
import Dislike from "@/public/assets/icons/dislike.svg";
import Like from "@/public/assets/icons/like.svg";
import Refresh from "@/public/assets/icons/refresh.svg";
import Sound from "@/public/assets/icons/sound.svg";
import Image from "next/image";
export default function ChatReactions() {
  return (
    <div className="bg-white rounded-[57px] border border-[#4E4E4E1A]/10 flex-column gap-10 p-4 md:p-6">
      <div className="size-6">
        <Image src={Refresh} className="size-6" alt="refresh" />
      </div>
      <div className="h-6 w-6">
        <Image src={Like} className="size-6" alt="like" />
      </div>
      <div className="h-6 w-6">
        <Image src={Dislike} className="size-6" alt="dislike" />
      </div>
      <div className="h-6 w-6">
        <Image src={Clipboard} className="size-6" alt="clipboard" />
      </div>
      <div className="h-6 w-6">
        <Image src={Sound} className="size-6" alt="sound" />
      </div>
    </div>
  );
}
