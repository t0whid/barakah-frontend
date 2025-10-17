import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import type { AppDispatch } from "../store/store";

const Login: React.FC = () => {
  useEffect(() => {
    // debug: verify Login mounts
    console.log('[debug] Login component mounted')
  }, [])
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // simulate login
    dispatch(login({ email }));
    navigate("/"); // redirect after login
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
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
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
