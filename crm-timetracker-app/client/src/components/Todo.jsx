import React from "react";

export default function Todo({ taskList }) {
  return (
    <>
      {taskList.map(
        (todoObject) =>
          todoObject.status !== "inProgress" &&
          todoObject.status !== "done" && (
            <div
              draggable={true}
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", todoObject.id);
              }}
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
