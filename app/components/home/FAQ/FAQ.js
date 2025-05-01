"use client";
import Faq from "react-faq-component";
export default function FAQ() {
  const data = {
    rows: [
      {
        title: "1. Why should I choose Humestic?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh,`,
      },
      {
        title: "2. I like your works, how do we start a project?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "3. What info is required to get a quotation?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.`,
      },
    ],
  };

  const styles = {
    bgColor: "none",
    rowTitleColor: "black",
    rowTitleTextSize: "30px",
    rowContentColor: "#636363",
  };

  const config = {
    animate: true,
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };
  return (
    <div className="container py-10 space-y-20">
      {/* Header */}
      <div className="font-questrail flex flex-col md:flex-row justify-start items-start gap-3 lg:gap-10">
        <p className="text-[20px] lg:text-[24px] text-[#001C4A]">
          Frequently Asked Questions
        </p>
        <h1 className="text-[32px] lg:text-[60px]">
          Constant collaboration is how we roll. Let's see if we are a good fit.
        </h1>
      </div>
      {/* FAQ */}
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}
