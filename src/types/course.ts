export interface Lesson {
  id: number;
  title: string;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
  description?: string;
  modules: Module[];
}