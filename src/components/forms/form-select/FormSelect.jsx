import Select, { StylesConfig } from "react-select";
import "./FormSelect.css";

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "var(--fourth-color)",
    borderRadius: "0.375rem",
    height: "3.2rem",
    color: "white",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: "var(--secondary-color)",
    color: "white",
    cursor: "pointer",
    borderRadius: "0.375rem",
    fontSize: "15px",
    fontFamily: "nunito",
    boxShadow: "none",
    ":hover": {
      backgroundColor: "var(--third-color)",
    },
    zIndex: 1,
    padding: "0.75rem",
    marginTop: "0.09rem",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    zIndex: 1,
    padding: 1,
    margin: 0,
    color: "white",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--seventh-color)",
    fontSize: "0.875rem",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
    fontSize: "15px",
    fontFamily: "nunito",
  }),
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
];

export const FormSelect = ({ ...props }) => {
  return (
    <Select
      placeholder={<div>{props.placeholder ?? "Seach location"}</div>}
      styles={customStyles}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      options={options}
      {...props}
    />
  );
};
