import Analysis from "./Analysis";
import ChatForm from "./ChatForm";
import QuickActions from "./QuickActions";

export default function Coaching() {
  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex-column gap-2 lg:gap-5">
        <p className="text[24px] font-questrail text-tertiary-500">
          Live AI Coach
        </p>
        <h4 className="text-[36px] lg:text-[60px] font-questrail text-white">
          Take a Suggestion Coaching{" "}
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-[22px]">
        <div className="border col-span-7">
          <ChatForm />
        </div>
        <div className="border col-span-5">
          <Analysis />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
