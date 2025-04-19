import React, { useState } from "react";
import Todo from "../components/Todo.jsx";
import InProgress from "../components/InProgress.jsx";
import Done from "../components/Done.jsx";
import Form from "../components/Form.jsx";

export default function TaskBoard() {
  const [showForm, setShowForm] = useState(false);
  const initalForm = {
    title: "",
    description: "",
    status: "",
  };
  const [inputVal, setInputVal] = useState(initalForm);
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div>
        <button onClick={() => setShowForm(true)} type="button">
          Add Task
        </button>
      </div>
      <div>
        <Todo />
        <InProgress taskList={taskList} />
        <Done />
      </div>
      {showForm && (
        <Form
          taskList={taskList}
          setTaskList={setTaskList}
          setInputVal={setInputVal}
          inputVal={inputVal}
          initalForm={initalForm}
          setShowForm={setShowForm}
        ></Form>
      )}
    </>
  );
}
