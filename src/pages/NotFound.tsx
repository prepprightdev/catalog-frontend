import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-grayLight text-primary px-4">
      <AlertTriangle size={48} className="mb-6 text-yellow-400" />
      <h1 className="text-3xl font-bold mb-2">404 Not Found</h1>
      <p className="mb-6 text-lg text-gray-700">
        The page or resource you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primaryDark transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
