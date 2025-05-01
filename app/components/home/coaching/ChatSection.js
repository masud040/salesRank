"use client";
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
      <div className="bg-white px-8 py-4 rounded-t-[12px]">
        <p className="h3-bold text-[#1B1B1B] font-manrope">AI Sales Coach</p>
      </div>
      {/* chats */}
      <div className="px-8 py-6 flex-1 min-h-[250px]">
        <div className="flex items-start gap-6">
          <div className="rounded-full bg-[#D9D9D9] p-5" />
          <div className="bg-white px-6 py-2 rounded-[8px]">
            <p className="h3-normal">
              Hello! I'm your AI sales coach. How can I help you improve your
              sales performance today?
            </p>
          </div>
        </div>
      </div>
      <form className="bg-white px-8 py-4 rounded-b-[12px] h0[100px]">
        <div className="flex-between items-center gap-3">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              className="text-[14px] font-geist text-center text-primary-500 bg-primary-500/8 rounded-[36px] py-3 px-[17px]"
            >
              {suggestion.text}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
