import React from "react";
import "./CSS/AddButton.css";
import { Link } from "react-router-dom";

const AddTodo = () => {
  return (
    <div>
      <button
        id="mybutton"
        type="button"
        class="btn btn-secondary"
        style={{ borderRadius: "50%" }}
      >
        <Link
          to="/Add"
          style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
        >
          +
        </Link>
      </button>
    </div>
  );
};

export default AddTodo;
