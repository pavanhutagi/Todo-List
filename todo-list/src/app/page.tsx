"use client";

import "./styles.css";

import DatePicker from "@/components/date-picker/date-picker";
import Profile from "@/components/profile/profile";
import TodoCard from "@/components/todo-card/todo-card";
import Logo from "@/components/todo-logo/todo-logo";
import TodoDetails from "@/components/todo-details/todo-details";
import NewTaskButton from "@/components/new-task-button/new-task-button";

export default function Home() {
  return (
    <>
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
            <TodoCard />
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
    </>
  );
}
