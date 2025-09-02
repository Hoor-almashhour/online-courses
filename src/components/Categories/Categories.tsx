
import Image from "next/image";
import Link from "next/link";
import { FaPalette } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";

const categories = [
  { title: "Art & Design", courses: 38,  icon: <FaPalette />, alt: "art-icon" ,type: "icon" },
  { title: "Development", courses: 38, img: "/Icons/web-dev.svg", alt: "development-icon", type: "image" },
  { title: "Communication", courses: 38, icon: <RiUserCommunityFill />, alt: "communication-icon",type: "icon"  },
  { title: "Videography", courses: 38, img: "/Icons/video.svg", alt: "video-icon" ,type: "image"},
  { title: "Marketing", courses: 38, img: "/Icons/marketing.svg", alt: "marketing-icon",type: "image" },
  { title: "Content Writing", courses: 38, img: "/Icons/content-writing.svg", alt: "content-writing-icon",type: "image" },
  { title: "Finance", courses: 38, img: "/Icons/finance.svg", alt: "finance-icon" ,type: "image"},
  { title: "Science", courses: 38, img: "/Icons/science.svg", alt: "science-icon" ,type: "image"},
];

const CategoriesPage = () => {
  return (
    <section className="mt-14 ">
      <div className=" flex flex-col md:max-w-[89vw] mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-primary">Top Categories</h2>
            <p className="mt-2 text-gray-600 max-w-xs mx-auto md:mx-0">
              Explore our Popular Categories
            </p>
          </div>
          <div className="hidden md:block mt-4 md:mt-0">
            <Link href="#"  className="inline-block px-6 py-2 border border-gray-300 rounded-full bg-white text-primary hover:bg-gray-100 transition">
                All categories
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-13 mx-20 flex flex-col md: md:flex-row md:flex-wrap items-center md:justify-evenly gap-8 ">
          {categories.map((cat, idx) => (
            <Link key={idx} href="#"  className="flex flex-col items-center justify-center border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:scale-95 transition-transform text-center w-[234px] h-[234px]">
                {cat.type === "image" ? (
                    <img src={cat.img!} alt={cat.alt!} className="mb-4 w-7" />
                ) : (
                    <div className="mb-4 text-3xl text-orange-500">{cat.icon}</div>
                )}
                <h4 className="text-xl font-semibold text-primary hover:text-orange-500">{cat.title}</h4>
                <p className="text-gray-500 mt-2">{cat.courses} Courses</p>
              
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="#" className="px-6 py-3 border border-gray-300 rounded-full bg-white text-primary hover:bg-gray-100 transition">
              All categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
