import { Lesson } from "@/redux/slices/coursesSlice";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
export type CurriculumSection = {
  title: string;
  lessons: Lesson[];
  totalDuration: string;
};
