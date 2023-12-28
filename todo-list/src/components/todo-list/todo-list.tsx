"use client";

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
      {toListDataState?.map((toDoList: ToDoList) => (
        <TodoCard key={toDoList.id} toDoList={toDoList} />
      ))}
    </>
  );
}

function getToDoListData(
  dispatch: Dispatch<UnknownAction>,
  selectedDateState: any
) {
  console.log("Selected Date - ", selectedDateState);

  const toDoListData = JSON.parse(JSON.stringify(ToDoListData));
  dispatch(toDoListDataAction(toDoListData.todos));
}
