import React from "react";

export default function InProgress({ taskList, setTaskList }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedId = e.dataTransfer.getData("plain/text");
    const updatedTasks = taskList.map((task) =>
      task.id === Number(droppedId) ? { ...task, status: "inProgress" } : task
    );
    setTaskList(updatedTasks);
  };
  return (
    <>
      {taskList.map(
        (todoObject) =>
          todoObject.status === "inProgress" && (
            <div
              onDragStart={(e) =>
                e.dataTransfer.setData("plain/text", todoObject.id)
              }
              draggable={true}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
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
