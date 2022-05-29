import React, { useState } from "react";
import "../App.css";

function TodoItem(props) {

  const [deleteList, setDeleteList] = useState([]);
  const [checkBox, setCheckBox] = useState("❌");
  const changeCheck = () => {
    if (checkBox == "❌") {
      setCheckBox("✔️");
    } else {
      setCheckBox("❌");
    }
  };
  const removeList = () => {
      if (props.key !== props) {
          setDeleteList(...deleteList, deleteList)
      }
  }

  return (
    <>
      <div className="itemList">
        {props.item}
        <div className="deleteAndicon">
          <button className="deleteButton" onClick={removeList}>Delete</button>
          <span className="checkIcon" onClick={changeCheck}>
            {checkBox}
          </span>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
