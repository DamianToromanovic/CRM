import React, { useState } from "react";

export default function ContactFilter({ contactList, setFilter, filters }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleFilterValue = (key, value) => {
    const currentFilter = filters[key];
    const isIncluded = currentFilter.includes(value);

    const updatedValues = isIncluded
      ? currentFilter.filter((v) => v !== value)
      : [...currentFilter, value];

    setFilter({
      ...filters,
      [key]: updatedValues,
    });
  };

  const showFilters = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <div>
        <label htmlFor="status"></label>
        <input type="checkbox" name="status" onClick={showFilters} />
      </div>

      {isOpened ? (
        <div>
          <input
            type="checkbox"
            name="active"
            id=""
            onClick={() => toggleFilterValue("status", "aktiv")}
          />
          <input
            type="checkbox"
            name="unactive"
            id=""
            onClick={() => toggleFilterValue("status", "inaktiv")}
          />
          <input
            type="checkbox"
            name="open"
            id=""
            onClick={() => toggleFilterValue("status", "offen")}
          />
        </div>
      ) : null}
    </>
  );
}
