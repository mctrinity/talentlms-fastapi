"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Branding */}
        <h1 className="text-2xl font-bold">
          <Link href="/">TalentLMS Dashboard</Link>
        </h1>

        {/* Navigation Links & Dark Mode Toggle */}
        <div className="flex items-center space-x-6">
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="/users" className="hover:underline">
            Users
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-700 text-white rounded-md flex items-center"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
