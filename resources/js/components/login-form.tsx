import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post("/login");
  };

  return (
    <div className="relative w-full max-w-md mx-auto backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-center text-white">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="bg-teal-500/90 p-4 rounded-full shadow-lg">
          <img src="/cropped-logo-uin.png" alt="Logo FST" className="h-10 w-10 object-contain" />
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-1">Fakultas Sains dan Teknologi</h1>
      <p className="text-teal-200 mb-6 text-sm">Peminjaman Ruangan dan Aset Fakultas</p>

      <form onSubmit={submit} className="space-y-4 text-left">
        <div>
          <Label htmlFor="email" className="block text-sm text-teal-100 mb-1">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            required
          />
          {errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
        </div>

        <div>
          <Label htmlFor="password" className="block text-sm text-teal-100 mb-1">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-300 hover:text-white"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {errors.password && <div className="text-red-400 text-sm mt-1">{errors.password}</div>}
        </div>

        <Button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md shadow-lg transition-all duration-200"
          disabled={processing}
        >
          {processing ? "Memproses..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
