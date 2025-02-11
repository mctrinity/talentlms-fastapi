"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCourses } from "../../../services/talentlms";

interface Course {
  id: string;
  name: string;
  avatar: string;
  description: string;
  status: string;
}

export default function CourseDetails() {
  const params = useParams();
  const id = params?.id ? (Array.isArray(params.id) ? params.id[0] : params.id) : null;
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!id) return;
    getCourses().then((courses) => {
      const selectedCourse = courses.find((c: Course) => c.id === id);
      setCourse(selectedCourse || null);
    });
  }, [id]);

  if (!id) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-gray-600 dark:text-white">
          Invalid course ID
        </p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-gray-600 dark:text-white">
          Loading course...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <img
          src={course.avatar}
          alt={course.name}
          className="w-full h-60 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {course.name}
        </h1>

        {/* Render HTML content safely */}
        <div
          className="text-gray-700 dark:text-gray-300 mt-4"
          dangerouslySetInnerHTML={{ __html: course.description }}
        />

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Status:{" "}
          <span
            className={`px-3 py-1 rounded-full text-white ${
              course.status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {course.status}
          </span>
        </p>
      </div>
    </div>
  );
}
