import "./styles.css";
import { FcInspection } from "react-icons/fc";

export default function Logo() {
  return (
    <>
      <div className="logo-container">
        <div className="logo-icon">
          <FcInspection />
        </div>
        <div className="logo-text">Todo List</div>
      </div>
    </>
  );
}
