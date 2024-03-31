import AsyncSelect from "react-select";
import "./FormSelect.css";

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "var(--fourth-color)",
    borderRadius: "0.375rem",
    color: "white",
    border: "none",
    boxShadow: "none",
    margin: "16",
    padding: "0.75rem",
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
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "var(--secondary-color)",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "white",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "white",
    ":hover": {
      backgroundColor: "var(--third-color)",
      color: "white",
    },
  }),
};

export const FormSelect = ({ ...props }) => {
  return (
    <div className="form-select w-80">
      <AsyncSelect
        cacheOptions
        defaultOptions
        placeholder={<div>{props.placeholder ?? "Seach location"}</div>}
        styles={customStyles}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        options={props.options || []}
        {...props}
      />
    </div>
  );
};
