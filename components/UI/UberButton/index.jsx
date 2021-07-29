import { FaUber } from "react-icons/fa";
import { SiUber } from "react-icons/si";

export default function UberButton(props) {
  return (
    <>
      <a href={props.url} target="_blank">
        <button className="uber-button">
          <div id="icon">
            <FaUber />
          </div>
          <span>Pedir um <strong>Uber</strong></span>
        </button>
      </a>
    </>
  );
}
