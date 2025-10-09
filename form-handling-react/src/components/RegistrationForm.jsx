import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Controlled Form submitted:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Controlled Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
