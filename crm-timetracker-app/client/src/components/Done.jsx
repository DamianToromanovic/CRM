import React from "react";

export default function Done({ taskList, setTaskList }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedId = e.dataTransfer.getData("plain/text");
    const updatedList = taskList.map((task) =>
      task.id === Number(droppedId) ? { ...task, status: "done" } : task
    );
    setTaskList(updatedList);
  };
  return (
    <>
      {taskList.map(
        (todoObject) =>
          todoObject.status === "done" && (
            <div
              onDrop={handleDrop}
              onDragStart={(e) => {
                e.dataTransfer.setData("plain/text", todoObject.id);
              }}
              draggable={true}
              onDragOver={(e) => e.preventDefault()}
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
