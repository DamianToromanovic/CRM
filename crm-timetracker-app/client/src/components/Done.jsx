import React from "react";

export default function Done({ taskList }) {
  return (
    <>
      {taskList.map(
        (todoObject) =>
          todoObject.status === "done" && (
            <div
              className="max-w-md mx-auto p-6 rounded shadow-md border-zinc-200 dark:border-zinc-700 bg-white/40 backdrop-blur-sm"
              key={todoObject.id}
            >
              {todoObject.title}
            </div>
          )
      )}
    </>
  );
}
