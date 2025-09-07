import { CourseReview, CurriculumSection , FAQ, Instructor as InstructorType } from "@/types";
import { useState } from "react";
import Curriculum from "../Curriculum/Curriculum";
import Instructor from "../Instructor/Instructor";
import FAQs from "../FAQs/FAQs";
import Reviews from "../Reviews/Reviews";


type TabsSectionProps = {
  overview?: string;
  curriculum?: CurriculumSection[];
  instructor?:  InstructorType;
  faqs: FAQ[];
  reviews: CourseReview[];
};

const TabsSection = ({ overview, curriculum, instructor, faqs, reviews }: TabsSectionProps) => {
  const tabs = [
    { key: "Overview", label: "Overview" },
    { key: "Curriculum", label: "Curriculum" },
    { key: "Instructor", label: "Instructor" },
    { key: "FAQs", label: "FAQs" },
    { key: "Reviews", label: "Reviews" },
  ];

  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-gray-100 rounded-3xl mx-5 my-14 md:mx-[70px]  md:max-w-[792px] border border-gray-200">
      {/* Tabs Header */}
      <div className="max-h-[924px] flex-wrap border-b flex bg-white border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 min-w-[120px] text-center px-9 py-4 text-sm font-medium cursor-pointer border-r last:border-r-0
              border-gray-200 border
              ${index === 0 ? "rounded-tl-3xl" : ""}
              ${index === tabs.length - 1 ? "md:rounded-tr-3xl" : ""}
              ${activeTab === tab.key ? "bg-gray-100 text-orange-500" : "text-black bg-white hover:text-orange-500"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="text-gray-700 leading-relaxed px-6 md:px-9 py-9 space-y-4">
         {activeTab === "Overview" && (
          <>
            <p className="text-lg leading-7">
             LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
            </p>
            <p className="text-lg leading-8">
              LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
              No comments yet! You be the first to comment.
            </p>
          </>
        )}
        {activeTab === "Curriculum" && <Curriculum sections={curriculum ?? []} />}
        {activeTab === "Instructor" && instructor && <Instructor instructor={instructor} />}
        {activeTab === "FAQs" && <FAQs faqs={faqs } />}
        {activeTab === "Reviews" && reviews && <Reviews reviews={reviews} />}
      </div>
    </div>
  );
};

export default TabsSection;
