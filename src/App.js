import "./App.css";
import Header from "./CustomComponents/Header";
import Todos from "./CustomComponents/Todos";
import Footer from "./CustomComponents/Footer";
import { useEffect, useState } from "react";
import AddTodo from "./CustomComponents/AddTodo";
import SubmitTodo from "./CustomComponents/SubmitTodo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./CustomComponents/About";

function App() {
  let initTodos;
  console.log("Start");
  if (localStorage.getItem("todo") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todo"));
  }
  console.log(initTodos);

  // // async function fetchTodos() {
  // //     let response = await fetch('https://dummyjson.com/todos');
  // //     let data = await response.json();
  // //     data = JSON.stringify(data)
  // //     return data
  // // }
  // let list1 = [];
  // async function func(){await fetch("https://dummyjson.com/todos")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // return data.todos;
  //     list1 = data.todos
  //     console.log(list1)
  //   });
  // }
  // async function doo(){
  //   let data =  await to_dos
  //   return data

  // }
  const onAdd = (title, desc) => {
    let id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
    let todo = {
      id: id,
      todo: title,
      completed: false,
      userId: 26,
    };
    console.log(todos);
    console.log("Adding\n" + todo.id);
    setTodos([...todos, todo]);
  };
  const onDelete = (todo) => {
    setTodos(
      todos
        .filter((obj) => {
          return obj !== todo;
        })
        .map((obj) => {
          if (obj.id > todo.id) obj.id--;
          return obj;
        })
    );

    console.log("Deleted todo");
    console.log(todos);
  };
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todos));
    } else {
      localStorage.setItem("todo", JSON.stringify([]));
    }
  }, [todos]);

  return (
    <Router>
      <div id="page-container">
        <div id="content-wrap">
          <Header title="To-Do" />
          <Routes>
            <Route
              exact
              path="/"
              element={[
                <AddTodo />,
                <Todos todos={todos} onDelete={onDelete} />,
              ]}
            ></Route>
            <Route
              exact
              path="/Add"
              element={<SubmitTodo onAdd={onAdd} />}
            ></Route>
            <Route exact path="/About" element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
