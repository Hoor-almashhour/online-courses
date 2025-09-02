

export type Lesson = {
  id?: number; 
  title: string;
  duration: string;
  isPreview: boolean;
  isLocked?: boolean;
};

export type CurriculumSection = {
  id: number;
  title: string;
  totalDuration: string;
  lessons: Lesson[];
};

export type Instructor = {
  id: number;
  name: string;
  bio: string;
  image: string;
  students: number;
  lessons: number;
  socials: {
    facebook?: string;
    pinterest?: string;
    x?: string;
    youtube?: string;
  };
};

export type FAQ ={
  id: number;
  question: string;
  answer: string;
};

export type CourseReview = {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
};

export interface Course {
  
  id: number;
  title: string;
  description: string;
  author?: string;
  overview?: string;
  curriculum?: CurriculumSection[];
  Instructor?: Instructor; 
  faqs?: FAQ[];
  reviews?:CourseReview[];
  image: string;
  duration: string;
  students: number;
  price: number;
  category: string;
  level?: string;
  lessons?: number;
  quizzes?: number;
  oldPrice?: number;
  newPrice?: number;
  isFeatured?: boolean;
}
