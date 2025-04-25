import React, { useState } from "react";
import Todo from "../components/Todo.jsx";
import InProgress from "../components/InProgress.jsx";
import Done from "../components/Done.jsx";
import Form from "../components/Form.jsx";

export default function TaskBoard() {
  const [showForm, setShowForm] = useState(false);
  const initialForm = {
    title: "",
    description: "",
    status: "",
  };
  const [inputVal, setInputVal] = useState(initialForm);
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 px-4 py-8">
      {/* Header + Add Button */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          TaskBoard
        </h1>
        <button
          onClick={() => setShowForm(true)}
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + Neue Aufgabe
        </button>
      </div>

      {/* Formular */}
      {showForm && (
        <div className="max-w-3xl mx-auto mb-8 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg">
          <Form
            taskList={taskList}
            setTaskList={setTaskList}
            setInputVal={setInputVal}
            inputVal={inputVal}
            initialForm={initialForm}
            setShowForm={setShowForm}
          />
        </div>
      )}

      {/* Task Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div>
          <Todo setTaskList={setTaskList} taskList={taskList} />
        </div>
        <div>
          <InProgress setTaskList={setTaskList} taskList={taskList} />
        </div>
        <div>
          <Done setTaskList={setTaskList} taskList={taskList} />
        </div>
      </div>
    </div>
  );
}
