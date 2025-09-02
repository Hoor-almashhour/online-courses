"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FaUsers, FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { FaFacebook, FaPinterest, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Instructor as InstructorType } from "@/types";
import { PiNotebook } from "react-icons/pi";

type InstructorProps = {
  instructor: InstructorType; 
};


export default function Instructor({ instructor }: InstructorProps) {
  

  return (
    <div className=" space-y-5 sm:flex flex-col">
     
      <div className="md:flex gap-6 items-center ">
        <Image
          src={instructor.image}
          alt={instructor.name}
          width={180}
          height={180}
          className="rounded-lg"
        />
        <div className="pt-6">
          <h2 className="text-lg font-semibold ">{instructor.name}</h2>
          <p className="text-sm text-gray-600">{instructor.bio}</p>
          <div className="flex flex-col gap-4 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <FaGraduationCap  className="text-orange-500" /> {instructor.students} Students
            </span>
            <span className="flex items-center gap-2">
              <PiNotebook className="text-orange-500" /> {instructor.lessons} Lessons
            </span>
          </div>
        </div>
      </div>

     
      <p className="text-sm text-gray-600">{instructor.bio}</p>

      
      <div className="flex gap-4 items-center">
        <span className="font-medium">Follow:</span>
        {instructor.socials.facebook && (
          <a href={instructor.socials.facebook} target="_blank">
            <FaFacebook className="text-gray-600 hover:text-blue-600" />
          </a>
        )}
        {instructor.socials.pinterest && (
          <a href={instructor.socials.pinterest} target="_blank">
            <FaPinterest className="text-gray-600 hover:text-red-500" />
          </a>
        )}
        {instructor.socials.x && (
          <a href={instructor.socials.x} target="_blank">
            <FaXTwitter className="text-gray-600 hover:text-black" />
          </a>
        )}
        {instructor.socials.youtube && (
          <a href={instructor.socials.youtube} target="_blank">
            <FaYoutube className="text-gray-600 hover:text-red-600" />
          </a>
        )}
      </div>
    </div>
  );
}
