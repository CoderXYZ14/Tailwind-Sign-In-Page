import * as React from "react";

export default function form() {
  return <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
    <h1 className="text-5xl font-semibold">Welcome Back</h1>
    <p className="font-medium text-lg text-gray-500 mt-4">Welcome back! Please enter your details.</p>
    <div className="mt-8">
      <div>
        <label className="text-lg font-medium">Email</label>
        <input
            className='w-full border-2 border-gray-100 rounder-xl p-4 mt-1 bg-transparent'
            placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="text-lg font-medium">Password</label>
        <input
            className='w-full border-2 border-gray-100 rounder-xl p-4 mt-1 bg-transparent'
            placeholder="Enter your password"
        />
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div >
          <input type="checkbox" id="remember"/>
          <label className="ml-2 font-medium text-base" htmlFor="remember">Remeber for 30days</label>
        </div>
        <button className="font-medium text-base text-violet-400">Forgot Password</button>
      </div>
      <div className="mt-8 flex flex-col gap-y-4">
        <button className="active:scale-[.98] hover:scale-[1.01] active:duration-75 transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Sign in</button>
        <button>Sign in with Google</button>
      </div>
    </div>
  </div>;
}
