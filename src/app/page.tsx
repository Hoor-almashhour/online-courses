import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner2/Banner2";
import Categories from "@/components/Categories/Categories";
import CounterBox from "@/components/CounterBox/CounterBox";
import FeaturedCourses from "@/components/FeaturedCourses/FeaturedCourses";
import Footer from "@/components/Footer/Footer";
import Grow from "@/components/Grow/Grow";
import HeroSection from "@/components/HeroSection/HeroSection ";
import Navbar from "@/components/Navbar/Navbar";






export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <Categories />
        <FeaturedCourses />
        <Banner />
        <CounterBox />
        <Grow />
       <Banner2 />
      </main>
    </>
  );
}
