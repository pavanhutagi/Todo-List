"use client";

import "./styles.css";

import { MdOutlineRemoveCircle, MdCheckCircle } from "react-icons/md";
import { useState } from "react";

interface ToDoList {
  id: number;
  description: string;
  createdOn: string;
  dueBy: string;
  status: string;
}
interface Props {
  toDoList: ToDoList;
}

export default function TodoCard({ toDoList }: Props) {
  const [isChecked, setIsChecked] = useState(
    toDoList.status == "completed" ? true : false
  );

  return (
    <>
      <div className={`todo-card ${toDoList.status}`}>
        <div className="check" onClick={() => setIsChecked(!isChecked)}>
          {isChecked ? <MdCheckCircle /> : <></>}
        </div>

        <div className="description">{toDoList.description}</div>

        <div className="remove">
          <MdOutlineRemoveCircle />
        </div>
      </div>
    </>
  );
}
