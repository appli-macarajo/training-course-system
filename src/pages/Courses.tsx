import { Link } from "react-router-dom";
import type { Course } from "../types/course";

export default function Courses() {
  const courses: Course[] = [
    {
      id: 1,
      title: "Safety Training",
      modules: []
    }
  ];

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>

          <Link to={`/course/${course.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}