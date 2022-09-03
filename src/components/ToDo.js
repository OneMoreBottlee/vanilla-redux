import React from "react";
import { Link } from "react-router-dom";

function ToDo({ text, id, onClick }) {
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
