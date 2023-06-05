import React from "react";
import Todo from "./Todo";
import { Link } from "react-router-dom";
const collect = require("collect.js");
export default function Todos(props) {
  // const collection = collect(to_dos);
  // const newObject = collection.toArray();
  // console.log("Getting\n " + newObject)
  console.log("Getting\n");
  return (
    <div
      className="myClass"
      style={{ textAlign: "center", clear: "both", marginTop: "20px" }}
    >
      <h3 style={{ margin: "20px" }}>My To-Do List</h3>
      {props.todos.length !== 0 ? (
        props.todos.map((todo) => {
          return <Todo todo={todo} key="{todo.id}" onDelete={props.onDelete} />;
        })
      ) : (
        <h6>You have no todos</h6>
      )}
      <button
        type="button"
        class="btn btn-secondary"
        style={{ marginBottom: "15px", padding: "5px 20px" }}
      >
        <Link to="/Add" style={{ textDecoration: "none", color: "white" }}>
          Add Todos
        </Link>
      </button>
    </div>
  );
}
