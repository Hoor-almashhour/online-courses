"use client";

import Image from "next/image";

export default function Banner2() {
  return (
    <section
      className="
        mx-6 md:mx-25 my-18 md:rounded-3xl
        bg-[url('/Banner-2/banner2.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      <div className="max-w-[89vw] mx-auto px-4">
        <div
          className="
            flex flex-col md:flex-row justify-between
            items-center gap-6 py-16
          "
        >
          {/* Banner Text */}
          <div className="justify-center flex-col items-center gap-4 md:flex-row flex md:text-left ">
            <div
              className="
                h-28 w-28 flex items-center justify-center
                bg-white rounded-full
              "
            >
              <Image
                src="/Banner-2/icon-banner2.svg"
                alt="student"
                width={61}
                height={72}
                className="w-full h-auto object-cover"
              />
            </div>
            <h4 className="ml-6 text-xl font-semibold leading-6">
              Let’s Start With Academy LMS
            </h4>
          </div>

          {/* Banner Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              className="
                px-6 py-3 rounded-3xl font-medium border-2
                border-orange-500 text-orange-500
                cursor-pointer
              "
            >
              I’m a student
            </button>

            <button
              className="
                px-6 py-3 rounded-3xl font-medium
                bg-orange-500 text-white 
                 cursor-pointer
              "
            >
              Become an Instructor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
