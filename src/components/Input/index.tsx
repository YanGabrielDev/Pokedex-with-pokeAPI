import React from "react";
import "./style.css";

interface TextInpuProps {
  searchValue: string;
  handleChange: any;
}
export const TextInput: React.FC<TextInpuProps> = ({
  searchValue,
  handleChange,
}) => {
  return (
    <div className="input-container">
      <input
        placeholder="Search your Pokemon"
        className="text-input"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};
