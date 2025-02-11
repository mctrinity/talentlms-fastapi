import { useEffect, useState } from "react";
import { getCourses } from "../services/talentlms";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <div>
      <h1>TalentLMS Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <img src={course.avatar} alt={course.name} width="50" />
            <strong>{course.name}</strong> - {course.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
