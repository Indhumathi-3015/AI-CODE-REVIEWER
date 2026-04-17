import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reviewCode, clearReview } from "../redux/reviewSlice";

const LANGUAGES = ["JavaScript", "Python", "Java", "TypeScript", "C++", "Go"];

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.review);

  const handleReview = () => {
  if (!code.trim()) return;
  dispatch(reviewCode({ code, language }));
};

  const handleClear = () => {
    setCode("");
    dispatch(clearReview());
  };

  return (
    <div className="bg-gray-800 rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold text-lg">📝 Your Code</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 border border-gray-600 focus:outline-none"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <textarea
  value={code}
  onChange={(e) => setCode(e.target.value)}
  placeholder="Paste your code here..."
  rows={16}
  className="w-full bg-gray-900 text-green-400 font-mono text-sm rounded-lg p-4 border border-gray-600 focus:outline-none focus:border-blue-500 resize-none"
/>

      <div className="flex gap-3">
        <button
          onClick={handleReview}
          disabled={loading || !code.trim()}
          className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-200"
        >
          {loading ? "⏳ Reviewing..." : "🔍 Review My Code"}
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-200"
        >
          🗑️ Clear
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;