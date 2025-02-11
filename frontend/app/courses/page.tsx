"use client"; // ✅ Add this at the top

import { useEffect, useState } from "react";
import { getCourses } from "../../services/talentlms";
import CourseCard from "../../components/CourseCard";

interface Course {
  id: string;
  name: string;
  avatar: string;
  status: string;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-6 mb-10">
        TalentLMS Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            name={course.name}
            avatar={course.avatar}
            status={course.status}
          />
        ))}
      </div>
    </div>
  );
}
