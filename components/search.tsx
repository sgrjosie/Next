import React, { useState } from "react";
import { color } from "../styles/theme";
import SearchIcon from "../public/icons/search";
import Button from "@mui/material/Button";

type SearchProps = {
  value?: string;
  label?: string;
  radius?: number | string;
  width?: number | string;
  height?: number | string;
  bg?: string;
  border?: boolean;
  placeholder?: string;
  onClick?: (value: string | undefined) => any;
  onChange?: (value: string | undefined) => any;
};
export default function Search({
  value,
  label,
  radius = 12,
  width = 300,
  height = 38,
  bg = "rgb(231, 235, 240)",
  border = true,
  placeholder,
  onClick,
  onChange,
}: SearchProps) {
  const [val, setVal] = useState<string | undefined>();
  const inputStyle = {
    borderRadius: radius,
    width: width,
    height: height,
    background: bg,
    border: border ? "none" : "1px solid #000",
    padding: "0 3.3em",
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setVal(e.target.value);
    }
    onChange?.(val);
  };
  const handleClick = (val: string | undefined) => {
    onClick?.(val);
  };
  return (
    <>
      <label>{label}</label>
      <Button
        variant="text"
        style={{ position: "relative", left: "4.7em", marginLeft: "-5em" }}
        onClick={() => handleClick(val)}
      >
        <SearchIcon width={18} color={color.gray} />
      </Button>
      <input
        style={inputStyle}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </>
  );
}
