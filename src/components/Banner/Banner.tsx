"use client";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="md:max-w-[89vw] md:mx-auto  bg-cover bg-center bg-no-repeat overflow-hidden md:rounded-3xl"
      style={{ backgroundImage: "url('/Banner/banner1.png')" }}
    >
      <div className=" bg-gradient-to-r from-[#B5FFE7] to-[#FDC1C1] w-full lg:bg-none ">
        <div className="px-6 items-center text-center  md:px-12 py-[70px] flex flex-col justify-start gap-6  md:items-start md:text-start">
          <h5 className="text-base font-semibold text-gray-700">
           GET MORE POWER FROM
          </h5>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
           LearnPress Add-Ons
          </h2>

          <p className="max-w-xl text-gray-700 md:text-lg">
           The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.
          </p>

          <div>
            <Link
              href="/courses"
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded-3xl"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
