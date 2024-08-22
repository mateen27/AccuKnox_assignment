import React from "react";

const DashboardHeader = () => {
  return (
    <div className="m-4 sm:m-12">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
          CNAPP Dashboard
        </h1>
        <div className="flex gap-3 md:gap-4 lg:gap-4">
          <button className="bg-white hover:bg-gray-300 text-gray-600 py-2 outline-3 px-2 rounded-lg shadow-md border border-gray-300 hidden sm:block">
            🔄
          </button>
          <button className="bg-white hover:bg-gray-300 text-gray-600 py-2 outline-3 px-3 rounded-lg shadow-md border border-gray-300 hidden sm:block">
            ⋮
          </button>
          <button className="text-sm sm:text-base bg-white hover:bg-gray-300 text-blue-900 py-2 outline-3 px-3 rounded-lg shadow-md border border-blue-900 hidden sm:block">
            ⌚| Last 2 days ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
