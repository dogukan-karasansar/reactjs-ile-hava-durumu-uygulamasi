import { Link } from "react-router-dom";

export const Button = ({ ...props }) => {
  return (
    props.isShow && (
      <button
        onClick={props.onClick}
        className="bg-secondary hover:bg-third active:bg-third z-1 p-3 mt-4 text-white font-bold rounded-lg w-80"
      >
        {props.title}
      </button>
    )
  );
};
