"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; 
import { MdChevronRight} from "react-icons/md";
import Hero from "./Hero/Hero";
import CourseTabs from "./components/CourseTabs/CourseTabs";
import { Course } from "@/types";



export default function CourseDetails() {
  const { id } = useParams();
  const courses = useSelector((state: RootState) => state.courses.allCourses);

  
  const courseId = typeof id === "string" ? parseInt(id, 10) : null;
  const course = courseId 
  ? (courses.find((c) => c.id === courseId) as Course | undefined)
  : undefined ;
  
  if (!course) {
    return <div className="text-center py-10">Course not found</div>;
  }

  return (
    <div className="py-[60px]">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-6">
            <div className=" max-w-full mx-6 md:mx-[70px]">
              <p className="text-gray-500 flex items-center ">
                Homepage <span className="mx-2"><MdChevronRight /></span>
                <span className=" font-medium text-gray-500 flex items-center justify-center">
                  Courses 
                   <span className="mx-2"><MdChevronRight /></span>
                  <span className=" text-sm text-gray-400 md:text-lg">{course.title}</span>
                </span>
              </p>
          </div>
      </section>
      {/* Hero Section */}
         <Hero course={course} />

      {/* Tabs Section */}
          <CourseTabs  
                overview={course.overview}
                curriculum={course.curriculum|| []} 
                instructor={course.instructor}
                faqs={course.faqs ?? []}
                reviews={course.reviews ?? []}
           />

      {/* Comment Section */}
      <div className="bg-white md:p-6 md:my-14  md:mx-[70px] md:h-[386px] md:max-w-[792px] max-h-[508px] mx-5 my-4">
        <h3 className="text-lg font-semibold mb-4">Leave A Comment</h3>
        <p className="mb-7 text-lg text-gray-600">Your email address will not be published. Required fields are marked *</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full h-12 border rounded-lg px-4 py-2 border-gray-400"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full h-12 border rounded-lg px-4 py-2 border-gray-400"
            />
          </div>
          <textarea
            placeholder="Comment"
            className="w-full border rounded-lg px-4 py-2 h-[110px] border-gray-400"
          ></textarea>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              className="h-3 w-3"
            />
            <label htmlFor="remember" className="text-lg text-gray-600">
              Save my name, email in this browser for the next time I comment
            </label>
          </div>

          <button type="submit" className="cursor-pointer px-6 py-3 w-[170px] bg-orange-500 text-white rounded-3xl">
            Post comment
          </button>
        </form>
      </div>


    </div>
  );
}
