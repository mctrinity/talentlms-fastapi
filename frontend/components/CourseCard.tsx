import Link from "next/link";

interface CourseProps {
  id: string;
  name: string;
  avatar: string;
  status: string;
}

const CourseCard: React.FC<CourseProps> = ({ id, name, avatar, status }) => {
  return (
    <Link href={`/courses/${id}`} passHref>
      <div className="cursor-pointer bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 transition hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <img
          src={avatar}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">
          {name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Status:{" "}
          <span
            className={`px-3 py-1 rounded-full text-white ${
              status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
