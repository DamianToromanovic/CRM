import React from "react";

export default function ContactSearchBar({ setsearchedTerm, searchedTerm }) {
  const handleInput = (e) => {
    setsearchedTerm(e.target.value);
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      <input
        type="text"
        value={searchedTerm}
        onChange={handleInput}
        placeholder="Nach Kontakt suchen..."
        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-sm shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
