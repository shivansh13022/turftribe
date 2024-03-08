import React from "react";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 mx-auto bg-slate-300 rounded-md shadow-md w-96">
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Sign Up
        </h2>
        <form className="mt-4">
          <div>
            <label htmlFor="email" className="block text-sm">
              Username
            </label>
            <input
              type="username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
            />
          </div>

          <div>
            <label htmlFor="email" className="mt-4 block text-sm">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email Address"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-grey-600 text-center">
          Already have an account?{" "}
          <Link href="/login">
            <div className="text-blue-500 transition-colors duration-200 transform hover:text-blue-700">
              Log in
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
