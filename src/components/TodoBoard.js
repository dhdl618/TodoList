import React from 'react'
import TodoItem from './TodoItem'
import '../App.css';

function TodoBoard({list}) {

  return(
    <div className="board">
      <h1>Todo List</h1>
      {list.map((item, index) => <TodoItem key={index} item={item}></TodoItem>)}
    </div>
  )
}

export default TodoBoard;