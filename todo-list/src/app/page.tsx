import "./styles.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="todo-list-app-container">
        <div className="main-container">
          <div className="main-tools-container">
            <div className="date-picker"></div>
            <div className="new-task"></div>
          </div>

          <div className="todo-list-container">
            <div className="todo-list-card">
              <div className="check"></div>
              <div className="description">Finish building portfolio</div>
              <div className="remove">
                <Image
                  src="/images/remove.png"
                  alt="remove"
                  height={40}
                  width={40}
                />
              </div>
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
            <div className="profile"></div>
          </div>

          <div className="todo-list-details-container">
            <div className="todo-list-details">
              <div className="details-container"></div>
              <div className="save-container">
                <div className="save-button">Save</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
