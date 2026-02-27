import { useState } from "react";
import { Lock } from "lucide-react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      setError("Wrong student ID or password.");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      {/* Wider Content Wrapper */}
      <div className="w-full max-w-3xl mx-auto text-center">

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
          <span className="border-b-4 border-primary/40 pb-2">
            Student Login Required
          </span>
        </h1>

        {/* Wider Paragraph */}
        <p className="mt-8 text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
          The digital library portal contains proprietary databases and 
          requires an active student or faculty credential to access.
        </p>

        {/* Form (Controlled Width Separately) */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 max-w-md mx-auto space-y-5"
        >

          <input
            type="text"
            required
            placeholder="Student ID"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />

          {error && (
            <div className="text-red-600 text-sm font-medium bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 transition shadow-md disabled:opacity-70"
          >
            {loading ? "Authenticating..." : "Login to Portal"}
          </button>
        </form>

        {/* IT Support */}
        <div className="mt-8 text-sm text-gray-500">
          Experiencing issues?{" "}
          <span className="text-primary font-medium hover:underline cursor-pointer">
            Contact IT Support
          </span>
        </div>

      </div>
    </div>
  );
}