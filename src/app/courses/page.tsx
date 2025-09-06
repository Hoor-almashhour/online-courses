"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setPage } from "@/redux/slices/uiSlice";
import CourseCard from "@/components/CourseCard/CourseCard";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import { IoGridSharp } from "react-icons/io5";
import Link from "next/link";

export default function CoursesPage() {
  const dispatch = useDispatch();
  const { allCourses } = useSelector((state: RootState) => state.courses);
  const { currentPage, itemsPerPage } = useSelector((state: RootState) => state.ui);

  const totalPages = 3; 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = allCourses.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  return (
    <section className="py-[60px]">
      <section className="bg-gray-100 py-6 mb-12">
        <div className=" mx-6 md:mx-[70px]">
          <p className="text-gray-500 flex items-center">
            Homepage <span className="mx-2"><MdChevronRight /></span>
            <span className="font-medium text-gray-400">Courses</span>
          </p>
        </div>
      </section>

      <div className="max-w-[89vw] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-start md:flex-row justify-between md:items-center mb-8 gap-6">
          <h1 className="text-3xl font-semibold">All Courses</h1>

          {/* Search & view icons */}
          <div className="flex gap-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border-b border-black pr-1 py-2 w-64 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-black">
                <FiSearch />
              </span>
            </div>
            <span className="cursor-pointer text-orange-500">
              <IoGridSharp />
            </span>
            <span className="cursor-pointer">
              <TfiMenuAlt />
            </span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className=" flex flex-wrap items-center gap-9 md:justify-between md:items-center">
          {paginatedCourses.map((course) => (
            <div key={course.id}  className="w-full md:w-[30%]">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 cursor-pointer bg-white text-black border-gray-300 p-2 rounded-full shadow hover:bg-black hover:text-white"
          >
            <MdChevronLeft size={28} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => dispatch(setPage(i + 1))}
              className={`w-12 h-12 flex items-center justify-center rounded-full border cursor-pointer ${
                currentPage === i + 1
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            className=" w-12 h-12 cursor-pointer bg-white text-black border-gray-300 p-2 rounded-full shadow hover:bg-black hover:text-white"
          >
            <MdChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
