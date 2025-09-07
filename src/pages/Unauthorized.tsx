import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-grayLight text-primary px-4">
      <Lock size={48} className="mb-6 text-primary" />
      <h1 className="text-3xl font-bold mb-2">Unauthorized</h1>
      <p className="mb-6 text-lg text-gray-700">
        You don't have permission to view this page.
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

export default Unauthorized;
