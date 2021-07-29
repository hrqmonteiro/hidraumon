import {FaWaze} from "react-icons/fa"

export default function WazeButton(props) {
  return (
    <>
      <a href={props.url} target="_blank">
        <button className="waze-button">
          <div id="icon">
            <FaWaze />
          </div>
          <span>
            Navegar com <strong>Waze</strong>
          </span>
        </button>
      </a>
    </>
  );
}
