export type Course = {
  id: number;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
};
export type Query = {
  allCourses: Course[];
};

export interface UserData {
  id?: number;
  username: string;
  mobile: string;
  email: string;
}
