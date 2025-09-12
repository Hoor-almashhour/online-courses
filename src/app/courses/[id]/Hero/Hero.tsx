"use client";
import { FC } from "react";
import { FaClock, FaGraduationCap, FaSignal } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { PiNotebook } from "react-icons/pi";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import { Course } from "@/types";

type HeroProps = {
  course: Course;
};

const Hero: FC<HeroProps> = ({ course }) => {
 
 if (!course) return null;
  return (
      <section className="max-h-[668px] bg-black text-white md:max-h-[290px]">
          <div className="max-w-[89vw] mx-auto py-[50px] grid grid-cols-1 lg:grid-cols-3 gap-13">
            
            {/* Left Content */}
            <div className="lg:col-span-2 flex flex-col gap-5 max-w-[563px]">
              <p className="text-sm text-white mb-5 pr-8">
                <span className="bg-gray-600 text-white px-3 py-2 rounded-md text-sm">
                  {course.category}
                </span>
                <span className="text-gray-400 pl-5">by </span>
                <span className="font-semibold">{course.author}</span>
              </p>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold">{course.description}</h1>

              {/* Course Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-orange-500" /> {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaGraduationCap className="text-orange-500" /> {course.students} 
                  Students
                </span>
                <span className="flex items-center gap-1.5">
                  <FaSignal className="text-orange-500" /> {course.level}
                </span>
                <span className="flex items-center gap-1.5">
                  <PiNotebook className="text-orange-500" /> {course.lessons}
                  Lessons
                </span>
                <span className="flex items-center gap-1.5">
                  <MdHelpCenter className="text-orange-500" /> {course.quizzes} 
                  Quizzes
                </span>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-3xl shadow-lg flex flex-col justify-between max-w-[410px] h-[358px]">
              <Image
                src="/Courses/card1.png"
                alt="Course Illustration"
                width={410}
                height={250}
                className="w-full object-cover rounded-t-3xl"
              />
              <div className="flex items-center justify-center mb-[30px]">
                <span className="line-through text-gray-400 text-lg mr-2">
                  ${course.oldPrice}
                </span>
                <span className="text-red-500 font-bold text-xl">${course.newPrice}</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-3xl ml-8">
                  Start Now
                </button>
              </div>
            </div>
          </div>
       </section>
  );
};

export default Hero;
