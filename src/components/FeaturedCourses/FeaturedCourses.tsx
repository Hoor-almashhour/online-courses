"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaGraduationCap } from "react-icons/fa";
import { useSelector } from "react-redux";

const FeaturedCourses = () => {
      const courses = useSelector((state: RootState) => state.courses.allCourses);
      const featured = courses.filter((course) => course.isFeatured);
  return (
    <section className="py-16 px-4 md:px-16">
      <div className="md:max-w-[89vw] mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary">Featured Courses</h2>
            <p className="text-gray-600 mt-2">Explore our Popular Courses</p>
          </div>
          <div className="hidden md:block">
            <Link
              href="/courses"
              className="px-6 py-2 border border-gray-300 rounded-full bg-white text-primary hover:bg-gray-100 transition"
            >
              All Courses
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-[31px] justify-between md:items-center">
          {featured.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="max-w-[385px] border border-gray-200 rounded-[20px] overflow-hidden flex flex-col "
            >
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={385}
                  height={250}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute top-4 left-4 bg-black text-white px-3 py-2 rounded-md text-sm font-medium">
                  {course.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="px-5 py-4 flex flex-col gap-3">
                <p className="text-gray-500 text-sm">
                  by <span className="text-primary font-medium">Determined-Poitras</span>
                </p>
                <h4 className="text-lg font-semibold text-primary">{course.title}</h4>

                {/* Icons */}
                <div className="flex justify-start gap-6 border-b pb-3 text-gray-500 text-sm">
                  <p className="flex items-center gap-2">
                    <FaClock className="text-orange-500" /> {course.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaGraduationCap className="text-orange-500" /> {course.students} Students
                  </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-3">
                  <div>
                    <del className="text-gray-400 mr-2">${course.price}</del>
                    {course. isFeatured ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      <span className="text-primary font-medium">${course.price}</span>
                    )}
                  </div>
                  <Link href="#" className="text-primary font-medium">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="#"
            className="px-6 py-3 border border-gray-300 rounded-full bg-white text-primary hover:bg-gray-100 transition"
          >
            All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
