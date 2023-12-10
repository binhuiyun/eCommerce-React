export default function Header() {
  return (
    <header className="bg-black">
      <div className="w-full p-2 flex justify-between">
        <a href="/" className="space-x-3 pl-14">
          <span className="text-white text-3xl font-bold">Management</span>
          <span className="text-white text-sm font-bold">Chuwa</span>
        </a>

        <div className="sm:flex w-1/3 items-center bg-white px-1 rounded-sm overflow-hidden">
          <input
            className="text-base text-gray-400 flex-grow outline-none px-2 py-2"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="ms:flex items-center px-2 space-x-4 mx-auto">
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

        <div className="flex items-center pr-14 space-x-8">
          <button className="flex items-center space-x-3">
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
              Sign In
            </span>
          </button>

          <button className="flex space-x-3 items-center">
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
          </button>
        </div>
      </div>
    </header>
  );
}
