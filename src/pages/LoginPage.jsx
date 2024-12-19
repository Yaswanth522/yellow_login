import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example role-based authentication logic (replace with your own API call)
    const mockUser = {
      email: "vasu@yellow.ai",
      role: "student",
    };

    const mockInstructor = {
      email: "karthik@yellow.ai",
      role: "instructor",
    };

    if (email === mockUser.email && password === "password") {
      navigate("/student"); // Redirect to student page
    } else if (email === mockInstructor.email && password === "password") {
      navigate("/instructor"); // Redirect to instructor page
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Email:</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Password:</label>
          <input
            type="password"
            className="w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
