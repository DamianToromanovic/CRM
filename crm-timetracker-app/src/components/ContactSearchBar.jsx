import React from "react";

export default function ContactSearchBar({ setsearchedTerm, searchedTerm }) {
  const handleInput = (e) => {
    setsearchedTerm(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchedTerm}
        onChange={handleInput}
        placeholder="Nach Kontakt suchen"
      ></input>
    </>
  );
}
