'use client';

import Link from "next/link";

const HeroSection  = () => {
  return (
      <section
          className=" flex items-center px-6 lg:px-[70px]
                      bg-gradient-to-br from-[#FFF5BE] to-[#D0F7EA]
                      md:bg-[url('/Img/Hero.webp')] md:bg-cover md:bg-center
                      md:bg-no-repeat h-[calc(100vh-72px)]
          "
          >
          <div className="flex flex-col items-center max-w-xl space-y-6 mt-16 md:flex md:justify-start  md:flex-col md:items-start">
            <h1 className="text-center text-4xl md:text-5xl md:text-start font-bold text-black leading-snug">
              Build Skills with Online Course
            </h1>
            <p className="md:text-start text-lg text-gray-600 text-center">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized that cannot trouble.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
            >
              Posts comment
            </Link>
          </div>
    </section>
  );
}

export default HeroSection 