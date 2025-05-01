"use client";
import ArrowUp from "@/public/assets/icons/ArrowUp.svg";
import Image from "next/image";
import { useState } from "react";

export default function ChatSection() {
  const [suggestions] = useState([
    {
      id: 1,
      text: "How do I handle objections?",
    },
    {
      id: 2,
      text: "Give me a cold email template",
    },
    {
      id: 3,
      text: "Closing techniques",
    },
    {
      id: 4,
      text: "Negotiation tips",
    },
  ]);
  return (
    <div className="bg-secondary-200 rounded-[12px] border border-[#CDCDCD] flex-col">
      <div className="bg-white px-4 md:px-8  py-4 rounded-t-[12px]">
        <p className="h3-bold text-[#1B1B1B] font-manrope">AI Sales Coach</p>
      </div>
      {/* chats */}
      <div className="px-4 md:px-8 py-6 flex-1 min-h-[337px]">
        <div className="flex items-start gap-4 md:gap-6">
          <div className="rounded-full bg-[#D9D9D9] p-4 md:p-5" />
          <div className="bg-white px-6 py-2 rounded-[8px]">
            <p className="h5-normal md:h3-normal">
              Hello! I'm your AI sales coach. How can I help you improve your
              sales performance today?
            </p>
          </div>
        </div>
      </div>
      <form className="bg-white px-4 md:px-8 pt-4 pb-6 rounded-b-[12px] space-y-4">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              className="h5-normal font-geist text-center text-primary-500 bg-primary-500/8 rounded-[36px]  py-2 md:py-3 px-[17px]"
            >
              {suggestion.text}
            </button>
          ))}
        </div>
        <div className="flex-between gap-3">
          <input
            type="text"
            className="flex-1 py-[10px] md:py-[17px]  px-[10px] md:px-[23px] rounded-sm border border-[#E5E7EB] h5-normal focus:outline focus:outline-blue-600"
            placeholder="Ask anything you need"
          />
          <div className="bg-primary-500 rounded-[8px] p-[12px] md:p-[14px] flex gap-2 md:gap-2.5 text-white h5-normal md:text-[17.09px] font-medium">
            <input type="button" value="Send" />
            <Image src={ArrowUp} alt="Arrow Up" height={20} width={20} />
          </div>
        </div>
      </form>
    </div>
  );
}
