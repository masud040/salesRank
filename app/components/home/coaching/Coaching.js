import Analysis from "./Analysis";
import ChatReactions from "./ChatReactions";
import ChatSection from "./ChatSection";
import QuickActions from "./QuickActions";

export default function Coaching() {
  return (
    <div className="container py-8 space-y-[60px]">
      {/* Header */}
      <div className="flex-column gap-2 lg:gap-5">
        <p className="text[24px] font-questrail text-tertiary-500">
          Live AI Coach
        </p>
        <h4 className="text-[36px] lg:text-[60px] font-questrail text-white">
          Take a Suggestion Coaching{" "}
        </h4>
      </div>
      <div className="grid grid-cols-12 gap-[24px]">
        <div className="col-span-12 lg:col-span-7 flex-center justify-center items-center gap-4 md:gap-6">
          <ChatSection />
          <ChatReactions />
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <Analysis />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
