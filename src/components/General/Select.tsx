import React from "react";
import "../../assets/styles/Select.css";
import { Form } from "react-bootstrap";
import Select from "react-select";
type Props = {
  placeholder: string;
};

export const CustomSelect: React.FC<Props> = (props) => {
  const { placeholder } = props;
  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      textAlign: "left",
    }),
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Select styles={customStyles} placeholder={placeholder} options={options} />
  );
};
