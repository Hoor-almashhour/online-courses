"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsCheck2, BsLock } from "react-icons/bs";
import { CurriculumSection } from "@/types"; 
import { PiNotebook } from "react-icons/pi";

type Props = {
  sections: CurriculumSection[];
};

export default function Curriculum({ sections }: Props) {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setOpenSection(openSection === id ? null : id);
  };

  if (!sections || sections.length === 0) return <p>No curriculum available.</p>;

  return (
    <div className="space-y-3  overflow-hidden transition-all duration-300">
      <p className="text-sm text-gray-600 leading-relaxed">
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. 
        This is one of the best WordPress LMS Plugins which can be used to 
        easily create & sell courses online.
      </p>
      {sections.map((section) => (
        <div
          key={section.id}
          className="bg-white rounded-lg shadow-sm border border-white"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between flex-wrap">
              <div className="flex items-center justify-center ">
                <button
                    onClick={() => toggleSection(section.id)}
                    className="px-5 py-5 text-left"
                  >
                  <div className="text-gray-400  cursor-pointer">
                    {openSection === section.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  
                </button>
                <p
                    className={`font-semibold text-[16px] ${
                      openSection === section.id ? "text-orange-500" : "text-black"
                    }`}
                  >
                    {section.title}
                </p>
             </div>
            
            <div className="flex items-center px-5">
              
              <p className="text-xs text-gray-400">
                {section.lessons.length} Lessons &nbsp;  &nbsp;{" "}
                {section.totalDuration}
              </p>
            </div>
          </div>

          {/* Lessons */}
          {openSection === section.id && (
            <div className="px-4 pb-4 space-y-3">
              {section.lessons.map((lesson, idx) => (
                <div
                  key={idx}
                  className="justify-center flex items-start md:justify-between flex-wrap  text-sm text-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs pl-10 cursor-pointer"> <PiNotebook/></span>
                    <span className={lesson.isPreview ? "text-black" : "text-orange-500"}>
                      {lesson.title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-[188px]">
                    <span className="text-xs px-2 py-1 rounded-lg  bg-blue-500 text-white" 
                      >
                        Preview
                    </span>

                    <span className="text-xs">{lesson.duration}</span>
                    {lesson.isLocked ? (
                      <BsLock className="text-gray-600" />
                    ) : (
                      <BsCheck2 className="text-gray-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
