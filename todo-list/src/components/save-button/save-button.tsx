import "./styles.css";
import { MdSave } from "react-icons/md";

export default function SaveButton() {
  return (
    <>
      <div className="save-button">
        <MdSave className="save-icon" />
        <div className="save-text">Save</div>
      </div>
    </>
  );
}
