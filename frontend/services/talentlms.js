import axios from "axios";

const API_URL = "http://localhost:8000"; // Use 'localhost' instead of '127.0.0.1'

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};
