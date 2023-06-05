import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitTodo = (props) => {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (todo === "") alert("Enter the Todo");
    else props.onAdd(todo, desc);
    setTodo("");
    setDesc("");
    navigate("/");
  };
  return (
    <div
      className="myClass"
      style={{ width: "50%", margin: "auto", marginBottom: "10px" }}
    >
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="exampleInputEmail" class="form-label">
            Title
          </label>
          <input
            class="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description(Optional)
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit" class="btn btn-success">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitTodo;
