import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');

  const handleToggle = () => {
    console.log(password);
    if (type == 'password'){      
      setType('text');
    }
    else {
      setType('password');
    }
  }

    return (
      <div className="w-screen h-screen flex flex-col">
        <header className='w-full mx-auto p-2 flex justify-between bg-black'>
          <a href="/" className='space-x-3 pl-14 pb-1'>
            <span className="text-white text-3xl font-bold">Management</span>
            <span className="text-white text-sm font-bold">Chuwa</span>
          </a>
        
          <div className="sm:flex w-1/3 items-center bg-white px-1 rounded-sm overflow-hidden">
            <input className="text-base text-gray-400 flex-grow outline-none px-2 py-2" type="search" name="search" placeholder="Search" />
            <div className="ms:flex items-center px-2 space-x-4 mx-auto">
              <button type="submit" className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>

          <div className='flex items-center pr-14 space-x-8'>
            <button className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span className='font-bold text-white text-base caret-transparent'>Sign In</span>
            </button>

            <button className="flex space-x-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <span className='font-bold text-white text-base caret-transparent'>$0.00</span>
            </button>
          </div>
        </header>  

        <div className="flex m-auto">
          <div className="">
            <div className="flex text-sm">
              <div className="min-w-sm max-w-xl w-screen">
                <form className="bg-white shadow-lg rounded px-10 pt-6 pb-8 mb-4">
                  <label className="flex text-3xl font-bold justify-center mt-8">Sign in to your account</label>
                  <div className="mt-6 mb-4">
                    <label className="block text-gray-500 text-sm mb-2">
                      Email
                    </label>
                    <input className="border rounded w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="you@example.com" />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-500 text-sm mb-2">
                      Password
                    </label>
                    <div className="relative w-full">
                      <input className="border flex-grow border-red-500 rounded w-full py-4 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="•••••••••••••••••••"
                        type={type}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                      <div className="absolute top-3 right-0 flex items-center pr-4">
                        <button type="button" className="underline rounded px-2 py-1 text-sm text-gray-500 caret-transparent" onClick={handleToggle}>Show</button>
                      </div>
                    </div>
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                    
                  </div>
                  <div className="mb-4">
                    <button className="flex w-full font-bold text-sm bg-[#5048e5] hover:bg-gray-500 text-white justify-center items-center py-3 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      Don't have an account?  
                      <a className="inline-block align-baseline text-sm underline text-[#5048e5] hover:text-blue-800" href="#">
                        Sign Up
                      </a>
                    </span>
                    <a className="inline-block align-baseline underline text-sm text-[#5048e5] hover:text-blue-800" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}