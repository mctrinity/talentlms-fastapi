interface CourseProps {
    id: string;
    name: string;
    avatar: string;
    status: string;
  }
  
  const CourseCard: React.FC<CourseProps> = ({ id, name, avatar, status }) => {
    return (
      <div key={id} className="bg-white shadow-lg rounded-lg p-5">
        <img
          src={avatar}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-4">{name}</h2>
        <p className="text-gray-500">
          Status:{" "}
          <span
            className={`px-3 py-1 rounded-full text-white ${
              status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </span>
        </p>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition">
          View Course
        </button>
      </div>
    );
  };
  
  export default CourseCard;
  