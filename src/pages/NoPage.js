import React from "react";
import { FaRegSadTear } from "react-icons/fa";

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100 text-black">
      <FaRegSadTear className="text-8xl mb-8 animate-bounce" />
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-3xl font-bold">Page Not Found</p>
      <a href="/" className="mt-8 px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-800 transition duration-300">Back Home</a>
    </div>
  );
};

export default NoPage;
