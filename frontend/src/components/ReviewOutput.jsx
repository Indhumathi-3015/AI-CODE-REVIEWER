import { useSelector } from "react-redux";

const ReviewOutput = () => {
  const { review, loading, error } = useSelector((state) => state.review);

  return (
    <div className="bg-gray-800 rounded-xl p-5 flex flex-col gap-4 h-full">
      <h2 className="text-white font-semibold text-lg">🤖 AI Review</h2>

      <div className="flex-1 bg-gray-900 rounded-lg p-4 border border-gray-600 min-h-96 overflow-y-auto">
        {loading && (
          <div className="flex flex-col items-center justify-center h-full gap-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-400 text-sm">Analyzing your code...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900 border border-red-600 rounded-lg p-4">
            <p className="text-red-300">❌ {error}</p>
          </div>
        )}

        {!loading && !error && !review && (
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <span className="text-5xl">👨‍💻</span>
            <p className="text-gray-400 text-sm">Paste your code and click Review</p>
          </div>
        )}

        {!loading && review && (
          <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono leading-relaxed">
            {review}
          </pre>
        )}
      </div>
    </div>
  );
};

export default ReviewOutput;