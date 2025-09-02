"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa6";


export default function Grow() {
  const features: string[] = [
    "Certification",
    "Certification",
    "Certification",
    "Certification",
  ];

  return (
    <section className="py-16">
      <div
        className="
          max-w-[89vw] mx-auto px-6
          flex flex-col-reverse lg:flex-row items-center justify-between gap-6
        "
      >
        {/* Left Image */}
        <div className="w-full max-w-lg">
          <Image
            src="/Grow/grow.png"
            alt="students-learning"
            width={537}
            height={400}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-[38px] font-semibold leading-snug">
            Grow your skills with LearnPress LMS
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-lg text-black">
                <FaCheck className="text-green-500 mr-2 h-5 w-5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            className="
              mt-8 px-6 py-3 rounded-3xl text-white font-medium
              bg-orange-500
            "
          >
            Explore Course
          </button>
        </div>
      </div>
    </section>
  );
}
