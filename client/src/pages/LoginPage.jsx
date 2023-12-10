import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [buttonText, setButtonText] = useState("Show");

  const handleToggle = () => {
    console.log(password);
    if (type == "password") {
      setType("text");
      setButtonText("Hide");
    } else {
      setType("password");
      setButtonText("Show");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />

      <div className="flex m-auto">
        <div className="">
          <div className="flex text-sm">
            <div className="min-w-sm max-w-xl w-screen">
              <form className="bg-white shadow-lg rounded px-10 pt-6 pb-8 mb-4">
                <label className="flex text-3xl font-bold justify-center mt-8">
                  Sign in to your account
                </label>
                <div className="mt-6 mb-4">
                  <label className="block text-gray-500 text-sm mb-2">
                    Email
                  </label>
                  <input
                    className="border rounded w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-500 text-sm mb-2">
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      className="border flex-grow border-red-500 rounded w-full py-4 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      placeholder="•••••••••••••••••••"
                      type={type}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute top-3 right-0 flex items-center pr-4">
                      <button
                        type="button"
                        className="underline rounded px-2 py-1 text-sm text-gray-500 caret-transparent"
                        onClick={handleToggle}
                      >
                        {buttonText}
                      </button>
                    </div>
                  </div>
                  <p className="text-red-500 text-xs italic">
                    Please enter your password.
                  </p>
                </div>
                <div className="mb-4">
                  <button
                    className="flex w-full font-bold text-sm bg-[#5048e5] hover:bg-gray-500 text-white justify-center items-center py-3 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">
                    Don't have an account?
                    <a
                      className="inline-block align-baseline text-sm underline text-[#5048e5] hover:text-blue-800"
                      href="#"
                    >
                      Sign Up
                    </a>
                  </span>
                  <a
                    className="inline-block align-baseline underline text-sm text-[#5048e5] hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
