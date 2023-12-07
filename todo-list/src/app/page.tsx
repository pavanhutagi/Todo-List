"use client";

import "./styles.css";

import DatePicker from "@/components/date-picker/date-picker";
import NewTaskButton from "@/components/new-task-button/new-task-button";
import Profile from "@/components/profile/profile";
import SaveButton from "@/components/save-button/save-button";
import TodoCard from "@/components/todo-card/TodoCard";

export default function Home() {
  return (
    <>
      <div className="todo-list-app-container">
        <div className="main-container">
          <div className="main-tools-container">
            <DatePicker />
            <NewTaskButton />
          </div>

          <div className="todo-list-container">
            <TodoCard />
          </div>
        </div>

        <div className="side-container">
          <div className="side-tools-container">
            <Profile />
          </div>

          <div className="todo-list-details-container">
            <div className="todo-list-details">
              <div className="details-container"></div>
              <div className="save-button-container">
                <SaveButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
