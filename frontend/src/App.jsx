import Navbar from "./components/NavBar";
import CodeEditor from "./components/CodeEditor";
import ReviewOutput from "./components/ReviewOutput";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-center mb-6 text-sm">
            Paste your code below and get instant senior developer feedback
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodeEditor />
            <ReviewOutput />
          </div>
        </div>
      </main>
      <footer className="text-center text-gray-600 text-xs py-4">
        Built with React + FastAPI + Groq LLaMA3
      </footer>
    </div>
  );
};

export default App;