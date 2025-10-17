import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    alert(`Registered as ${name} (${email})`);
    navigate("/login"); // redirect after register
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-96"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl mb-4 font-bold text-center">Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition">
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
