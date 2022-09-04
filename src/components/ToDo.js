import React from "react";
import { Link } from "react-router-dom";
import { remove } from "../store";
import { useDispatch } from "react-redux";


function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(remove(e));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button id={id} onClick={() => onClick(id)}>
        ❌
      </button>
    </li>
  );
}

export default ToDo;
