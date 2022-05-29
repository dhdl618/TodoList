import React, {useState} from 'react'
import '../App.css';

function TodoItem (props) {

  const [checkBox, setCheckBox] = useState('❌')
  const changeCheck = () => {
    if (checkBox == '❌') {
      setCheckBox('✔️') 
    } else {
      setCheckBox('❌')
    }
  }
  
  return (
    <>
      <div className="itemList">
        {props.item}
        <div className="deleteAndicon">
          <button className="deleteButton">Delete</button>
          <span className="checkIcon" onClick={changeCheck}>
          {checkBox}
          </span>
        </div>
      </div>
    </>
  )
}

export default TodoItem