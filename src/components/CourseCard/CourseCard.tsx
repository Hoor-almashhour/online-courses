import Image from "next/image";
import Link from "next/link";
import { FaClock, FaGraduationCap } from "react-icons/fa";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  price: number;
  category: string;
  isFeatured?: boolean;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
      <div className="max-w-sm border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
        {/* Image */}
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
            <Link href={`/courses/${course.id}`} className="text-primary font-medium">
              View More
            </Link>
          </div>
        </div>
      </div>
  );
}
