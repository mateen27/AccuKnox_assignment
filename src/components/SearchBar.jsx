import React, { useState } from "react";
import useStore from "../store/zustandStore";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const categories = useStore((state) => state.dashboard.categories);

  const filteredWidgets = categories.flatMap((category) =>
    category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="relative hidden sm:block">
      <input
        type="text"
        className="bg-gray-200 text-black py-3 pl-4 pr-10 rounded-md transition-all duration-300 w-106"
        placeholder="Search Widgets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.8-4.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </span>

      {query && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="p-2">
            <div className="font-bold text-gray-700 mb-2">Search Results:</div>
            <div className="flex flex-col">
              {filteredWidgets.length > 0 ? (
                filteredWidgets.map((widget, index) => (
                  <div
                    key={index}
                    className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="font-semibold">{widget.name}</div>
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-600">No results found.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
