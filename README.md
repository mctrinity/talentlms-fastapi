# 🚀 TalentLMS Integration with FastAPI & Next.js

This project integrates **TalentLMS** with a **FastAPI backend** and a **Next.js frontend**, allowing seamless communication between TalentLMS and a custom user interface.

## 📌 Table of Contents
- [Backend Setup (FastAPI)](#-backend-setup-fastapi)
- [Frontend Setup (Next.js)](#-frontend-setup-nextjs)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [API Routes](#-api-routes)
- [Next Steps](#-next-steps)

---

## 🔧 Backend Setup (FastAPI)
### ✅ **1. Install Dependencies**
Make sure you have **Python 3.9+** installed. Then, inside the `backend/` folder, run:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

If you don't have a `requirements.txt`, create one and add:
```
fastapi
uvicorn
requests
python-dotenv
```
Then install:
```bash
pip install -r requirements.txt
```

### ✅ **2. Configure Environment Variables**
Since the `.env` file is now in the root directory, make sure it contains your **TalentLMS credentials**:
```
TALENTLMS_DOMAIN=scidyllics
TALENTLMS_API_KEY=your_api_key_here
```

### ✅ **3. Start the FastAPI Server**
Run the FastAPI server:
```bash
uvicorn backend.main:app --reload
```
The API should now be accessible at:
```
http://127.0.0.1:8000
```

---

## 🎨 Frontend Setup (Next.js)
### ✅ **1. Install Next.js**
In the root project directory, run:
```bash
npx create-next-app frontend
cd frontend
```

### ✅ **2. Install Dependencies**
```bash
npm install axios tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### ✅ **3. Configure Tailwind CSS**
Modify `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Then, add Tailwind imports to `styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ✅ **4. Connect Next.js to FastAPI**
Create a new file: `frontend/services/talentlms.js`
```javascript
import axios from "axios";

const API_URL = "http://localhost:8000"; // FastAPI backend

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};
```

### ✅ **5. Start Next.js**
```bash
npm run dev
```
Now visit:
```
http://localhost:3000/courses
```

---

## 🚀 Running the Project

### **1️⃣ Start Backend (FastAPI)**
```bash
uvicorn backend.main:app --reload
```
Backend runs at: `http://127.0.0.1:8000`

### **2️⃣ Start Frontend (Next.js)**
```bash
cd frontend
npm run dev
```
Frontend runs at: `http://localhost:3000`

---

## 📂 Project Structure
```
talentlms-fastapi/
│── .env                     # Environment variables (moved to root)
│── backend/                 # FastAPI backend
│   ├── main.py              # API Routes
│   ├── requirements.txt      # Python dependencies
│   ├── __init__.py
│   ├── routes/
│   ├── models/
│── frontend/                 # Next.js frontend
│   ├── pages/
│   │   ├── index.js          # Homepage
│   │   ├── courses.js        # Course listing page
│   ├── components/           # UI Components (Navbar, Footer)
│   ├── services/             # API calls to backend
│   ├── styles/
│── .gitignore                # Ignore env and build files
│── README.md                 # Documentation
```

---

## 📌 API Routes
| **Method** | **Endpoint**       | **Description** |
|-----------|----------------|--------------|
| `GET`    | `/courses`      | Fetch all courses from TalentLMS |
| `GET`    | `/users`        | Fetch all users from TalentLMS |
| `GET`    | `/courses/{id}` | Fetch a specific course by ID |
| `GET`    | `/users/{id}`   | Fetch a specific user by ID |

---

## 🎯 Next Steps
✅ **Improve UI (Tailwind + Responsive Design)**  
✅ **Implement User Management (Create, Fetch, Update, Delete Users)**  
✅ **Implement Course Enrollment (Assign users to courses)**  
✅ **Deploy to Vercel (Frontend) & Render (Backend)**  

---

## 💡 Contributors
- **Maki Dizon** (Lead Developer)
- Open for contributions! Feel free to fork and improve. 😊

---



