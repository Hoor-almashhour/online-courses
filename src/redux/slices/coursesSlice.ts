

import { mockCourses } from "@/data/courses";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "@/types";

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