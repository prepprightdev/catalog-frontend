import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) return <p>You need to login to view your profile.</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <p>
        <strong>Name:</strong> {user.fullName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}
