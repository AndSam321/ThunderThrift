import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = async () => {
    try {
      setIsLoading(true);
      // Grab Auth URL from backend API
      const response = await fetch("http://localhost:8000/api/auth/microsoft/");
      const data = await response.json();

      if (data.auth_url) {
        // Redirect to Microsoft login
        window.location.href = data.auth_url;
      } else {
        console.error("No auth URL received");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching auth URL:", error);
      setIsLoading(false);
    }
  };

  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-bottom"
      style={{
        background: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%),
          url('/images/LoginBackground.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-10 rounded-2xl shadow-lg w-96 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-700 mb-6 flex items-center justify-center gap-4">
          <i className="fa-solid fa-user text-5xl"></i>
          Login
        </h2>

        <button
          onClick={handleLoginClick}
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-3 px-5 py-3 text-white bg-blue-600 rounded-lg shadow-md transition hover:bg-blue-700 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg
                className="w-5 h-5 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Login with your Simpson Email"
          )}
        </button>

        <p className="mt-4 text-sm text-gray-400">
          By logging in, you agree to our{" "}
          <Link
            to="/terms-of-service"
            className="text-blue-500 hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
