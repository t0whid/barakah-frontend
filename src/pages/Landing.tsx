import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Barakah</h1>
      <p className="text-xl mb-8">Your Islamic app for prayer & reminders</p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 border border-white font-semibold rounded hover:bg-white hover:text-blue-500 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;
