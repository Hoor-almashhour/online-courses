

import { mockCourses } from "@/data/courses";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Lesson = {
  id: number;
  title: string;
  duration: string;
  isPreview: boolean;
  isLocked: boolean;
};

type CurriculumSection = {
  id: number;
  title: string;
  lessons: Lesson[];
  totalDuration: string;
};

interface Course {
  id: number;
  title: string;
  description: string;
  author?:string;
  overview?: string; 
  curriculum?: CurriculumSection[];
  image: string;
  duration: string;
  students: number;
  price: number;
  category: string;
  level?:string;
  lessons?:number;
  quizzes?:number;
  oldPrice?:number;
  newPrice?:number;
  isFeatured?: boolean;
}

interface CoursesState {
  allCourses: Course[];
  selectedCourse?: Course;
}

const initialState: CoursesState = {
  allCourses: mockCourses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.allCourses = action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;