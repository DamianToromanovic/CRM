import React from "react";

export default function Form({
  setInputVal,
  inputVal,
  taskList,
  setTaskList,
  initialForm,
  setShowForm,
}) {
  const updateVals = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const newTask = {
      ...inputVal,
      id: taskList.length + 1,
    };
    setTaskList([...taskList, newTask]);
    setInputVal(initialForm);
    setShowForm(false);
  };

  return (
    <>
      <form className="" onSubmit={submit} action="">
        <label htmlFor="title">Titel</label>
        <input onChange={updateVals} type="text" name="title" id="title" />
        <label htmlFor="description">Beschreibung</label>
        <textarea
          onChange={updateVals}
          name="description"
          id="description"
        ></textarea>

        <select onChange={updateVals} name="status" id="status">
          <option value="todo">Todo</option>
          <option value="inProgress">In Bearbeitung</option>

          <option value="done">Erledigt</option>
        </select>
        <button type="submit">Hinzufügen</button>
      </form>
    </>
  );
}
