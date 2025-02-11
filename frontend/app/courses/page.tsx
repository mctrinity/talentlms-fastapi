"use client";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterStatus === "all" || course.status === filterStatus)
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-6 mb-10">TalentLMS Courses</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search courses..."
          className="p-2 border rounded-md dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded-md dark:bg-gray-800 dark:text-white"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Courses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} id={course.id} name={course.name} avatar={course.avatar} status={course.status} />
        ))}
      </div>
    </div>
  );
}
