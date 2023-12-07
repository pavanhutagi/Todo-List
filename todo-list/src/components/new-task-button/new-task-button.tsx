import "./styles.css";

import { MdAddCircle } from "react-icons/md";

export default function NewTaskButton() {
  return (
    <>
      <div className="new-task-button">
        <MdAddCircle className="new-task-icon" />
        <div className="new-task-text">New Task</div>
      </div>
    </>
  );
}
