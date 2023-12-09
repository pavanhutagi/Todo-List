import "./styles.css";
import { useState, FormEvent } from "react";

export default function TodoDetails() {
  const [taskDescription, setTaskDescription] = useState("");
  const [createdOn, setCreatedOn] = useState("");
  const [dueBy, setDueBy] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="todo-details">
        <div className="details-container">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="task-description">
              <label htmlFor="task-description">Task Description:</label>
              <br />
              <textarea
                id="task-description"
                value={taskDescription}
                onChange={(event) => setTaskDescription(event.target.value)}
              />
            </div>

            <div className="created-on">
              <label htmlFor="created-on">Created On:</label>
              <br />
              <input
                type="date"
                id="created-on"
                value={createdOn}
                onChange={(event) => setCreatedOn(event.target.value)}
              />
            </div>

            <div className="due-by">
              <label htmlFor="due-by">Due By:</label>
              <br />
              <input
                type="date"
                id="due-by"
                value={dueBy}
                onChange={(event) => setDueBy(event.target.value)}
              />
            </div>

            <button type="submit" className="save-button-container">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
