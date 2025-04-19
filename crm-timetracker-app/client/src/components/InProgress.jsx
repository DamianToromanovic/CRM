import React from "react";

export default function inProgress({ taskList }) {
  return (
    <div>
      {taskList.map((todoObject) => (
        <div
          className="max-w-md mx-auto p-6 rounded shadow-md border-zinc-200 dark:border-zinc-700 bg-white/40 backdrop-blur-sm"
          key={todoObject.id}
        >
          {todoObject.title}
        </div>
      ))}
    </div>
  );
}
