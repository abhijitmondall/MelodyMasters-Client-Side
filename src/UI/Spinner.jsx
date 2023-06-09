import icons from "./../assets/icons.svg";
import { createPortal } from "react-dom";
import "./Spinner.css";

const Spinner = () => {
  return (
    <>
      {createPortal(
        <div className="spinner">
          <svg className="spinner__icon">
            <use xlinkHref={`${icons}#icon-spinner3`}></use>
          </svg>
        </div>,
        document.getElementById("spinner")
      )}
    </>
  );
};

export default Spinner;
