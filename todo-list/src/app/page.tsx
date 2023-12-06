import "./styles.css";

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
              <div></div>
              <div></div>
              <div></div>
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
            <div className="todo-list-details"></div>
          </div>
        </div>
      </div>
    </>
  );
}
