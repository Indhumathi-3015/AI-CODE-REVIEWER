from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

class CodeRequest(BaseModel):
    code: str
    language: str

@app.post("/review")
async def review_code(request: CodeRequest):
    prompt = f"""
    You are a senior software engineer doing a code review.
    Review the following {request.language} code and provide feedback on:
    1. 🐛 Bugs & Errors
    2. ⚡ Performance Issues
    3. ✅ Best Practices
    4. 🔒 Security Issues
    5. 💡 Suggestions to Improve

    Be specific, clear and helpful like a real senior developer.

    Code:
    {request.code}
    """

    response = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=1000,
    )

    return {"review": response.choices[0].message.content}

@app.get("/")
def root():
    return {"message": "AI Code Reviewer API is running!"}