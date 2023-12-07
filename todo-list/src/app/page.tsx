"use client";

import "./styles.css";
import Image from "next/image";
import { Datepicker } from "flowbite-react";
import { MdAddCircle } from "react-icons/md";

export default function Home() {
  const handleDateChange = (date: Date) => {
    console.log("Date : " + date);
  };

  return (
    <>
      <div className="todo-list-app-container">
        <div className="main-container">
          <div className="main-tools-container">
            <div>
              <Datepicker
                autoHide={true}
                onSelectedDateChanged={(date) => handleDateChange(date)}
                style={{
                  height: "60px",
                  width: "220px",
                  borderRadius: "50px",
                  backgroundColor: "#d9d9d9",
                  fontSize: "14pt",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="new-task-button">
              <MdAddCircle className="new-task-icon" />
              <div className="new-task-text">New Task</div>
            </div>
          </div>

          <div className="todo-list-container">
            <div className="todo-list-card">
              <div className="check"></div>
              <div className="description">Finish building portfolio</div>
              <div className="remove"></div>
            </div>
            <div className="todo-list-card"></div>
            <div className="todo-list-card"></div>
            <div className="todo-list-card"></div>
            <div className="todo-list-card"></div>
            <div className="todo-list-card"></div>
            <div className="todo-list-card"></div>
            <div className="todo-list-card"></div>
          </div>
        </div>

        <div className="side-container">
          <div className="side-tools-container">
            <div className="profile">
              <Image
                src="/images/profile.png"
                alt="profile"
                height={55}
                width={55}
              />
            </div>
          </div>

          <div className="todo-list-details-container">
            <div className="todo-list-details">
              <div className="details-container"></div>
              <div className="save-button-container">
                <div className="save-button">Save</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
