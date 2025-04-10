import React from "react";

export default function ContactForm({
  handleSubmit,
  showForm,
  contactState,
  dispatchContact,
}) {
  const handleInput = (e) => {
    dispatchContact({
      type: `SET_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 space-y-4"
    >
      {[
        { label: "Name", name: "name", type: "text" },
        { label: "E-Mail", name: "email", type: "email" },
        { label: "Telefonnummer", name: "phone", type: "tel" },
        { label: "Firma", name: "company", type: "text" },
      ].map(({ label, name, type }) => (
        <div key={name} className="space-y-1">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {label}
          </label>
          <input
            type={type}
            name={name}
            value={contactState[name] || ""}
            onChange={handleInput}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ))}
      <div className="space-y-1">
        <label
          htmlFor="lastContact"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Letzter Kontakt
        </label>
        <input
          type="date"
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="lastContact"
          value={contactState.lastContact || ""}
          onChange={handleInput}
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Status
        </label>
        <select
          name="status"
          value={contactState.status}
          onChange={handleInput}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Bitte wählen</option>
          <option value="aktiv">Aktiv</option>
          <option value="inaktiv">Inaktiv</option>
          <option value="offen">Offen</option>
        </select>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Kategorie
        </label>
        <select
          name="category"
          value={contactState.category}
          onChange={handleInput}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Bitte wählen</option>
          <option value="kunde">Kunde</option>
          <option value="lieferant">Lieferant</option>
          <option value="partner">Partner</option>
        </select>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Notizen
        </label>
        <textarea
          name="notes"
          value={contactState.notes}
          onChange={handleInput}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 h-24 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() => {
            dispatchContact({ type: "RESET" });
            showForm();
          }}
          className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Abbrechen
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Speichern
        </button>
      </div>
    </form>
  );
}
