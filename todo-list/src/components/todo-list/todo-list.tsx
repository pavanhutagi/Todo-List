"use client";

import "./styles.css";

import TodoCard from "@/components/todo-card/todo-card";
import ToDoListData from "@/data/todo-list.json";
import { Dispatch, UnknownAction } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  selectToDoListData,
  toDoListDataAction,
} from "@/store/slices/toDoListSlice";
import { selectSelectedDate } from "@/store/slices/commonSlice";
import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface ToDoList {
  id: number;
  description: string;
  createdOn: string;
  dueBy: string;
  status: string;
}

export default function ToDoList() {
  const dispatch = useDispatch();

  const toListDataState = useSelector(selectToDoListData);
  const selectedDateState = useSelector(selectSelectedDate);

  useEffect(() => {
    getToDoListData(dispatch, selectedDateState);
  }, [selectedDateState]);

  return (
    <>
      {toListDataState.length != 0 ? (
        toListDataState?.map((toDoList: ToDoList) => (
          <TodoCard key={toDoList.id} toDoList={toDoList} />
        ))
      ) : (
        <div className="no-data-container">
          <div className="message">
            <Player
              src="../data/no-data-lottie.json"
              loop
              autoplay
              speed={10}
            />
            No tasks for today. <br /> Go ahead and add some.
          </div>
        </div>
      )}
    </>
  );
}

function getToDoListData(
  dispatch: Dispatch<UnknownAction>,
  selectedDateState: any
) {
  const toDoListData = JSON.parse(JSON.stringify(ToDoListData));

  const filteredToDoListData = toDoListData.todos.filter(
    (todo: ToDoList) =>
      new Date(todo.createdOn).toDateString() ==
      new Date(selectedDateState).toDateString()
  );

  dispatch(toDoListDataAction(filteredToDoListData));
}
