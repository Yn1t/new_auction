import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
    width: 100%;
    padding:5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    resize: vertical;
    border-radius:15px;
    border: 5px solid rgb(99, 117, 144);
    box-shadow:4px 4px 10px rgba(0,0,0,0.06);
`;

type Props = {
  onChange: (value: string) => void;
  placeholder: string;
  type: string;
};

const Input = ({ onChange, placeholder, type }: Props) => {
  return (
    <StyledInput
      onChange={(e: React.ChangeEvent<HTMLInputElement>
      ) => {
        onChange(e.target.value);
      }} placeholder={placeholder} type={type}
    ></StyledInput>

  );
};

export default Input;