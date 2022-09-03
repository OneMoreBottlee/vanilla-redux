import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const toDos = useSelector((state) => state);
  const doId = useParams().id;
  const toDoText = toDos.find((todo) => todo.id === parseInt(doId));

  return (
    <>
      <div>{toDoText?.text}</div>
      <div>User ID:{toDoText?.id}</div>
    </>
  );
}

export default Detail;
