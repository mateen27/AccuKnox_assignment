// import React, { useState } from "react";

// const SearchBar = () => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         className={`bg-gray-200 text-black py-2 pl-4 pr-10 rounded-md transition-all duration-300 ${
//           isFocused ? "w-full" : "w-40"
//         } focus:w-full`}
//         placeholder="Search..."
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       />
//       <span className="absolute right-2 top-2 text-gray-400">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-5 h-5"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 21l-4.35-4.35m1.8-4.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
//           />
//         </svg>
//       </span>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import useStore from "../store/zustandStore";

// const SearchBar = () => {
//   // const [isFocused, setIsFocused] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   // state for searching the query inside the search bar
//   const [query, setQuery] = useState("");
//   // the data of the widgets inside zustand store
//   const categories = useStore((state) => state.dashboard);

//   const filteredWidgets = categories.flatMap(category =>
//     category.widgets.filter(widget =>
//       widget.name.toLowerCase().includes(query.toLowerCase())
//     )
//   );

//   // Sample random data for demonstration
//   const randomData = [
//     "Item 1 - Random Data",
//     "Item 2 - Random Data",
//     "Item 3 - Random Data",
//     "Item 4 - Random Data",
//     "Item 5 - Random Data",
//   ];

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         className={`bg-gray-200 text-black py-3 pl-4 pr-10 rounded-md transition-all duration-300 w-106`} // Increased width and padding
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         // onFocus={() => setIsFocused(true)}
//         // onBlur={() => setIsFocused(false)}
//       />
//       <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-5 h-5"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 21l-4.35-4.35m1.8-4.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
//           />
//         </svg>
//       </span>
      
//       {/* Dropdown */}
//       {query && (
//         <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
//           <div className="p-2">
//             <div className="font-bold text-gray-700 mb-2">Search Results:</div>
//             <div className="flex flex-col">
//               <div className="p-2 border-b border-gray-200">
//                 {query}
//               </div>
//               {filteredWidgets.map((item, index) => (
//                 <div key={index} className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;






import React, { useState } from "react";
import useStore from "../store/zustandStore";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const categories = useStore((state) => state.dashboard.categories);

  // Filter widgets based on the search query
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

      {/* Dropdown */}
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
                    <div className="text-gray-600">{widget.content}</div>
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

