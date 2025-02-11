import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to TalentLMS Dashboard
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Manage courses and users seamlessly with FastAPI & Next.js
      </p>
      <div className="space-x-4">
        <Link href="/courses">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
            View Courses
          </button>
        </Link>
        <Link href="/users">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">
            Manage Users
          </button>
        </Link>
      </div>
    </div>
  );
}
