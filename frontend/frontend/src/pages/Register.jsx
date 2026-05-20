import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await api.post("/register", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-700 via-teal-600 to-cyan-400 px-4 py-8">
      <div className="w-full max-w-[420px]">
        <div className="relative rounded-xl bg-[#1f2d52] shadow-2xl pt-12 pb-9 px-7 sm:px-8">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-cyan-300 px-12 py-3 text-cyan-950 font-semibold tracking-[0.2em] rounded-sm shadow-md">
            SIGN UP
          </div>

          <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/25 bg-white/10 shadow-inner">
            <span className="text-5xl text-slate-300">👤</span>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <input
              type="text"
              placeholder="name"
              className="w-full rounded-md bg-slate-500/80 px-4 py-3 text-white placeholder:text-slate-300 outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="date"
              className="w-full rounded-md bg-slate-500/80 px-4 py-3 text-white outline-none [color-scheme:dark]"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />

            <input
              type="email"
              placeholder="email"
              className="w-full rounded-md bg-slate-500/80 px-4 py-3 text-white placeholder:text-slate-300 outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="password"
              placeholder="password"
              className="w-full rounded-md bg-slate-500/80 px-4 py-3 text-white placeholder:text-slate-300 outline-none"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            {error && <p className="pt-1 text-center text-sm text-red-300">{error}</p>}

            <button className="w-full rounded-md bg-cyan-300 py-3.5 font-semibold text-cyan-950 transition hover:bg-cyan-200">
              REGISTER
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-300">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-300 hover:text-cyan-200">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}