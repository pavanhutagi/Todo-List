"use client";

import "./styles.css";

import { Provider } from "react-redux";
import store from "@/store/store";

import DatePicker from "@/components/date-picker/date-picker";
import Profile from "@/components/profile/profile";
import Logo from "@/components/todo-logo/todo-logo";
import TodoDetails from "@/components/todo-details/todo-details";
import NewTaskButton from "@/components/new-task-button/new-task-button";
import ToDoList from "@/components/todo-list/todo-list";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <div className="todo-list-app-container">
          <div className="main-container">
            <div className="main-tools-container">
              <div className="logo">
                <Logo />
              </div>
              <div className="tools">
                <DatePicker />
                <NewTaskButton />
              </div>
            </div>

            <div className="todo-list-container">
              <ToDoList />
            </div>
          </div>

          <div className="side-container">
            <div className="side-tools-container">
              <Profile />
            </div>

            <div className="todo-details-container">
              <TodoDetails />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}
