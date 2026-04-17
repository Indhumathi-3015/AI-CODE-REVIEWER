const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🤖</span>
        <h1 className="text-white text-xl font-bold">AI Code Reviewer</h1>
      </div>
      <span className="text-gray-400 text-sm">Powered by Groq + LLaMA3</span>
    </nav>
  );
};

export default Navbar;