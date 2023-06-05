import React from 'react'

const Todo = (props) => {
  return (
    <div className="card" style={{width: "50%", margin: "auto", marginBottom:"10px"}}>
  <div className="card-body">
    <h5 className="card-title">{props.todo.todo}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</a>
  </div>
</div>
  ) 
}

export default Todo
