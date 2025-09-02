"use client";
import { FAQ } from "@/types";
import { FC, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

type FAQsProps = {
  faqs: FAQ[];
};

const FAQs: FC<FAQsProps> = ({ faqs }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="space-y-2">
      {faqs?.map(faq => (
        <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-white py-5 px-[30px] ">
          <div
            className={`cursor-pointer font-semibold flex items-center justify-between ${
              activeId === faq.id ? "text-orange-500" : ""
            }`}
            onClick={() => toggle(faq.id)}
          >
            {faq.question}
            <div className="text-gray-400  cursor-pointer">
                {activeId ===  faq.id ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {activeId === faq.id && (
            <div className="mt-2 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
