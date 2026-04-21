import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();

  // temporary mock data
  const course = {
    id,
    title: "Safety Training",
    description: "Basic workplace safety procedures",
    modules: [
      {
        title: "Introduction",
        lessons: ["What is Safety", "Why it matters"]
      },
      {
        title: "Equipment Handling",
        lessons: ["Gloves", "Helmets", "Machines"]
      }
    ]
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <hr />

      <h2>Modules</h2>

      {course.modules.map((module, index) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <h3>{module.title}</h3>

          <ul>
            {module.lessons.map((lesson, i) => (
              <li key={i}>{lesson}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}