import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await api.post("/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-700 via-teal-600 to-cyan-400 px-4 py-8">
      <div className="w-full max-w-[420px]">
        <div className="relative rounded-xl bg-[#1f2d52] shadow-2xl pt-10 pb-8 px-7 sm:px-8">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-cyan-300 px-14 py-3 text-cyan-950 font-semibold tracking-[0.2em] rounded-sm shadow-md">
            SIGN IN
          </div>

          <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/25 bg-white/10 shadow-inner">
            <span className="text-5xl text-slate-300">👤</span>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div className="flex items-center gap-3 rounded-md bg-slate-500/80 px-4 py-3">
              <span className="text-slate-200">👤</span>
              <input
                type="email"
                placeholder="username"
                className="w-full bg-transparent outline-none text-white placeholder:text-slate-300"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="flex items-center gap-3 rounded-md bg-slate-500/80 px-4 py-3">
              <span className="text-slate-200">🔒</span>
              <input
                type="password"
                placeholder="password"
                className="w-full bg-transparent outline-none text-white placeholder:text-slate-300"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-cyan-200/90">
              <label className="flex items-center gap-1 select-none">
                <input type="checkbox" defaultChecked className="accent-cyan-300" />
                remember me
              </label>
              <button type="button" className="hover:text-cyan-100">
                forgot your password?
              </button>
            </div>

            {error && <p className="text-center text-sm text-red-300">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-md bg-cyan-300 py-3.5 font-semibold text-cyan-950 transition hover:bg-cyan-200"
            >
              LOGIN
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-300">
            New user?{" "}
            <Link to="/register" className="text-cyan-300 hover:text-cyan-200">
              Register here
            </Link>
          </p>
        </div>

        <div className="mx-auto mt-8 h-6 w-48 rounded-full bg-black/20 blur-md"></div>
      </div>
    </div>
  );
}