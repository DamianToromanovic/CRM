import React from "react";
import { useState } from "react";
import Projects from "../components/Projects";
import Customer from "../components/Customer";
import Teams from "../components/Teams";

export default function TaskBoard() {
  const [activeTab, setActiveTab] = useState("customer");
  let content = null;

  switch (activeTab) {
    case "customer":
      content = <Customer />;
      break;
    case "teams":
      content = <Teams />;
      break;
    case "projects":
      content = <Projects />;
      break;
    default:
      content = null;
  }

  return (
    <>
      <button onClick={() => setActiveTab("customer")} type="button">
        Kunde
      </button>
      <button onClick={() => setActiveTab("teams")} type="button">
        Teams
      </button>
      <button onClick={() => setActiveTab("projects")} type="button">
        Projekt
      </button>
      <div>{content}</div>
    </>
  );
}
