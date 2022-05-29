import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';
import TodoItem from './components/TodoItem';

function App() {

  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const writeValue = (e) => {
    setInputValue(e.target.value)
  }
  const addList = () => {
    setTodoList([...todoList, inputValue])
    setInputValue("")
  }
  const pressEnter = (e) => {
    if (e.key == 'Enter') {
      addList()
    }
  }
  const onRemove = (e) => {
    setTodoList(todoList.filter(todo => todo.e !== e))
  }
  
  return (
    <>
      <div className="inputAndButton">
        <input className="inputBox" value={inputValue} type="text" placeholder="Add List" onChange={writeValue} onKeyPress={pressEnter}></input>
        <button className="addButton" onClick={addList}>ADD</button>
      </div>
      <TodoBoard list={todoList} onRemove={onRemove}/>
    </>
  );
}

export default App;