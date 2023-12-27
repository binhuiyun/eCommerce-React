import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login_, logout_, selectUser } from "../../redux/auth.slice";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout_(null));
  };

  return (
    <header className="bg-black w-full px-4 py-3">
      <div className="grid gap-y-4 grid-rows-1 xs:grid-rows-2 sm:grid-rows-1 grid-cols-3 xs:grid-cols-2 sm:grid-cols-3">
        <div className="flex pl-14 xs:pl-0 sm:pl-14 bg-pink-20">
          <a href="/" className="w-full">
            <p className="sm:space-x-3">
              <span className="hidden text-white text-3xl font-bold sm:inline overflow-hidden">
                Management
              </span>
              <span className="text-white text-3xl font-bold sm:hidden">M</span>
              <span className="text-white text-sm font-bold ">Chuwa</span>
            </p>
          </a>
        </div>

        <div className="xs:row-start-2 xs:col-span-2 sm:row-start-1 sm:col-span-1 sm:col-start-2 flex w-full items-center bg-white rounded-md">
          <input
            className="text-base w-full text-gray-400 outline-none px-2 py-2 rounded-md"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className=" items-center px-2 space-x-4 mx-auto">
            <button type="submit" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end pr-14 xs:pr-0 sm:pr-14 space-x-8">
          {user && (
            <div
              to="/"
              onClick={(e) => handleLogout(e)}
              className="flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="font-bold text-white text-base caret-transparent hover:text-gray-300 transition-colors duration-300">
                {user.email}
              </span>
            </div>
          )}
          {!user && (
            <Link to="/login" className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="font-bold text-white text-base caret-transparent hover:text-gray-300 transition-colors duration-300 hidden sm:block">
                Sign In
              </p>
            </Link>
          )}

          <Link to={"/cart"} className="flex space-x-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="font-bold text-white text-base caret-transparent hover:text-gray-300 transition-colors duration-300">
              $0.00
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
