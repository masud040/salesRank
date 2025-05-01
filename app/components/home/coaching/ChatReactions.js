import { BiDislike, BiLike } from "react-icons/bi";
import { FiClipboard } from "react-icons/fi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { LuRefreshCcw } from "react-icons/lu";
export default function ChatReactions() {
  return (
    <div className="bg-white rounded-[57px] border border-[#4E4E4E1A]/10 flex-column gap-10 p-4 md:p-6">
      <button>
        <LuRefreshCcw size={24} />
      </button>
      <button>
        <BiLike size={24} />
      </button>
      <button>
        <BiDislike size={24} />
      </button>
      <button>
        <FiClipboard size={24} />
      </button>
      <button>
        <HiOutlineSpeakerWave size={24} />
      </button>
    </div>
  );
}
