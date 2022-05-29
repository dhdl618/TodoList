import React from 'react'
import TodoItem from './TodoItem'
import '../App.css';

function TodoBoard(props) {
  return(
    <div className="board">
      <h1>Todo List</h1>
      {props.list.map((item) => <TodoItem item={item}/>)}
    </div>
  )
}

export default TodoBoard;