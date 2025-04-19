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
    <>
      <div>
        <button onClick={() => setShowForm(true)} type="button">
          Add Task
        </button>
      </div>
      {showForm && (
        <Form
          taskList={taskList}
          setTaskList={setTaskList}
          setInputVal={setInputVal}
          inputVal={inputVal}
          initialForm={initialForm}
          setShowForm={setShowForm}
        />
      )}
      <div className="grid grid-cols-3 gap-4 w-full mx-auto p-4 min-h-screen">
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
    </>
  );
}
