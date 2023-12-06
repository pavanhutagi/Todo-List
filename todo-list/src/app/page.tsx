import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="todo-list-app-container">
        <div className="main-container">
          <div className="main-tools-container"></div>
          <div className="todo-list-container">
            <div className="todo-list-card"></div>
            <div className="todo-list-card"></div>
            <div className="todo-list-card"></div>
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
          <div className="side-tools-container"></div>
          <div className="todo-list-details-container"></div>
        </div>
      </div>
    </>
  );
}
