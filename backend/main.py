import os
import requests
import base64
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# TalentLMS API Credentials
TALENTLMS_DOMAIN = os.getenv("TALENTLMS_DOMAIN")  # Should be like "scidyllics"
TALENTLMS_API_KEY = os.getenv("TALENTLMS_API_KEY")
BASE_URL = f"https://{TALENTLMS_DOMAIN}.talentlms.com/api/v1"

# Encode API Key in Base64
auth_string = f"{TALENTLMS_API_KEY}:"
auth_bytes = auth_string.encode("utf-8")
auth_base64 = base64.b64encode(auth_bytes).decode("utf-8")


# Function to make API requests
def fetch_from_talentlms(endpoint):
    headers = {
        "Authorization": f"Basic {auth_base64}",
        "Content-Type": "application/json",
    }
    url = f"{BASE_URL}/{endpoint}"

    print(f"Fetching from: {url}")  # Debugging log

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return response.json()
    elif response.status_code == 401:
        raise HTTPException(status_code=401, detail="Unauthorized - Check API Key")
    else:
        raise HTTPException(
            status_code=response.status_code, detail="TalentLMS API Error"
        )


# Home Route
@app.get("/")
def read_root():
    return {"message": "Welcome to the TalentLMS FastAPI Backend!"}


# API Route: Get all courses
@app.get("/courses")
def get_courses():
    return fetch_from_talentlms("courses")


# API Route: Get a specific course
@app.get("/courses/{course_id}")
def get_course(course_id: str):
    return fetch_from_talentlms(f"courses/id:{course_id}")


# API Route: Get all users
@app.get("/users")
def get_users():
    return fetch_from_talentlms("users")


# API Route: Get a specific user
@app.get("/users/{user_id}")
def get_user(user_id: str):
    return fetch_from_talentlms(f"users/id:{user_id}")
