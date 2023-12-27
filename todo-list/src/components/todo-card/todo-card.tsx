import "./styles.css";
import { MdOutlineRemoveCircle, MdCheckCircle } from "react-icons/md";

export default function TodoCard() {
  return (
    <>
      <div className="todo-card">
        <div className="check">
          {/* <MdCheckCircle className="check-icon" /> */}
        </div>
        <div className="description">Finish building portfolio</div>
        <div className="remove">
          <MdOutlineRemoveCircle />
        </div>
      </div>
    </>
  );
}
