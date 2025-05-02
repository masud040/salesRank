"use client";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
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
  const [instructions, setInstructions] = useState("");
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (instructions === "") {
      setAlert("Please enter a question before sending.");
    } else {
      setMessage(instructions);
    }
  }
  function handleChange(e) {
    setAlert("");
    setInstructions(e.target.value);
  }
  return (
    <div className="bg-secondary-200 rounded-[12px] border border-[#CDCDCD] flex-col">
      <div className="bg-white px-4 md:px-8  py-4 rounded-t-[12px]">
        <p className="h3-bold text-[#1B1B1B] font-manrope">AI Sales Coach</p>
      </div>
      {/* chats */}
      <div className="px-4 md:px-8 py-6 flex-1 min-h-[337px] flex-column">
        <div className="flex flex-1 items-start gap-4 md:gap-6">
          <div className="rounded-full bg-[#D9D9D9] p-4 md:p-5" />
          <div className="bg-white px-6 py-2 rounded-[8px]">
            <p className="h5-normal md:h3-normal">
              Hello! I'm your AI sales coach. How can I help you improve your
              sales performance today?
            </p>
          </div>
        </div>

        {message && (
          <div className=" flex-end">
            <div className="h5-normal md:h3-normal bg-white px-4 py-1.5 rounded-full text-end w-fit">
              {message}
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white px-4 md:px-8 pt-4 pb-6 rounded-b-[12px] space-y-4"
      >
        <div className="flex items-center gap-3 flex-wrap">
          {suggestions.map((suggestion) => (
            <input
              type="button"
              key={suggestion.id}
              onClick={handleChange}
              className="h5-normal font-geist text-center text-primary-500 bg-primary-500/8 rounded-[36px] py-1 md:py-3 px-2 md:px-[17px]"
              value={suggestion.text}
            />
          ))}
        </div>
        {alert && (
          <div className="text-red-500 text-[12px] font-manrope font-medium">
            {alert}
          </div>
        )}
        <div className="flex-between gap-2 md:gap-3">
          <input
            type="text"
            className="w-2/3 md:w-full py-[10px] md:py-[17px]  px-[10px] md:px-[23px] rounded-sm border border-[#E5E7EB] h5-normal focus:outline focus:outline-blue-600"
            value={instructions}
            onChange={handleChange}
            placeholder="Ask anything you need"
          />
          <div className="bg-primary-500 rounded-[8px] p-[12px] md:p-[14px] flex items-center gap-2 md:gap-2.5 text-white text-[14px] md:text-[17.09px] font-medium">
            <input type="submit" value="Send" />
            <FaArrowUp className="size-4 md:size-6" />
          </div>
        </div>
      </form>
    </div>
  );
}
