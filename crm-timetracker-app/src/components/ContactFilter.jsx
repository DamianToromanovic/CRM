import React, { useState } from "react";

export default function ContactFilter({ filters, dispatchFilters }) {
  const [isOpened, setIsOpened] = useState(false);

  const showFilters = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="status-toggle"
          onClick={showFilters}
          className="accent-blue-500 w-4 h-4"
        />
        <label
          htmlFor="status-toggle"
          className="text-sm text-gray-700 dark:text-gray-200"
        >
          Filter anzeigen
        </label>
      </div>

      {isOpened && (
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Status
            </h4>
            {["aktiv", "inaktiv", "offen"].map((status) => (
              <label
                key={status}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <input
                  type="checkbox"
                  checked={filters.status.includes(status)}
                  onChange={() =>
                    dispatchFilters({
                      type: "TOGGLE",
                      key: "status",
                      value: status,
                    })
                  }
                  className="accent-blue-500"
                />
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </label>
            ))}
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Kategorie
            </h4>
            {["kunde", "lieferant", "partner"].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() =>
                    dispatchFilters({
                      type: "TOGGLE",
                      key: "category",
                      value: cat,
                    })
                  }
                  className="accent-blue-500"
                />
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </label>
            ))}
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Firma
            </h4>
            {["Firma A", "Firma B", "Firma C"].map((company) => (
              <label
                key={company}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <input
                  type="checkbox"
                  checked={filters.company.includes(company)}
                  onChange={() =>
                    dispatchFilters({
                      type: "TOGGLE",
                      key: "company",
                      value: company,
                    })
                  }
                  className="accent-blue-500"
                />
                {company}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
