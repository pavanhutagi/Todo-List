import "./styles.css";
import { MdOutlineRemoveCircle } from "react-icons/md";

export default function TodoCard() {
  return (
    <>
      <div className="todo-card">
        <div className="check"></div>
        <div className="description">Finish building portfolio</div>
        <div className="remove">
          <MdOutlineRemoveCircle />
        </div>
      </div>
    </>
  );
}
